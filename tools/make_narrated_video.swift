import AppKit
import AVFoundation
import CoreVideo
import Foundation

struct FrameEntry {
  let imageURL: URL
  let duration: Double
}

struct AudioEntry {
  let url: URL
  let start: Double?
}

func fail(_ message: String) -> Never {
  FileHandle.standardError.write((message + "\n").data(using: .utf8)!)
  exit(1)
}

guard CommandLine.arguments.count == 4 else {
  fail("usage: swift tools/make_narrated_video.swift <frame-manifest.tsv> <audio-manifest.txt> <output.mp4>")
}

let frameManifestURL = URL(fileURLWithPath: CommandLine.arguments[1])
let audioManifestURL = URL(fileURLWithPath: CommandLine.arguments[2])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[3])
let tempVideoURL = outputURL.deletingLastPathComponent().appendingPathComponent(outputURL.deletingPathExtension().lastPathComponent + ".silent.mp4")

let frameLines = try String(contentsOf: frameManifestURL, encoding: .utf8)
  .split(separator: "\n")
  .map(String.init)
  .filter { !$0.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty }

let frames = frameLines.map { line -> FrameEntry in
  let parts = line.split(separator: "\t", maxSplits: 1).map(String.init)
  guard parts.count == 2, let duration = Double(parts[1]) else {
    fail("invalid frame manifest line: \(line)")
  }
  return FrameEntry(imageURL: URL(fileURLWithPath: parts[0]), duration: duration)
}

let audioEntries = try String(contentsOf: audioManifestURL, encoding: .utf8)
  .split(separator: "\n")
  .map(String.init)
  .filter { !$0.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty }
  .map { line -> AudioEntry in
    let parts = line.split(separator: "\t", maxSplits: 1).map(String.init)
    if parts.count == 2 {
      guard let start = Double(parts[1]) else {
        fail("invalid audio manifest start time: \(line)")
      }
      return AudioEntry(url: URL(fileURLWithPath: parts[0]), start: start)
    }
    return AudioEntry(url: URL(fileURLWithPath: line), start: nil)
  }

guard !frames.isEmpty else { fail("frame manifest is empty") }
guard !audioEntries.isEmpty else { fail("audio manifest is empty") }

try? FileManager.default.removeItem(at: outputURL)
try? FileManager.default.removeItem(at: tempVideoURL)

let videoWidth = 1920
let videoHeight = 1080
let videoSize = CGSize(width: videoWidth, height: videoHeight)
let timescale: CMTimeScale = 600

func pixelBuffer(from imageURL: URL) -> CVPixelBuffer {
  guard let image = NSImage(contentsOf: imageURL),
        let cgImage = image.cgImage(forProposedRect: nil, context: nil, hints: nil) else {
    fail("could not load image: \(imageURL.path)")
  }

  var pixelBuffer: CVPixelBuffer?
  let attrs: [String: Any] = [
    kCVPixelBufferCGImageCompatibilityKey as String: true,
    kCVPixelBufferCGBitmapContextCompatibilityKey as String: true,
  ]
  let status = CVPixelBufferCreate(
    kCFAllocatorDefault,
    videoWidth,
    videoHeight,
    kCVPixelFormatType_32ARGB,
    attrs as CFDictionary,
    &pixelBuffer
  )
  guard status == kCVReturnSuccess, let buffer = pixelBuffer else {
    fail("could not create pixel buffer")
  }

  CVPixelBufferLockBaseAddress(buffer, [])
  defer { CVPixelBufferUnlockBaseAddress(buffer, []) }

  guard let context = CGContext(
    data: CVPixelBufferGetBaseAddress(buffer),
    width: videoWidth,
    height: videoHeight,
    bitsPerComponent: 8,
    bytesPerRow: CVPixelBufferGetBytesPerRow(buffer),
    space: CGColorSpaceCreateDeviceRGB(),
    bitmapInfo: CGImageAlphaInfo.noneSkipFirst.rawValue
  ) else {
    fail("could not create bitmap context")
  }

  context.setFillColor(NSColor.white.cgColor)
  context.fill(CGRect(origin: .zero, size: videoSize))

  let sourceSize = CGSize(width: cgImage.width, height: cgImage.height)
  let scale = min(videoSize.width / sourceSize.width, videoSize.height / sourceSize.height)
  let drawSize = CGSize(width: sourceSize.width * scale, height: sourceSize.height * scale)
  let drawRect = CGRect(
    x: (videoSize.width - drawSize.width) / 2,
    y: (videoSize.height - drawSize.height) / 2,
    width: drawSize.width,
    height: drawSize.height
  )
  context.draw(cgImage, in: drawRect)

  return buffer
}

