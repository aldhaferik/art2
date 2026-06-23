from html.parser import HTMLParser
from html import unescape
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps
import re
import shutil
import subprocess

ROOT = Path("/Users/kh/Users/Kh/documents/EOSAPP")
OUT = ROOT / "output/video/generated_frames"
if OUT.exists():
    shutil.rmtree(OUT)
OUT.mkdir(parents=True, exist_ok=True)

html = (ROOT / "index.html").read_text(encoding="utf-8")


class ArticleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []
        self.images = []
        self.skip = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in {"script", "style", "input", "button", "audio"}:
            self.skip += 1
        if tag in {"p", "h3", "h4", "tr", "li", "div", "table"} and not self.skip:
            self.parts.append("\n")
        if tag == "img" and not self.skip:
            src = attrs.get("src", "").strip()
            alt = attrs.get("alt", "").strip()
            if src.startswith("./assets/"):
                self.images.append((src.replace("./", ""), alt or "دليل مرفق"))

    def handle_endtag(self, tag):
        if tag in {"script", "style", "input", "button", "audio"} and self.skip:
            self.skip -= 1
        if tag in {"p", "h3", "h4", "tr", "li", "table"} and not self.skip:
            self.parts.append("\n")

    def handle_data(self, data):
        if not self.skip:
            text = data.strip()
            if text:
                self.parts.append(text + " ")


def parse_article(article_id):
    match = re.search(rf'<article id="{re.escape(article_id)}"[^>]*>(.*?)</article>', html, re.S)
    if not match:
        raise SystemExit(f"missing {article_id}")
    parser = ArticleParser()
    parser.feed(match.group(1))
    text = unescape("".join(parser.parts))
    lines = []
    for line in text.splitlines():
        line = re.sub(r"\s+", " ", line).strip()
        if line and line not in lines[-2:]:
            lines.append(line)
    images = []
    seen = set()
    for src, alt in parser.images:
        if src not in seen:
            images.append((src, alt))
            seen.add(src)
    return "\n".join(lines), images


def extract_page(article_parts):
    texts = []
    images = []
    seen = set()
    for article_id in article_parts.split("+"):
        text, page_images = parse_article(article_id)
        texts.append(text)
        for src, alt in page_images:
            if src not in seen:
                images.append((src, alt))
                seen.add(src)
    return "\n\n".join(texts), images


ARTICLE_IDS = [
    "introPageChevron+introPageCertificate",
    "introPageClaimantPerformance",
    "introPageEntitlements",
    "introPageCip",
    "introPageNoticeCompensation",
    "introPageHolidayWork",
    "introPageAnnualLeaveWork",
    "introPageOvertimeWork",
    "introPageFinalWarningDeduction",
    "introPageSavingsFund",
    "introPageServiceAwards",
    "introPageAnnualLeavePolicyViolation",
    "introPageCivilLiabilityPrelude",
    "introPagePsychologicalDamage",
    "introPageLostOpportunityDamage",
    "introPageSanedCompensation",
    "introPageGosiContributionCompensation",
    "introPageMedicalInsuranceLoss",
    "introPageMiscellaneousLosses",
]

TITLES = [
    "اولا: اثبات ان طبيعة عمل شيفرون السعودية تنتمي الى القطاع النفطي",
    "ثانيا: مختصر عن أداء المدعي وسبب المشكلة",
    "ثالثا: حساب المستحقات",
    "مكافأة حافز النجاح (البونص)",
    "ثلاثة أشهر بدل إشعار فصل",
    "العمل خلال العيد وخلال وقفة عرفة",
    "العمل خلال الإجازة السنوية",
    "العمل الإضافي",
    "خصم خمس أيام وإنذار نهائي",
    "صندوق الادخار",
    "جوائز تقدير سنوات الخدمة",
    "مخالفة اللائحة الداخلية لقانون العمل الكويتي للإجازة السنوية",
    "تمهيد للمطالبات المدنية والتعويضية القادمة",
    "راتب سنتين إجمالي تعويض عن الضرر النفسي الجسيم الذي لحق بالمدعي واستحالة ايجاد عمل",
    "تعويض عن الخسارة الواقعة والكسب الفائت وتفويت الفرص الجدية",
    "التعويض عن فقدان إعانة ساند",
    "التعويض عن ٦ أشهر اشتراك تأمينات اجتماعية",
    "التعويض عن فقدان التأمين الطبي",
    "تعويضات لخسائر متفرقة تسببت بها المدعى عليها",
]