func makeSilentVideo() throws {
  let writer = try AVAssetWriter(outputURL: tempVideoURL, fileType: .mp4)
  let settings: [String: Any] = [
    AVVideoCodecKey: AVVideoCodecType.h264,
    AVVideoWidthKey: videoWidth,
    AVVideoHeightKey: videoHeight,
    AVVideoCompressionPropertiesKey: [
      AVVideoAverageBitRateKey: 4_500_000,
      AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel,
    ],
  ]
  let input = AVAssetWriterInput(mediaType: .video, outputSettings: settings)
  input.expectsMediaDataInRealTime = false
  let adaptor = AVAssetWriterInputPixelBufferAdaptor(
    assetWriterInput: input,
    sourcePixelBufferAttributes: [
      kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32ARGB,
      kCVPixelBufferWidthKey as String: videoWidth,
      kCVPixelBufferHeightKey as String: videoHeight,
    ]
  )

  guard writer.canAdd(input) else { fail("could not add video input") }
  writer.add(input)
  guard writer.startWriting() else { fail("could not start writer: \(writer.error?.localizedDescription ?? "unknown")") }
  writer.startSession(atSourceTime: .zero)

  var current = CMTime.zero
  var lastBuffer: CVPixelBuffer?
  for (index, frame) in frames.enumerated() {
    while !input.isReadyForMoreMediaData {
      Thread.sleep(forTimeInterval: 0.01)
    }
    let buffer = pixelBuffer(from: frame.imageURL)
    guard adaptor.append(buffer, withPresentationTime: current) else {
      fail("could not append frame \(index + 1): \(writer.error?.localizedDescription ?? "unknown")")
    }
    lastBuffer = buffer
    current = current + CMTime(seconds: frame.duration, preferredTimescale: timescale)
    if (index + 1) % 25 == 0 {
      print("wrote \(index + 1) / \(frames.count) frames")
    }
  }

  if let lastBuffer {
    while !input.isReadyForMoreMediaData {
      Thread.sleep(forTimeInterval: 0.01)
    }
    _ = adaptor.append(lastBuffer, withPresentationTime: current)
  }

  input.markAsFinished()
  let group = DispatchGroup()
  group.enter()
  writer.finishWriting {
    group.leave()
  }
  group.wait()

  if writer.status != .completed {
    fail("video writer failed: \(writer.error?.localizedDescription ?? "unknown")")
  }
}

func makeFinalVideo() throws {
  let composition = AVMutableComposition()
  let videoAsset = AVURLAsset(url: tempVideoURL)
  guard let sourceVideoTrack = videoAsset.tracks(withMediaType: .video).first,
        let compositionVideoTrack = composition.addMutableTrack(withMediaType: .video, preferredTrackID: kCMPersistentTrackID_Invalid) else {
    fail("could not read silent video track")
  }
  guard let compositionAudioTrack = composition.addMutableTrack(withMediaType: .audio, preferredTrackID: kCMPersistentTrackID_Invalid) else {
    fail("could not create audio track")
  }

  var cursor = CMTime.zero
  for (index, audioEntry) in audioEntries.enumerated() {
    let audioAsset = AVURLAsset(url: audioEntry.url)
    guard let audioTrack = audioAsset.tracks(withMediaType: .audio).first else {
      fail("could not read audio track: \(audioEntry.url.path)")
    }
    let insertionTime: CMTime
    if let start = audioEntry.start {
      insertionTime = CMTime(seconds: start, preferredTimescale: timescale)
      cursor = insertionTime + audioAsset.duration
    } else {
      insertionTime = cursor
      cursor = cursor + audioAsset.duration
    }
    try compositionAudioTrack.insertTimeRange(
      CMTimeRange(start: .zero, duration: audioAsset.duration),
      of: audioTrack,
      at: insertionTime
    )
    print("inserted audio \(index + 1) / \(audioEntries.count)")
  }

  try compositionVideoTrack.insertTimeRange(
    CMTimeRange(start: .zero, duration: videoAsset.duration),
    of: sourceVideoTrack,
    at: .zero
  )
  compositionVideoTrack.preferredTransform = sourceVideoTrack.preferredTransform

  guard let exporter = AVAssetExportSession(asset: composition, presetName: AVAssetExportPresetHighestQuality) else {
    fail("could not create exporter")
  }
  exporter.outputURL = outputURL
  exporter.outputFileType = .mp4
  exporter.shouldOptimizeForNetworkUse = true

  let group = DispatchGroup()
  group.enter()
  exporter.exportAsynchronously {
    group.leave()
  }
  group.wait()

  if exporter.status != .completed {
    fail("export failed: \(exporter.error?.localizedDescription ?? "unknown")")
  }
}

print("creating silent video...")
try makeSilentVideo()
print("combining audio...")
try makeFinalVideo()
print("wrote \(outputURL.path)")