W, H = 1920, 1080
FONT_TITLE = ImageFont.truetype("/Library/Fonts/Arial Unicode.ttf", 42)
FONT_BODY = ImageFont.truetype("/Library/Fonts/Arial Unicode.ttf", 27)
FONT_SMALL = ImageFont.truetype("/Library/Fonts/Arial Unicode.ttf", 22)
FONT_LABEL = ImageFont.truetype("/Library/Fonts/Arial Unicode.ttf", 27)
FONT_CAPTION = ImageFont.truetype("/Library/Fonts/Arial Unicode.ttf", 30)
FIT_IMAGE_CACHE = {}


def afduration(path):
    output = subprocess.check_output(["/usr/bin/afinfo", str(path)], text=True, stderr=subprocess.DEVNULL)
    match = re.search(r"estimated duration: ([0-9.]+)", output)
    return float(match.group(1))


def wrap_rtl(draw, text, font, max_width):
    lines = []
    for para in text.splitlines():
        para = para.strip()
        if not para:
            continue
        words = para.split()
        line = ""
        for word in words:
            candidate = (line + " " + word).strip()
            bbox = draw.textbbox((0, 0), candidate, font=font, direction="rtl")
            if bbox[2] - bbox[0] <= max_width or not line:
                line = candidate
            else:
                lines.append(line)
                line = word
        if line:
            lines.append(line)
    return lines


def limited_text(text, max_chars=2600):
    text = re.sub(r"\n{3,}", "\n\n", text)
    if len(text) <= max_chars:
        return text
    return text[:max_chars].rsplit(" ", 1)[0] + " ..."


def draw_header(draw, title, index, suffix=""):
    draw.rectangle((0, 0, W, 92), fill="#0f5d4a")
    display_title = title if len(title) < 72 else title[:70] + "…"
    draw.text((W - 58, 46), display_title, font=FONT_TITLE, fill="white", anchor="rm", direction="rtl")
    draw.text((58, 52), f"C{index:02}{suffix}", font=FONT_LABEL, fill="#dff6ec", anchor="lm")


def load_fit_image(src, max_width, max_height):
    key = (src, max_width, max_height)
    if key in FIT_IMAGE_CACHE:
        return FIT_IMAGE_CACHE[key].copy()
    image = Image.open(ROOT / src).convert("RGB")
    image = ImageOps.exif_transpose(image)
    image.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)
    FIT_IMAGE_CACHE[key] = image.copy()
    return image


def paste_center(base, image, box):
    x1, y1, x2, y2 = box
    x = x1 + (x2 - x1 - image.width) // 2
    y = y1 + (y2 - y1 - image.height) // 2
    base.paste(image, (x, y))


def draw_zoomed_evidence(base, evidence, box, caption_prefix="الدليل المعروض"):
    draw = ImageDraw.Draw(base)
    x1, y1, x2, y2 = box
    draw.rounded_rectangle((x1, y1, x2, y2), radius=22, fill="#f5fbf8", outline="#c8dfd5", width=2)
    if not evidence:
        draw.text((x2 - 26, y1 + 46), "لا توجد صورة دليل في هذه الصفحة", font=FONT_SMALL, fill="#52655e", anchor="ra", direction="rtl")
        return
    src, alt = evidence
    caption = f"{caption_prefix}: {alt}"
    draw.text((x2 - 26, y1 + 38), caption[:78] + ("…" if len(caption) > 78 else ""), font=FONT_SMALL, fill="#275648", anchor="ra", direction="rtl")
    try:
        image = load_fit_image(src, x2 - x1 - 52, y2 - y1 - 105)
        paste_center(base, image, (x1 + 26, y1 + 76, x2 - 26, y2 - 28))
    except Exception:
        draw.text((x2 - 28, y1 + 90), f"تعذر تحميل الدليل: {src}", font=FONT_SMALL, fill="#8b2d2d", anchor="ra", direction="rtl")
    draw.text((x1 + 24, y2 - 14), Path(src).name, font=FONT_SMALL, fill="#5c6c66", anchor="ld")


def draw_audio_slide(title, body, first_evidence, progress, index, duration):
    image = Image.new("RGB", (W, H), "#f7faf8")
    draw = ImageDraw.Draw(image)
    draw_header(draw, title, index)
    draw.rounded_rectangle((70, 125, W - 70, H - 105), radius=24, fill="white", outline="#b8d8c9", width=3)

    text_box = (W - 900, 160, W - 120, H - 145)
    evidence_box = (100, 160, W - 940, H - 145)
    draw.line((text_box[0] - 24, 125, text_box[0] - 24, H - 105), fill="#0f7a5f", width=8)
    draw_zoomed_evidence(image, first_evidence, evidence_box, "الدليل المرافق أثناء الشرح")

    body = limited_text(body)
    visible = body[: int(len(body) * progress)]
    lines = wrap_rtl(draw, visible, FONT_BODY, text_box[2] - text_box[0] - 30)
    y = text_box[1]
    max_lines = 19
    for line in lines[:max_lines]:
        draw.text((text_box[2], y), line, font=FONT_BODY, fill="#17231f", anchor="ra", direction="rtl")
        y += 38
    if len(lines) > max_lines:
        draw.text((text_box[2], H - 155), "…", font=FONT_BODY, fill="#596863", anchor="ra", direction="rtl")

    draw.rounded_rectangle((90, H - 70, W - 90, H - 34), radius=18, fill="#e8f5ef")
    draw.rounded_rectangle((90, H - 70, 90 + int((W - 180) * progress), H - 34), radius=18, fill="#13a36f")
    mins = int(duration // 60)
    secs = int(round(duration % 60))
    footer = f"المقطع {index} من 19 • الصوت يعمل الآن {mins}:{secs:02d}"
    draw.text((W - 105, H - 22), footer, font=FONT_SMALL, fill="#42534d", anchor="rd", direction="rtl")
    return image


def draw_post_audio_evidence_slide(title, evidence, index, ev_index, ev_total):
    src, alt = evidence
    image = Image.new("RGB", (W, H), "#f7faf8")
    draw = ImageDraw.Draw(image)
    draw_header(draw, title, index, f" • بعد الصوت {ev_index}/{ev_total}")
    draw.rounded_rectangle((70, 120, W - 70, H - 70), radius=22, fill="white", outline="#b8d8c9", width=3)
    draw.text((W - 105, 142), f"دليل إضافي بعد انتهاء صوت هذا الجزء: {alt}", font=FONT_CAPTION, fill="#17372f", anchor="ra", direction="rtl")
    try:
        evidence_image = load_fit_image(src, W - 190, H - 240)
        paste_center(image, evidence_image, (95, 185, W - 95, H - 95))
    except Exception:
        draw.text((W // 2, H // 2), f"تعذر تحميل الدليل: {src}", font=FONT_CAPTION, fill="#8b2d2d", anchor="mm", direction="rtl")
    draw.text((105, H - 34), Path(src).name, font=FONT_SMALL, fill="#5c6c66", anchor="ld")
    return image


frame_manifest = []
audio_manifest = []
timeline_cursor = 0.0
post_audio_seconds_per_evidence = 3.0

for index, article_id in enumerate(ARTICLE_IDS, start=1):
    audio = ROOT / f"assets/audio/C{index:02d}.m4a"
    audio_duration = afduration(audio)
    audio_manifest.append(f"{audio}\t{timeline_cursor:.6f}")
    body, images = extract_page(article_id)
    first_evidence = images[0] if images else None

    audio_steps = 12
    step_duration = audio_duration / audio_steps
    for step in range(1, audio_steps + 1):
        frame = OUT / f"page-{index:02d}-audio-{step:02d}.png"
        draw_audio_slide(TITLES[index - 1], body, first_evidence, step / audio_steps, index, audio_duration).save(frame, optimize=True)
        frame_manifest.append((str(frame), step_duration))
        timeline_cursor += step_duration

    extra_images = images[1:]
    for evidence_index, evidence in enumerate(extra_images, start=1):
        frame = OUT / f"page-{index:02d}-post-audio-evidence-{evidence_index:02d}.png"
        draw_post_audio_evidence_slide(TITLES[index - 1], evidence, index, evidence_index, len(extra_images)).save(frame, optimize=True)
        frame_manifest.append((str(frame), post_audio_seconds_per_evidence))
        timeline_cursor += post_audio_seconds_per_evidence

(ROOT / "output/video/frame_manifest.tsv").write_text(
    "\n".join(f"{path}\t{duration:.6f}" for path, duration in frame_manifest) + "\n",
    encoding="utf-8",
)
(ROOT / "output/video/audio_manifest.txt").write_text("\n".join(audio_manifest) + "\n", encoding="utf-8")
print("frames", len(frame_manifest), "out", OUT)
print("post audio evidence slides", sum(1 for path, _ in frame_manifest if "post-audio-evidence" in path))
print("total duration", sum(duration for _, duration in frame_manifest))
