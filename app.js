const STORAGE_KEY = "claims-report-app";
const CONTENT_VERSION = "2026-06-23-video-audio-then-evidence";

const civilLiabilityPreludeParagraphs = [
  "الثابت من تسلسل الوقائع أن المدعى عليها لم تكتفِ بإنهاء خدمة المدعي، بل سبقت ذلك ولحقته بإجراءات متلاحقة تمثلت في فتح تحقيق تأديبي غير متناسب، وإسناد اتهام جزائي لم يثبت فنياً، واستدعاء شهود شابت شهادتهم قرائن جدية على الضغط والتوجيه، واحتجاز مستحقات مالية وادخارية واجبة الأداء، والإخلال بتعهدات بنكية معلومة الأثر، ثم المضي في إجراءات وخصومات من شأنها إطالة أمد الاتهام وإبقاء المدعي تحت وطأة مركز قانوني واجتماعي ومالي مضطرب.",
  "هذه الوقائع تشكل خطأً تقصيرياً مستقلاً موجباً للتعويض، عملاً بالمادة 227 من القانون المدني التي تقرر مسؤولية من يحدث بفعله الخاطئ ضرراً بالغير، سواء كان مباشراً أو متسبباً. كما أن المادة 30 من القانون المدني تجعل استعمال الحق غير مشروع إذا انحرف به صاحبه عن غرضه، أو لم يقصد به سوى الإضرار بالغير، أو ترتبت عليه مصلحة لا تتناسب مع الضرر، أو ألحق بالغير ضرراً فاحشاً غير مألوف",
  "أولاً: الأساس القانوني العام للمسؤولية المدنية المستقلة",
  "فالقانون المدني الكويتي قرر في المادة 227 أن كل من أحدث بفعله الخاطئ ضرراً بغيره يلتزم بتعويضه، وقرر في المادة 230 أن الضرر الواجب التعويض يشمل الخسارة التي وقعت والكسب الذي فات متى كانا نتيجة طبيعية للعمل غير المشروع، وقرر في المادة 231 أن التعويض يشمل الضرر الأدبي، ومنه الأذى النفسي والمساس بالسمعة والمركز الاجتماعي والاعتبار المالي. كما خول القاضي، في المادة 247، تقدير التعويض الجابر للضرر مع مراعاة الظروف الشخصية للمضرور.",
  "ثانياً: خطأ المدعى عليها",
  "بدأت المدعى عليها بتمهيد تأديبي مصطنع، حين استدعت المدعي في مايو 2025 للتحقيق في وقائع هامشية وغير متناسبة بطبيعتها، تتعلق بإغلاق أبواب أو ستائر، وذلك لأول مرة في تاريخه المهني. يتمسك المدعي بأن هذا التحقيق لم يكن غايته كشف مخالفة حقيقية أو إصلاح سلوك وظيفي، وإنما إنشاء تاريخ تأديبي لاحق يصلح ظاهرياً لتبرير قرار فصل معد سلفاً. .",
  "والقانون لم يطلق يد صاحب العمل في الجزاء أو التحقيق التأديبي إطلاقاً مطلقاً؛ إذ تنص المادة 37 من قانون العمل في القطاع الأهلي على أنه لا يجوز توقيع جزاء على العامل إلا بعد إبلاغه كتابة بما نسب إليه وسماع أقواله وتحقيق دفاعه وإثبات ذلك في محضر يودع بملفه. كما أن المادة 41 تقرر حق العامل المفصول في الطعن على قرار الفصل، فإذا ثبت بحكم نهائي تعسف صاحب العمل في فصله استحق العامل مكافأة نهاية الخدمة وتعويضاً عما لحقه من أضرار مادية وأدبية",
  "ثم صعدت المدعى عليها سلوكها حين استدعت المدعي بدون إخطار مسبق إلى تحقيق وقامت بإسناد اتهام جزائي إلى المدعي بإدارة حساب تشهير في منصة تيك توك، رغم عدم وجود دليل فني حاسم يثبت صلته بذلك الحساب ورغم إنكاره، وحاولت الضغط عليه من خلال إهانته؛ فقد قام المحققون بفتح باب غرفة التحقيق واستدعاء موظفين كانوا مارين في الممر وإسماعهم تسجيلاً وسؤالهم بشكل يوحي بالتأكيد إن كان التسجيل هو لصوت المدعي. والاتهام الجزائي ليس شأناً إدارياً بسيطاً، بل إجراء شديد الخطورة يمس شرف العامل وسمعته ومركزه الوظيفي والمهني. فإذا ثبت أن المدعى عليها أطلقت هذا الاتهام دون سند جدي، أو مع تجاهل متعمد لانتفاء الدليل الفني، أو بقصد استخدام الاتهام كذريعة للفصل والحرمان من المستحقات، فإن ذلك يشكل خطأً تقصيرياً مستقلاً، وقرينة جوهرية على أن الفصل لم يكن قائماً على سبب مشروع، وإنما على خصومة مصطنعة.",
  "ويكتسب هذا الأمر أهمية خاصة من أن قانون العمل نفسه رتب أثراً خاصاً على اتهام صاحب العمل للعامل بفعل جزائي؛ فالمادة 43 تمنع صاحب العمل من إنهاء عقد العامل إذا كان حبسه بسبب اتهام من صاحب العمل إلا إذا أدين بحكم نهائي، وتلزمه عند البراءة بصرف أجر مدة الوقف مع تعويض عادل تقدره المحكمة. كما تنص المادة 48/هـ على حق العامل في إنهاء العقد دون إخطار مع استحقاق مكافأة نهاية الخدمة إذا اتهمه صاحب العمل بارتكاب فعل معاقب عليه جزائياً وحكم نهائياً ببراءته.",
  "وتتأكد قرائن سوء النية من واقعة الشهود. فقد استدعت المدعى عليها شاهدين للشهادة ضد المدعي؛ فأنكر أحدهما علمه بالواقعة، بينما أقر الآخر رسمياً، بحسب المستندات المقدمة، بأنه تعرض للضغط والتهديد للإدلاء بما يضر بالمدعي، وجرى توثيق ذلك أمام شرطة محافظة الخفجي بالمملكة العربية السعودية، ثم التصديق عليه بإشهاد رسمي أمام إدارة التوثيقات بوزارة العدل الكويتية. ويتمسك المدعي بهذا كقرينة كتابية جدية على اصطناع الدليل وتوجيه الشهادة واستعمال الخصومة للإضرار..",
  "ثم لجأت المدعى عليها، إلى إطالة أمد الخصومة بادعاء وجود شاهدين آخرين بعد أن تكشفت قرائن ضعف الشهادة الأولى والثانية والهدف إبقاء المدعي تحت وطأة اتهام قائم، وحرمانه من الاستفادة من أثر حكم البراءة متى صدر. وهذا يدخل في نطاق إساءة استعمال الحق متى توافرت قرائن القصد الكيدي وعدم التناسب، عملاً بالمادة 30 من القانون المدني..",
  "ومن صور الخطأ الجسيم كذلك إخلال المدعى عليها بتعهداتها البنكية. فقد وجهت المدعى عليها خطاباً إلى بنك الرياض بتاريخ 25/07/2023، (مرفق الخطاب في الصفحات التالية) تعهدت فيه، بحسب المستند المقدم، بالإبلاغ الفوري عند انتهاء خدمة المدعي وتحويل مكافأة نهاية الخدمة لتغطية مديونيته. وبذلك كانت المدعى عليها عالمة علماً يقينياً بأن عدم الإبلاغ وعدم تسوية المكافأة لن يكون مجرد إجراء داخلي، بل سيترتب عليه أثر ائتماني مباشر على المدعي، يتمثل في التعثر، وتدهور السجل الائتماني، وتجميد الحسابات، وتقييد القدرة على التمويل والسفر والتصرف المالي.",
  "ومع ذلك، امتنعت المدعى عليها عن تنفيذ ما التزمت به، واحتجزت مكافأة نهاية الخدمة، ولم تبادر إلى الإبلاغ والتسوية، بما يجعل الضرر الائتماني نتيجة طبيعية ومتوقعة لسلوكها. ولا يصح للمدعى عليها بعد ذلك أن تدعي أن التعثر كان نتيجة مستقلة عن فعلها، لأنها كانت تعلم مسبقاً بالغرض من التعهد البنكي وبالأثر المتوقع لعدم تنفيذه. وهذا يشكل إخلالاً تعاقدياً وتقصيرياً في آن واحد، وفق المواد 195 و197 و293 من القانون المدني، إذ إن تعذر تنفيذ الالتزام أو التأخير فيه يوجب تعويض الضرر ما لم يثبت المدين سبباً أجنبياً لا يد له فيه.",
  "كما أن احتجاز صندوق الادخار ومساهمة الشركة فيه يمثل خطأً مستقلاً. فإذا كانت لائحة المدعى عليها، في الفصل الحادي عشر الخاص بالمزايا، وتحديداً البند 6.8، تنص على وجوب الدفع الفوري لحساب الادخار ومكافأة الشركة للادخار عند إنهاء الخدمة لأي سبب كان، فإن هذا النص ينشئ حقاً مالياً مستقلاً للمدعي، ولا يجوز للمدعى عليها تعطيله أو مصادرته أو ربطه باتهام غير ثابت أو خصومة معلقة.",
  "المادة 51 من قانون العمل تقرر أصل استحقاق مكافأة نهاية الخدمة، والمادة 52 تقرر استحقاقها كاملة في حالات منها انتهاء العقد من جانب صاحب العمل، كما تلزم المادة 57 صاحب العمل بدفع مستحقات العاملين في حساباتهم لدى المؤسسات المالية المحلية. فإذا اجتمع احتجاز مكافأة نهاية الخدمة مع احتجاز صندوق الادخار ومع عدم تنفيذ التعهد البنكي، فإن ذلك لا يعد مجرد تأخير مالي، بل يصبح وسيلة ضغط وتجفيف مالي، ويصلح دليلاً على سوء النية متى ثبتت المحكمة من التسلسل الزمني والآثار الائتمانية اللاحقة",
  "وأخيراً، المدعى عليها قامت بتقديم شكوى تشهير داخل الكويت باستخدام وكالة قديمة صادرة باسم رئيس سابق للشركة تقاعد قبل خمس سنوات، مع أن هذا الرئيس المتقاعد يقيم مع المدعي في مدينة الخفجي ولا علم له بالشكوى. .",
  "ثالثاً: الضرر المادي والائتماني والمهني",
  "ترتب على أفعال المدعى عليها ضرر مادي محقق، لم يقتصر على حرمان المدعي من مستحقات مالية، بل امتد إلى تدمير مركزه الائتماني وتعطيل قدرته على التمويل والسفر والكسب. فقد أدى احتجاز مكافأة نهاية الخدمة وصندوق الادخار وعدم تنفيذ التعهد البنكي إلى تعثر المدعي مالياً، وتجميد حساباته، ومنعه من السفر، وهبوط سجله الائتماني في “سمة” إلى 333 من أصل 850، بما أدى إلى شل قدرته على الحصول على أي تمويل سكني أو استهلاكي، وحرمانه من فرص مالية وسكنية مشروعة.",
  "وهذا الضرر يدخل في صميم المادة 230 من القانون المدني، لأنها لا تقتصر على الخسارة الواقعة، بل تشمل الكسب الذي فات متى كان نتيجة طبيعية للعمل غير المشروع. كما أن تفويت الفرصة الجدية، متى كانت ثابتة ومحددة وقابلة للتقدير، يعد صورة من صور الكسب الفائت أو الضرر المالي القابل للتعويض. والمدعي لا يطلب تعويضاً عن أمل مجرد أو احتمال مرسل، بل عن فرص جدية أهدرتها أفعال المدعى عليها، ومنها فرصة التمويل السكني، وفرصة الانتفاع بالإعفاء أو المنحة أو المزايا المرتبطة بالملاءة الائتمانية، متى قدمت مستنداتها للمحكمة أو للخبير المنتدب.",
  "كما أن المساس بالسجل الائتماني والاعتبار المالي لا يعد ضرراً مالياً فقط، بل ضرراً أدبياً أيضاً، لأن المادة 231 من القانون المدني تنص صراحة على أن الضرر الأدبي يشمل ما يلحق الشخص من أذى نفسي نتيجة المساس بسمعته أو مركزه الاجتماعي أو الأدبي أو باعتباره المالي. ومن ثم فإن انهيار السجل الائتماني، وتجميد الحسابات، والمنع من السفر، والظهور بمظهر المتعثر غير القادر على الوفاء، كلها وقائع تمس الاعتبار المالي والاجتماعي للمدعي وتستوجب التعويض المستقل",
  "رابعاً: الضرر العائلي والإنساني",
  "لم تقف آثار أفعال المدعى عليها عند شخص المدعي وحده، بل امتدت إلى أسرته، وبالأخص والديه المسنين المصابين بأمراض مزمنة، إذ جرى إلغاء التأمين الصحي عنهما بصورة مفاجئة وفي ذات يوم إنهاء خدمة المدعي ودون إنذار كافٍ. والثابت أن التأمين الصحي للوالدين كان من المزايا الوظيفية التي تمتع بها المدعي طوال مدة خدمته، ومن ثم فإن سحبه الفوري دون مراعاة الظروف الصحية أو منح فترة انتقالية معقولة ألحق بالمدعي ضرراً أدبياً وعائلياً جسيماً، فضلاً عما تكبده أو سيتكبده من نفقات علاجية بديلة.",
  "ويتمسك المدعي بأن هذه الميزة، متى ثبتت في عقد العمل أو اللائحة أو النظام الداخلي أو العرف المستقر، تدخل ضمن الحقوق الأفضل التي لا يجوز لصاحب العمل الإخلال بها، عملاً بالمادة 6 من قانون العمل..",
  "خامساً: الضرر الصحي والنفسي",
  "كما ترتب على هذه الحملة المتصلة ضرر صحي ونفسي موثق، تمثل في إصابة المدعي باضطراب اكتئابي شديد ونوبات هلع وخضوعه لبروتوكول علاجي بأدوية نفسية، وفق ما ستثبته التقارير الطبية المقدمة. ويتمسك المدعي بالمستندات الطبية التي تثبت نشوء الحالة زمنياً عقب واقعة الفصل والاتهام واحتجاز المستحقات وتدهور المركز المالي.",
  "وهذا الضرر يدخل مباشرة في نطاق المادة 231 من القانون المدني، لأنها تقرر أن التعويض عن العمل غير المشروع يتناول الضرر ولو كان أدبياً، وتشمل أمثلته الأذى الحسي أو النفسي الناتج عن المساس بالحياة أو الجسم أو الحرية أو الشرف أو السمعة أو المركز الاجتماعي أو الاعتبار المالي. ولا شك أن الجمع بين الاتهام الجنائي، وفقدان الوظيفة بعد خدمة طويلة، واحتجاز المستحقات، وانهيار الائتمان، وحرمان الأسرة من التأمين، يمثل بيئة ضاغطة كافية لإحداث ضرر نفسي جسيم متى ثبتت العلاقة الطبية والزمنية.",
  "سادساً: العلاقة السببية",
  "تقوم علاقة السببية في هذه الدعوى على ترابط الوقائع وترتيبها الزمني، وعلى كون الأضرار التي لحقت بالمدعي نتيجة طبيعية ومتوقعة لأفعال المدعى عليها. فلولا فتح تحقيق تأديبي غير متناسب، ولولا إسناد الاتهام الجزائي دون دليل فني حاسم، ولولا استعمال الشهود على نحو شابته قرائن الضغط والتوجيه، ولولا إطالة أمد النزاع، ولولا احتجاز مكافأة نهاية الخدمة وصندوق الادخار، ولولا الإخلال بالتعهد البنكي الموجه إلى بنك الرياض، لما انهار المركز الائتماني للمدعي، ولما تجمدت حساباته، ولما منع من السفر، ولما فقد فرص التمويل والسكن، ولما تعرض للضرر النفسي والعائلي الموثق.",
  "ولا ينال من هذه السببية احتمال وجود ديون أو التزامات مالية سابقة، لأن المدعى عليها كانت تعلم بتلك الالتزامات تحديداً، وتعهدها للبنك كان موجهاً للتعامل معها عند انتهاء الخدمة..",
  "سابعاً:عدم انحصار التعويض في التعويض العمالي التقليدي",
  "يتمسك المدعي بأن مطالبته لا تنحصر في التعويض العمالي التقليدي عن الفصل، وإنما تمتد إلى التعويض المدني عن أفعال مستقلة عن مجرد إنهاء العقد. فالفصل التعسفي يرتب بذاته تعويضاً عن الأضرار المادية والأدبية وفق المادة 41 من قانون العمل، أما البلاغ غير الجدي، وتوجيه الاتهام الجزائي، واصطناع الدليل، واحتجاز الأموال، والإخلال بالتعهد البنكي، وتدمير الائتمان، والمساس بالسمعة والاعتبار المالي، فهي أفعال ضارة مستقلة تخضع لقواعد المسؤولية المدنية العامة.",
  "ومن ثم فإن المدعي لا يطلب مضاعفة التعويض عن ذات الضرر، بل يطلب جبر كل ضرر مستقل بحسب مصدره وآثاره: مستحقات عمالية وادخارية واجبة الأداء، وتعويض عن الفصل التعسفي، وتعويض مدني عن المساس بالاعتبار المالي والمهني، وتعويض عن الضرر النفسي والأدبي، وتعويض عن الخسارة الواقعة والكسب الفائت وتفويت الفرص الجدية."
];

const startScreen = document.querySelector("#startScreen");
const workspace = document.querySelector("#workspace");
const reportSection = document.querySelector("#report");
const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
const saveButton = document.querySelector("#saveButton");
const printButton = document.querySelector("#printButton");
const prevPageButton = document.querySelector("#prevPageButton");
const nextPageButton = document.querySelector("#nextPageButton");
const summaryNextButton = document.querySelector("#summaryNextButton");
const readerTitle = document.querySelector("#readerTitle");
const audioNarration = document.querySelector("#audioNarration");
const audioNarrationLabel = document.querySelector("#audioNarrationLabel");
const pageAudio = document.querySelector("#pageAudio");
const introPages = [
  document.querySelector("#introPageChevron"),
  document.querySelector("#introPageCertificate"),
  document.querySelector("#introPageClaimantPerformance"),
  document.querySelector("#introPageEntitlements"),
  document.querySelector("#introPageCip"),
  document.querySelector("#introPageNoticeCompensation"),
  document.querySelector("#introPageHolidayWork"),
  document.querySelector("#introPageAnnualLeaveWork"),
  document.querySelector("#introPageOvertimeWork"),
  document.querySelector("#introPageFinalWarningDeduction"),
  document.querySelector("#introPageSavingsFund"),
  document.querySelector("#introPageServiceAwards"),
  document.querySelector("#introPageAnnualLeavePolicyViolation"),
  document.querySelector("#introPageCivilLiabilityPrelude"),
  document.querySelector("#introPagePsychologicalDamage"),
  document.querySelector("#introPageLostOpportunityDamage"),
  document.querySelector("#introPageSanedCompensation"),
  document.querySelector("#introPageGosiContributionCompensation"),
  document.querySelector("#introPageMedicalInsuranceLoss"),
  document.querySelector("#introPageMiscellaneousLosses"),
  document.querySelector("#introPageLitigationFees"),
  document.querySelector("#introPageMoralCompensation"),
];

const pageAudioSources = [
  { pageIndex: 0, audioNumber: 1 },
  { pageIndex: 1, audioNumber: 1, continuation: true },
  ...Array.from({ length: 18 }, (_, index) => ({
    pageIndex: index + 2,
    audioNumber: index + 2,
  })),
].map(({ pageIndex, audioNumber, continuation }) => {
  const audioLabel = String(audioNumber).padStart(2, "0");
  return {
    pageIndex,
    label: continuation ? `شرح صوتي C${audioLabel} - تابع` : `شرح صوتي C${audioLabel}`,
    src: `./assets/audio/C${audioLabel}.m4a`,
  };
});
const claimsTable = document.querySelector("#claimsTable");
const reportSummary = document.querySelector("#reportSummary");
const reportDetails = document.querySelector("#reportDetails");
const emptyState = document.querySelector("#emptyState");
const totalAmount = document.querySelector("#totalAmount");
const reportTotal = document.querySelector("#reportTotal");
const imageLightbox = document.querySelector("#imageLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const closeLightbox = document.querySelector("#closeLightbox");
let lastAnimatedPage = null;
let startActivated = false;
const urlParams = new URLSearchParams(window.location.search);
const isVideoCaptureMode = urlParams.get("videoCapture") === "1";
const isVideoRevealMode = urlParams.get("videoReveal") === "1";

const fields = {
  startClaimant: document.querySelector("#startClaimant"),
  startDefendant: document.querySelector("#startDefendant"),
  claimant: document.querySelector("#claimant"),
  defendant: document.querySelector("#defendant"),
  caseNumber: document.querySelector("#caseNumber"),
  reportDate: document.querySelector("#reportDate"),
  chevronScreenshotInput: document.querySelector("#chevronScreenshotInput"),
  certificateInput: document.querySelector("#certificateInput"),
  chevronScreenshotPreview: document.querySelector("#chevronScreenshotPreview"),
  certificatePreview: document.querySelector("#certificatePreview"),
  certificatePdfName: document.querySelector("#certificatePdfName"),
  reportChevronScreenshot: document.querySelector("#reportChevronScreenshot"),
  reportCertificate: document.querySelector("#reportCertificate"),
  reportCertificatePdfName: document.querySelector("#reportCertificatePdfName"),
  socialInsuranceInput: document.querySelector("#socialInsuranceInput"),
  exchangeRateInput: document.querySelector("#exchangeRateInput"),
  socialInsurancePreview: document.querySelector("#socialInsurancePreview"),
  exchangeRatePreview: document.querySelector("#exchangeRatePreview"),
  reportSocialInsurance: document.querySelector("#reportSocialInsurance"),
  reportExchangeRate: document.querySelector("#reportExchangeRate"),
  holidayEmailInput: document.querySelector("#holidayEmailInput"),
  holidayEmailPreview: document.querySelector("#holidayEmailPreview"),
  reportHolidayEmail: document.querySelector("#reportHolidayEmail"),
  annualLeaveEmailOneInput: document.querySelector("#annualLeaveEmailOneInput"),
  annualLeaveEmailTwoInput: document.querySelector("#annualLeaveEmailTwoInput"),
  annualLeaveEmailOnePreview: document.querySelector("#annualLeaveEmailOnePreview"),
  annualLeaveEmailTwoPreview: document.querySelector("#annualLeaveEmailTwoPreview"),
  reportAnnualLeaveEmailOne: document.querySelector("#reportAnnualLeaveEmailOne"),
  reportAnnualLeaveEmailTwo: document.querySelector("#reportAnnualLeaveEmailTwo"),
  overtimeHoursInput: document.querySelector("#overtimeHoursInput"),
  overtimeHoursPreview: document.querySelector("#overtimeHoursPreview"),
  reportOvertimeHours: document.querySelector("#reportOvertimeHours"),
  warningImageInput: document.querySelector("#warningImageInput"),
  warningImagePreview: document.querySelector("#warningImagePreview"),
  reportWarningImage: document.querySelector("#reportWarningImage"),
  savingsPayslipInput: document.querySelector("#savingsPayslipInput"),
  savingsPayslipPreview: document.querySelector("#savingsPayslipPreview"),
  reportSavingsPayslip: document.querySelector("#reportSavingsPayslip"),
  civilLiabilityPreludeReader: document.querySelector("#civilLiabilityPreludeReader"),
  civilLiabilityPreludeReport: document.querySelector("#civilLiabilityPreludeReport"),
  medicalReportInput: document.querySelector("#medicalReportInput"),
  retirementOfferOneInput: document.querySelector("#retirementOfferOneInput"),
  retirementOfferTwoInput: document.querySelector("#retirementOfferTwoInput"),
  medicalReportPreview: document.querySelector("#medicalReportPreview"),
  retirementOfferOnePreview: document.querySelector("#retirementOfferOnePreview"),
  retirementOfferTwoPreview: document.querySelector("#retirementOfferTwoPreview"),
  reportMedicalReport: document.querySelector("#reportMedicalReport"),
  reportRetirementOfferOne: document.querySelector("#reportRetirementOfferOne"),
  reportRetirementOfferTwo: document.querySelector("#reportRetirementOfferTwo"),
  riyadBankCommitmentInput: document.querySelector("#riyadBankCommitmentInput"),
  creditReportInput: document.querySelector("#creditReportInput"),
  riyadBankCommitmentPreview: document.querySelector("#riyadBankCommitmentPreview"),
  creditReportPreview: document.querySelector("#creditReportPreview"),
  reportRiyadBankCommitment: document.querySelector("#reportRiyadBankCommitment"),
  reportCreditReport: document.querySelector("#reportCreditReport"),
};

const evidenceElementNames = {
  chevronScreenshot: ["chevronScreenshotPreview", "reportChevronScreenshot"],
  certificate: ["certificatePreview", "reportCertificate"],
  socialInsuranceWage: ["socialInsurancePreview", "reportSocialInsurance"],
  exchangeRate: ["exchangeRatePreview", "reportExchangeRate"],
  holidayEmail: ["holidayEmailPreview", "reportHolidayEmail"],
  annualLeaveEmailOne: ["annualLeaveEmailOnePreview", "reportAnnualLeaveEmailOne"],
  annualLeaveEmailTwo: ["annualLeaveEmailTwoPreview", "reportAnnualLeaveEmailTwo"],
  overtimeHours: ["overtimeHoursPreview", "reportOvertimeHours"],
  warningImage: ["warningImagePreview", "reportWarningImage"],
  savingsPayslip: ["savingsPayslipPreview", "reportSavingsPayslip"],
  medicalReport: ["medicalReportPreview", "reportMedicalReport"],
  retirementOfferOne: ["retirementOfferOnePreview", "reportRetirementOfferOne"],
  retirementOfferTwo: ["retirementOfferTwoPreview", "reportRetirementOfferTwo"],
  riyadBankCommitment: ["riyadBankCommitmentPreview", "reportRiyadBankCommitment"],
  creditReport: ["creditReportPreview", "reportCreditReport"],
};

const defaultEvidence = {
  chevronScreenshot: "./assets/chevron-highlights.png",
  certificate: "./assets/oil-sector-certificate.jpg",
  certificatePdfName: "",
  socialInsuranceWage: "./assets/social-insurance-wage.png",
  exchangeRate: "./assets/exchange-rate-2025.png",
  holidayEmail: "./assets/eid-arafa-work-email.png",
  annualLeaveEmailOne: "./assets/annual-leave-work-email-1.png",
  annualLeaveEmailTwo: "./assets/annual-leave-work-email-2.png",
  overtimeHours: "./assets/overtime-hours.png",
  warningImage: "./assets/final-warning-deduction.jpeg",
  savingsPayslip: "./assets/savings-fund-payslip.png",
  medicalReport: "./assets/psychological-medical-report.jpg",
  retirementOfferOne: "./assets/retirement-offer-1.png",
  retirementOfferTwo: "./assets/retirement-offer-2.png",
  riyadBankCommitment: "./assets/riyad-bank-commitment.png",
  creditReport: "./assets/credit-report.png",
};

const domDefaultEvidence = {};

const state = {
  claimant: "خالد الظفيري",
  defendant: "شيفرون العربية السعودية",
  caseNumber: "",
  reportDate: new Date().toISOString().slice(0, 10),
  introPage: 0,
  reportUnlocked: false,
  contentVersion: CONTENT_VERSION,
  evidence: { ...defaultEvidence },
  summaryItems: [],
  claims: [],
};

const initialState = {
  claimant: state.claimant,
  defendant: state.defendant,
  caseNumber: "",
  reportDate: state.reportDate,
};

const introTitles = [
  "اولا: اثبات ان طبيعة عمل شيفرون السعودية تنتمي الى القطاع النفطي",
  "إثبات إضافي: تسجيل الشركة في القطاع النفطي",
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
  "أجور التقاضي والمحاماة",
  "تعويض أدبي متروك لتقدير المحكمة",
];

const calculatedItems = {
  preliminaryEndOfService: {
    id: "preliminary-end-of-service",
    title: "مستحقات نهاية الخدمة المبدئية",
    amount: 94345.64,
    currency: "KWD",
    basis: "870.99 يوم × 108.32 دينار للأجر اليومي.",
    source: "حساب مستحقات نهاية الخدمة الأساسية بناءً على لائحة الشركة وشهادة التأمينات الاجتماعية السعودية ومتوسط سعر الصرف لسنة 2025.",
    notes: "ينتقل هذا الرقم إلى الملخص بعد ظهور حساب المستحقات في صندوق العرض.",
    locked: true,
  },
  cipSuccessBonus: {
    id: "cip-success-bonus",
    title: "مكافأة حافز النجاح (البونص)",
    amount: 2131.58,
    currency: "KWD",
    basis: "2,273.68 × 1.25 × 0.75.",
    source: "الفصل ٦ الفقرة ٩.١ من خطة حوافز شيفرون CIP، وإيميل نتائج خطة الحوافز لسنة 2025 الذي يذكر اعتماد Corporate Performance Rating بمقدار 1.25.",
    notes: "احتساب ٩ أشهر من سنة الأداء 2025 بنسبة 0.75، بعد تطبيق معامل أداء الشركة 1.25 على الراتب الشهري.",
    locked: true,
  },
  holidayArafaWork: {
    id: "holiday-arafa-work",
    title: "العمل خلال العيد وخلال وقفة عرفة",
    amount: 760.96,
    currency: "KWD",
    basis: "(21 × 2 × 13.12) + (16 × 13.12).",
    source: "الفصل ٢ الفقرة ٤.٣ والفقرة ٦ من لائحة الشركة، مع إيميل المهمة بتاريخ 15/06/2024.",
    notes: "احتساب ٢١ ساعة عمل خلال يوم عرفة ويوم العيد لسنة 2024 بمعامل ٢، بالإضافة إلى ١٦ ساعة عمل بأجر عادي تعويضاً عن يومي الإجازة اللذين تم العمل خلالهما وفق الفصل ٢ من اللائحة.",
    locked: true,
  },
  annualLeaveWork: {
    id: "annual-leave-work",
    title: "العمل خلال الإجازة السنوية",
    amount: 2440.32,
    currency: "KWD",
    basis: "(32 × 2 × 13.12) + (40 × 13.12 × 1.25) + (9 أيام × 8 ساعات × 13.12).",
    source: "الفصل ٣ الفقرة ٦.٦ والفصل ٢ الفقرة ٦ من لائحة الشركة، مع إيميلات إنجاز المهمات خلال الإجازة السنوية.",
    notes: "احتساب ٩ أيام عمل خلال الإجازة السنوية، منها يومين سبت ويومين جمعة، مع تعويض بدل أيام الإجازة التسعة.",
    locked: true,
  },
  overtimeWork: {
    id: "overtime-work",
    title: "العمل الإضافي",
    amount: 2322.24,
    currency: "KWD",
    basis: "141.6 × 1.25 × 13.12.",
    source: "الفصل ٢ الفقرة ٥.٥ من لائحة الشركة، مع جدول ساعات العمل الإضافي المحصاة بالتاريخ والساعات.",
    notes: "احتساب 141.6 ساعة عمل إضافي بين ٦ صباحاً و٧ مساءً بمعامل 1.25.",
    locked: true,
  },
  finalWarningDeduction: {
    id: "final-warning-deduction",
    title: "خصم خمس أيام وإنذار نهائي",
    amount: 623.2,
    currency: "KWD",
    basis: "(40 × 13.12) + (13.12 × 1.5 × 5).",
    source: "قانون العمل الكويتي رقم ٦ لسنة ٢٠١٠ المادة ٣٥، ولائحة الشركة الفصل ٢ الفقرة ٧.١.٣ والفقرة ٧.٣.٢، مع صورة الإنذار النهائي.",
    notes: "استرداد خصم خمسة أيام مع بدل الطريق لخمسة أيام بناءً على زمن رحلة ساعة ونصف.",
    locked: true,
  },
  noticeCompensation: {
    id: "notice-compensation",
    title: "ثلاثة أشهر بدل إشعار فصل",
    amount: 9261.36,
    currency: "KWD",
    basis: "(2,273.68 × 3) + (3 × 20 × 1.5 × 13.12) + (12 × 8 × 13.12).",
    source: "قانون العمل الكويتي رقم ٦ لسنة ٢٠١٠ المادة ٤٤ بشأن مهلة الإخطار وحق الغياب للبحث عن عمل.",
    notes: "احتساب راتب ثلاثة أشهر، وبدل الطريق لثلاثة أشهر، وبدل 12 يوم بحث عن عمل.",
    locked: true,
  },
  savingsFund: {
    id: "savings-fund",
    title: "صندوق الادخار",
    amount: null,
    amountLabel: "غير محدد",
    currency: "KWD",
    basis: "تسوية حساب العضو في صندوق الادخار وحساب مكافأة الشركة وفق الفصل ١١ الفقرات ٦.٢ و٦.٨، مع الاشتراك منذ ٢٠٠٨.",
    source: "لائحة الشركة الفصل ١١ الفقرة ٦.٨ والفقرة ٦.٢، مع قسيمة راتب 12/2014 التي تبين استقطاع 42.60 دينار، والاشتراك منذ ٢٠٠٨، واستقطاع صندوق الادخار بنسبة ١٠٪ من الراتب الأساسي شهرياً.",
    notes: "يضاف هذا البند إلى الملخص دون رقم لأنه لا يوجد إجمالي معلوم حالياً.",
    locked: true,
  },
  serviceAwards: {
    id: "service-awards",
    title: "جوائز تقدير سنوات الخدمة",
    amount: 1240,
    currency: "KWD",
    basis: "500 + 150 + 250 + 120 + 130 + 90.",
    source: "مطالبة بقيمة جوائز سنوات الخدمة ١٥ و١٠ و٥ سنوات، قياساً على الجوائز الحالية وبرنامج تقدير سنوات الخدمة.",
    notes: "إجمالي جوائز وعشاء سنوات الخدمة غير المصروفة.",
    locked: true,
  },
  annualLeavePolicyViolation: {
    id: "annual-leave-policy-violation",
    title: "مخالفة اللائحة الداخلية لقانون العمل الكويتي للإجازة السنوية",
    amount: 2282.88,
    currency: "KWD",
    basis: "21.75 يوم × 8 ساعات × 13.12 دينار.",
    source: "قانون العمل في قطاع الأعمال النفطية الكويتي رقم ٢٨ لسنة ١٩٦٩ المادة ١٢، وقانون العمل الكويتي رقم ٦ لسنة ٢٠١٠ المادة ٤ والمادة ٧٠ المعدلة بالقانون رقم ٨٥ لسنة ٢٠١٧ والمادة ٦٧، مقارنةً باللائحة الداخلية للمدعى عليها الفصل ٣ الفقرة ٦.",
    notes: "تعويض عن فرق ٣ أيام سنوياً بين ٤٠ يوم إجازة مستحقة قانوناً لفئة كبار الموظفين بعد خمس سنوات خدمة و٣٧ يوم عمل منحتها اللائحة الداخلية، عن 7.25 سنوات فعلية محتسبة.",
    locked: true,
  },
  psychologicalDamage: {
    id: "psychological-damage-24-months",
    title: "راتب سنتين إجمالي تعويض عن الضرر النفسي الجسيم الذي لحق بالمدعي واستحالة ايجاد عمل",
    amount: 70792.43,
    currency: "KWD",
    basis: "54,568.33 + 9,916.74 + 4,547.36 + 1,760.00.",
    source: "التقرير الطبي للحالة النفسية، وإعلانات الشركة التي تمنح رواتب تصل إلى خمس سنوات للحث على التقاعد المبكر.",
    notes: "تعويض بمقدار راتب سنتين إجمالي بسبب الاكتئاب الحاد ونوبات الهلع وصعوبة الحصول على وظيفة.",
    locked: true,
  },
  lostOpportunityDamage: {
    id: "lost-opportunity-damage",
    title: "تعويض عن الخسارة الواقعة والكسب الفائت وتفويت الفرص الجدية",
    amount: 39095,
    currency: "KWD",
    basis: "277,990 ريال إعفاء من القرض + 200,000 ريال منحة الأرض = 477,990 ريال، بما يعادل 39,095 دينار.",
    source: "تعهد الشركة لبنك الرياض، والتقرير الائتماني، ولائحة القرض السكني ومنحة الأرض في الفصل ١١ الفقرة ١٢.",
    notes: "تعويض عما فات من إعفاء القرض السكني ومنحة الأرض بسبب هبوط السجل الائتماني إلى 333 وتعذر التمويل.",
    locked: true,
  },
  hajjLeave: {
    id: "hajj-leave",
    title: "إجازة الحج",
    amount: 2938.88,
    currency: "KWD",
    basis: "13.12 × 8 × 28.",
    source: "الفصل ٣ الفقرة ٩.٢ من اللائحة الداخلية بشأن إجازة الحج المدفوعة لمدة ٢٨ يوماً مرة واحدة طوال خدمة الموظف.",
    notes: "تعويض عن فوات إجازة الحج التي كان يمكن للمدعي الاستفادة منها خلال خدمته لولا تعسف الشركة وأساليبها غير القانونية في فصله.",
    locked: true,
  },
  sanedCompensation: {
    id: "saned-compensation",
    title: "التعويض عن فقدان إعانة ساند",
    amount: 7729.16,
    currency: "KWD",
    basis: "94,500.00 ريال × سعر الصرف السابق.",
    source: "شروط وبنود إعانة ساند، وشهادة مؤسسة التأمينات السعودية، وحرمان المدعي من ساند بسبب إدراج الفصل تحت الفقرة ٨٠.",
    notes: "احتساب إعانة ساند لمدة 12 شهراً بالحد الأقصى الشهري، وتحويلها إلى الدينار بنفس سعر الصرف السابق.",
    locked: true,
  },
  gosiContributionCompensation: {
    id: "gosi-contribution-compensation",
    title: "التعويض عن ٦ أشهر اشتراك تأمينات اجتماعية",
    amount: 2800.16,
    currency: "KWD",
    basis: "5,706 ريال × 6 أشهر = 34,236 ريال، وتحويلها إلى 2,800.16 دينار باستخدام نفس سعر الصرف السابق.",
    source: "إثبات الدفع من موقع مؤسسة التأمينات الاجتماعية، مع بيان أن الخدمة عند الفصل كان ينقصها ٦ أشهر لاستحقاق معاش التقاعد.",
    notes: "المبلغ يمثل ما دفعه المدعي للتأمينات بعد اقتراض 50,000 ريال من والده، وما تبقى من القرض يرد في بند لاحق.",
    locked: true,
  },
  medicalInsuranceLoss: {
    id: "medical-insurance-loss",
    title: "التعويض عن فقدان التأمين الطبي",
    amount: 8000,
    currency: "KWD",
    basis: "تقدير تعويض عن إلغاء التأمين الطبي لأربعة أفراد: المدعي والزوجة والأب والأم.",
    source: "إلغاء التأمين الصحي عن والدي المدعي المسنين بصورة مفاجئة وفي ذات يوم إنهاء خدمة المدعي، دون إنذار كاف أو فترة انتقالية معقولة.",
    notes: "المبلغ تقديري بناء على مصادر متفرقة، وللخبير طلب القيمة الحقيقية التي كانت تدفعها المدعى عليها مقابل تأمين المدعي وزوجته ووالده ووالدته.",
    locked: true,
  },
  miscellaneousLosses: {
    id: "miscellaneous-losses",
    title: "تعويضات لخسائر متفرقة تسببت بها المدعى عليها",
    amount: 8243.64,
    currency: "KWD",
    basis: "4,089.50 + 1,289.34 + 999.00 + 1,635.80 + 150.00 + 80.00.",
    source: "دليل خصم البنك، ودليل منع السفر، وصورة قرض التمويل الشخصي من أخت المدعي، وإشعارات التكاليف القضائية من وزارة العدل السعودية، وفاتورة Ooredoo الخاصة بالهاتف الكويتي، والقروض والالتزامات المتفرقة التي ترتبت على انقطاع دخل المدعي بعد الفصل، وقرار سمة والبنك المركزي السعودي بخصم ٤٣٦٠ ريال شهرياً من راتب التقاعد ومنع السفر.",
    notes: "يبين البند أن ما اقترضه المدعي للإنفاق على أسرته يمثل تقريباً 20% مما اعتاد عليه هو وأسرته قبل الفصل، كما يثبت قرض أخت المدعي وتكاليف وزارة العدل وتعثر عقود الهواتف الكويتية والمطالبة بفسخ العقد.",
    locked: true,
  },
  litigationFees: {
    id: "litigation-fees",
    title: "أجور التقاضي والمحاماة",
    amount: 24000,
    currency: "KWD",
    basis: "تعويض كامل عن أجور التقاضي وأتعاب المحاماة التي أجبرته المدعى عليها على تكبدها.",
    source: "لجوء المدعي إلى القضاء كان اضطرارياً بسبب أفعال المدعى عليها وما ترتب عليها من نزاع وتكاليف تقاضٍ ومحاماة.",
    notes: "أي مبلغ تعويض يتم منحه للمدعي هو تعويض لجهد وتعب سنوات عمره، ولم يكن ليلجأ إلى القضاء ويتكبد هذا العناء إلا مجبراً.",
    locked: true,
  },
  moralCompensation: {
    id: "moral-compensation-court-discretion",
    title: "تعويض أدبي متروك لتقدير المحكمة",
    amount: null,
    amountLabel: "متروك لتقدير المحكمة",
    currency: "KWD",
    basis: "تعويض أدبي إضافي متروك لتقدير المحكمة بالإضافة إلى كل ما تقدم.",
    source: "الأضرار الأدبية والنفسية والعائلية والاجتماعية الناتجة عن أفعال المدعى عليها وما ترتب عليها من آثار.",
    notes: "هذا البند غير رقمي ولا يدخل في مجموع المطالبات الرقمية.",
    locked: true,
  },
};

const summaryProgression = [
  { pageIndex: 3, item: calculatedItems.preliminaryEndOfService },
  { pageIndex: 4, item: calculatedItems.cipSuccessBonus },
  { pageIndex: 5, item: calculatedItems.noticeCompensation },
  { pageIndex: 6, item: calculatedItems.holidayArafaWork },
  { pageIndex: 7, item: calculatedItems.annualLeaveWork },
  { pageIndex: 8, item: calculatedItems.overtimeWork },
  { pageIndex: 9, item: calculatedItems.finalWarningDeduction },
  { pageIndex: 10, item: calculatedItems.savingsFund },
  { pageIndex: 11, item: calculatedItems.serviceAwards },
  { pageIndex: 12, item: calculatedItems.annualLeavePolicyViolation },
  { pageIndex: 14, item: calculatedItems.psychologicalDamage },
  { pageIndex: 15, item: calculatedItems.lostOpportunityDamage },
  { pageIndex: 15, item: calculatedItems.hajjLeave },
  { pageIndex: 16, item: calculatedItems.sanedCompensation },
  { pageIndex: 17, item: calculatedItems.gosiContributionCompensation },
  { pageIndex: 18, item: calculatedItems.medicalInsuranceLoss },
  { pageIndex: 19, item: calculatedItems.miscellaneousLosses },
  { pageIndex: 20, item: calculatedItems.litigationFees },
  { pageIndex: 21, item: calculatedItems.moralCompensation },
];

function isNumberedAmount(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function formatAmount(value, currency = "KWD") {
  if (!isNumberedAmount(value)) return "غير محدد";
  const locale = currency === "SAR" ? "ar-SA" : "en-US";
  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(value) || 0);
  return currency === "SAR" ? `${formatted} ريال` : `${formatted} دينار`;
}

function displayClaimAmount(claim) {
  return isNumberedAmount(claim.amount)
    ? formatAmount(claim.amount, claim.currency)
    : claim.amountLabel || "غير محدد";
}

function getSummaryItems() {
  return summaryProgression
    .filter(({ pageIndex }) => state.introPage >= pageIndex)
    .map(({ item }) => ({ ...item }));
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function safeStorageGet(key) {
  try {
    return window.localStorage ? localStorage.getItem(key) : null;
  } catch {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    if (window.localStorage) {
      localStorage.setItem(key, value);
    }
  } catch {
    // Mobile file previews often block or quota-limit localStorage. The app must keep running.
  }
}

function safeStorageRemove(key) {
  try {
    if (window.localStorage) {
      localStorage.removeItem(key);
    }
  } catch {
    // Ignore storage failures; they should not block the report.
  }
}

function captureDefaultEvidenceFromDom() {
  Object.entries(evidenceElementNames).forEach(([key, names]) => {
    const element = names.map((name) => fields[name]).find(Boolean);
    const source = element ? element.getAttribute("src") || element.src : "";
    domDefaultEvidence[key] = source || defaultEvidence[key] || "";
  });
  domDefaultEvidence.certificatePdfName = defaultEvidence.certificatePdfName || "";
}

function getEvidenceValue(key) {
  const value = state.evidence[key];
  if (key === "certificatePdfName") return value || "";
  if (!value || value === defaultEvidence[key]) {
    return domDefaultEvidence[key] || defaultEvidence[key] || "";
  }
  return value;
}

function shouldPersistEvidenceValue(key, value) {
  if (!value || value === defaultEvidence[key] || value === domDefaultEvidence[key]) return false;
  if (typeof value === "string" && value.startsWith("data:") && value.length > 1500000) return false;
  return true;
}

function getPersistableState() {
  const persistableEvidence = {};
  Object.keys(defaultEvidence).forEach((key) => {
    const value = state.evidence[key];
    if (shouldPersistEvidenceValue(key, value)) {
      persistableEvidence[key] = value;
    }
  });
  return {
    ...state,
    evidence: persistableEvidence,
    summaryItems: [],
    claims: [],
  };
}

function saveState() {
  safeStorageSet(STORAGE_KEY, JSON.stringify(getPersistableState()));
}

function loadState() {
  const saved = safeStorageGet(STORAGE_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    Object.assign(state, parsed);
    const isCurrentContent = parsed.contentVersion === CONTENT_VERSION;
    if (!isCurrentContent) {
      state.reportUnlocked = false;
      state.introPage = Math.min(state.introPage, introPages.length - 1);
    }
    state.contentVersion = CONTENT_VERSION;
    state.evidence = { ...defaultEvidence, ...(isCurrentContent ? parsed.evidence || {} : {}) };
    Object.entries(defaultEvidence).forEach(([key, value]) => {
      if (value && !state.evidence[key]) {
        state.evidence[key] = value;
      }
    });
    state.summaryItems = [];
    state.claims = [];
  } catch {
    safeStorageRemove(STORAGE_KEY);
  }
}

function syncCaseFields() {
  fields.claimant.value = state.claimant;
  fields.defendant.value = state.defendant;
  fields.caseNumber.value = state.caseNumber;
  fields.reportDate.value = state.reportDate;
  fields.startClaimant.value = state.claimant;
  fields.startDefendant.value = state.defendant;
}

function readCaseFields() {
  state.claimant = fields.claimant.value.trim();
  state.defendant = fields.defendant.value.trim();
  state.caseNumber = fields.caseNumber.value.trim();
  state.reportDate = fields.reportDate.value;
}

function setImage(element, value) {
  element.src = value || "";
  element.classList.toggle("hidden", !value);
}

function restoreAnimatedElement(element) {
  if (element.dataset.originalHtml) {
    element.innerHTML = element.dataset.originalHtml;
  }
}

function collectTextNodes(node, textNodes = []) {
  node.childNodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
      textNodes.push(child);
      return;
    }
    if (child.nodeType !== Node.ELEMENT_NODE) return;
    if (["SCRIPT", "STYLE", "INPUT", "BUTTON"].includes(child.tagName)) return;
    collectTextNodes(child, textNodes);
  });
  return textNodes;
}

function animateElementWords(element, delayCounter) {
  if (!element.dataset.originalHtml) {
    element.dataset.originalHtml = element.innerHTML;
  } else {
    restoreAnimatedElement(element);
  }

  const textNodes = collectTextNodes(element);
  textNodes.forEach((textNode) => {
    const fragment = document.createDocumentFragment();
    textNode.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
        return;
      }
      const span = document.createElement("span");
      span.className = "word-reveal";
      span.style.animationDelay = `${delayCounter.count * 42}ms`;
      span.textContent = part;
      delayCounter.count += 1;
      fragment.appendChild(span);
    });
    textNode.replaceWith(fragment);
  });
}

function animateActivePageWords(force = false) {
  if (isVideoCaptureMode && !isVideoRevealMode) return;
  if (!force && lastAnimatedPage === state.introPage) return;
  const activePage = introPages[state.introPage];
  if (!activePage) return;

  introPages.forEach((page) => {
    page.querySelectorAll("[data-original-html]").forEach(restoreAnimatedElement);
  });

  const delayCounter = { count: 0 };
  activePage.querySelectorAll("h3, h4, p, th, td, .formula-line").forEach((element) => {
    animateElementWords(element, delayCounter);
  });
  lastAnimatedPage = state.introPage;
}

function renderIntroPage() {
  state.summaryItems = getSummaryItems();
  introPages.forEach((page, index) => {
    page.classList.toggle("hidden", index !== state.introPage);
  });
  readerTitle.textContent = introTitles[state.introPage];
  prevPageButton.disabled = state.introPage === 0;
  const isFinalPage = state.introPage === introPages.length - 1;
  nextPageButton.textContent = isFinalPage ? "عرض التقرير النهائي" : "التالي";
  summaryNextButton.textContent = isFinalPage ? "عرض التقرير النهائي" : "التالي";
}

function renderAudioNarration() {
  if (!audioNarration || !pageAudio) return;
  const audioSource = pageAudioSources.find(({ pageIndex }) => pageIndex === state.introPage);
  audioNarration.classList.toggle("hidden", !audioSource);
  if (!audioSource) {
    pageAudio.pause();
    pageAudio.removeAttribute("src");
    pageAudio.load();
    return;
  }
  audioNarrationLabel.textContent = audioSource.label;
  if (pageAudio.getAttribute("src") !== audioSource.src) {
    pageAudio.pause();
    pageAudio.setAttribute("src", audioSource.src);
    pageAudio.load();
  }
}

function renderReportAccess() {
  reportSection.classList.toggle("hidden", !state.reportUnlocked);
  printButton.classList.toggle("hidden", !state.reportUnlocked);
}

function renderEvidence() {
  setImage(fields.chevronScreenshotPreview, getEvidenceValue("chevronScreenshot"));
  setImage(fields.reportChevronScreenshot, getEvidenceValue("chevronScreenshot"));
  setImage(fields.certificatePreview, getEvidenceValue("certificate"));
  setImage(fields.reportCertificate, getEvidenceValue("certificate"));
  setImage(fields.socialInsurancePreview, getEvidenceValue("socialInsuranceWage"));
  setImage(fields.reportSocialInsurance, getEvidenceValue("socialInsuranceWage"));
  setImage(fields.exchangeRatePreview, getEvidenceValue("exchangeRate"));
  setImage(fields.reportExchangeRate, getEvidenceValue("exchangeRate"));
  setImage(fields.holidayEmailPreview, getEvidenceValue("holidayEmail"));
  setImage(fields.reportHolidayEmail, getEvidenceValue("holidayEmail"));
  setImage(fields.annualLeaveEmailOnePreview, getEvidenceValue("annualLeaveEmailOne"));
  setImage(fields.annualLeaveEmailTwoPreview, getEvidenceValue("annualLeaveEmailTwo"));
  setImage(fields.reportAnnualLeaveEmailOne, getEvidenceValue("annualLeaveEmailOne"));
  setImage(fields.reportAnnualLeaveEmailTwo, getEvidenceValue("annualLeaveEmailTwo"));
  setImage(fields.overtimeHoursPreview, getEvidenceValue("overtimeHours"));
  setImage(fields.reportOvertimeHours, getEvidenceValue("overtimeHours"));
  setImage(fields.warningImagePreview, getEvidenceValue("warningImage"));
  setImage(fields.reportWarningImage, getEvidenceValue("warningImage"));
  setImage(fields.savingsPayslipPreview, getEvidenceValue("savingsPayslip"));
  setImage(fields.reportSavingsPayslip, getEvidenceValue("savingsPayslip"));
  setImage(fields.medicalReportPreview, getEvidenceValue("medicalReport"));
  setImage(fields.retirementOfferOnePreview, getEvidenceValue("retirementOfferOne"));
  setImage(fields.retirementOfferTwoPreview, getEvidenceValue("retirementOfferTwo"));
  setImage(fields.reportMedicalReport, getEvidenceValue("medicalReport"));
  setImage(fields.reportRetirementOfferOne, getEvidenceValue("retirementOfferOne"));
  setImage(fields.reportRetirementOfferTwo, getEvidenceValue("retirementOfferTwo"));
  setImage(fields.riyadBankCommitmentPreview, getEvidenceValue("riyadBankCommitment"));
  setImage(fields.creditReportPreview, getEvidenceValue("creditReport"));
  setImage(fields.reportRiyadBankCommitment, getEvidenceValue("riyadBankCommitment"));
  setImage(fields.reportCreditReport, getEvidenceValue("creditReport"));

  fields.certificatePdfName.textContent = getEvidenceValue("certificatePdfName")
    ? `ملف مرفق: ${getEvidenceValue("certificatePdfName")}`
    : "";
  fields.reportCertificatePdfName.textContent = fields.certificatePdfName.textContent;
  fields.certificatePdfName.classList.toggle("hidden", !getEvidenceValue("certificatePdfName"));
  fields.reportCertificatePdfName.classList.toggle("hidden", !getEvidenceValue("certificatePdfName"));
}

function renderCivilLiabilityPrelude() {
  const html = civilLiabilityPreludeParagraphs.map((paragraph) => "<p>" + escapeHtml(paragraph) + "</p>").join("");
  fields.civilLiabilityPreludeReader.innerHTML = html;
  fields.civilLiabilityPreludeReport.innerHTML = html;
}

function renderClaimRows() {
  const summaryItems = getSummaryItems();
  claimsTable.innerHTML = summaryItems
    .map(
      (claim, index) => `
        <tr>
          <td>
            <strong>${escapeHtml(claim.title)}</strong>
            <p class="muted">${escapeHtml(claim.basis).slice(0, 90)}</p>
          </td>
          <td class="amount-cell">${displayClaimAmount(claim)}</td>
        </tr>
      `
    )
    .join("");

  emptyState.classList.toggle("hidden", summaryItems.length > 0);
}

function renderReport() {
  readCaseFields();
  document.querySelector('[data-report="claimant"]').textContent = state.claimant || "-";
  document.querySelector('[data-report="defendant"]').textContent = state.defendant || "-";
  document.querySelector('[data-report="caseNumber"]').textContent = state.caseNumber || "-";
  document.querySelector('[data-report="reportDate"]').textContent = state.reportDate || "-";

  const summaryItems = getSummaryItems();
  const total = summaryItems.reduce((sum, claim) => sum + (isNumberedAmount(claim.amount) ? claim.amount : 0), 0);
  totalAmount.textContent = formatAmount(total, "KWD");
  reportTotal.textContent = formatAmount(total, "KWD");

  reportSummary.innerHTML = summaryItems
    .map(
      (claim, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${escapeHtml(claim.title)}</td>
          <td>${displayClaimAmount(claim)}</td>
        </tr>
      `
    )
    .join("");

  reportDetails.innerHTML = summaryItems.length
    ? summaryItems
        .map(
          (claim, index) => `
            <article class="detail-item">
              <h3>${index + 1}. ${escapeHtml(claim.title)} - ${displayClaimAmount(claim)}</h3>
              <p><span class="detail-label">أساس الحساب:</span> ${escapeHtml(claim.basis) || "-"}</p>
              <p><span class="detail-label">مصدر المعلومة:</span> ${escapeHtml(claim.source) || "-"}</p>
              <p><span class="detail-label">ملاحظات:</span> ${escapeHtml(claim.notes) || "-"}</p>
            </article>
          `
        )
        .join("")
    : '<p class="empty-state">لا توجد مطالبات مدخلة في التقرير.</p>';
}

function render() {
  renderIntroPage();
  renderAudioNarration();
  renderEvidence();
  renderCivilLiabilityPrelude();
  renderClaimRows();
  renderReport();
  renderReportAccess();
  animateActivePageWords();
  saveState();
}

function completeWizard() {
  state.reportUnlocked = true;
  render();
  reportSection.scrollIntoView({ behavior: "smooth", block: "start" });
  reportSection.focus({ preventScroll: true });
}

function startApp() {
  if (startActivated) return;
  startActivated = true;
  state.claimant = fields.startClaimant.value.trim() || state.claimant;
  state.defendant = fields.startDefendant.value.trim() || state.defendant;
  state.introPage = 0;
  state.reportUnlocked = false;
  state.summaryItems = [];
  lastAnimatedPage = null;
  syncCaseFields();
  startScreen.classList.add("hidden");
  workspace.classList.remove("hidden");
  render();
}

function resetApp() {
  const shouldReset = window.confirm("سيتم مسح التقدم المحفوظ والرجوع إلى البداية. هل تريد المتابعة؟");
  if (!shouldReset) return;
  safeStorageRemove(STORAGE_KEY);
  Object.assign(state, {
    claimant: initialState.claimant,
    defendant: initialState.defendant,
    caseNumber: initialState.caseNumber,
    reportDate: new Date().toISOString().slice(0, 10),
    introPage: 0,
    reportUnlocked: false,
    contentVersion: CONTENT_VERSION,
    evidence: { ...defaultEvidence },
    summaryItems: [],
    claims: [],
  });
  startActivated = false;
  lastAnimatedPage = null;
  syncCaseFields();
  workspace.classList.add("hidden");
  startScreen.classList.remove("hidden");
  reportSection.classList.add("report-locked");
  render();
}

window.__startEOSApp = startApp;
startButton.addEventListener("click", startApp);
startButton.addEventListener("touchend", (event) => {
  event.preventDefault();
  startApp();
});
resetButton.addEventListener("click", resetApp);

prevPageButton.addEventListener("click", () => {
  state.introPage = Math.max(0, state.introPage - 1);
  render();
});

nextPageButton.addEventListener("click", () => {
  if (state.introPage < introPages.length - 1) {
    state.introPage += 1;
    render();
    return;
  }
  completeWizard();
});

summaryNextButton.addEventListener("click", () => {
  if (state.introPage < introPages.length - 1) {
    state.introPage += 1;
    render();
    document.querySelector(".evidence-reader").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  completeWizard();
});

[fields.claimant, fields.defendant, fields.caseNumber, fields.reportDate].forEach((field) => {
  field.addEventListener("input", render);
});

function storeImageFile(file, key) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxWidth = 1600;
        const scale = Math.min(1, maxWidth / image.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        state.evidence[key] = canvas.toDataURL("image/jpeg", 0.88);
        resolve();
      };
      image.onerror = reject;
      image.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

fields.chevronScreenshotInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "chevronScreenshot");
  render();
});

fields.certificateInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  if (file.type === "application/pdf") {
    state.evidence.certificate = "";
    state.evidence.certificatePdfName = file.name;
    render();
    return;
  }
  state.evidence.certificatePdfName = "";
  await storeImageFile(file, "certificate");
  render();
});

fields.socialInsuranceInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "socialInsuranceWage");
  render();
});

fields.exchangeRateInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "exchangeRate");
  render();
});

fields.holidayEmailInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "holidayEmail");
  render();
});

fields.annualLeaveEmailOneInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "annualLeaveEmailOne");
  render();
});

fields.annualLeaveEmailTwoInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "annualLeaveEmailTwo");
  render();
});

fields.overtimeHoursInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "overtimeHours");
  render();
});

fields.warningImageInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "warningImage");
  render();
});

fields.savingsPayslipInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "savingsPayslip");
  render();
});

fields.medicalReportInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "medicalReport");
  render();
});

fields.retirementOfferOneInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "retirementOfferOne");
  render();
});

fields.retirementOfferTwoInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "retirementOfferTwo");
  render();
});

fields.riyadBankCommitmentInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "riyadBankCommitment");
  render();
});

fields.creditReportInput.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  await storeImageFile(file, "creditReport");
  render();
});

saveButton.addEventListener("click", () => {
  render();
  saveButton.textContent = "تم الحفظ";
  setTimeout(() => {
    saveButton.textContent = "حفظ";
  }, 1200);
});

printButton.addEventListener("click", () => {
  if (!state.reportUnlocked) return;
  render();
  window.print();
});

function openLightbox(image) {
  if (!image.src) return;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt || "";
  lightboxCaption.textContent = image.alt || "صورة مرفقة";
  imageLightbox.classList.remove("hidden");
  imageLightbox.setAttribute("aria-hidden", "false");
  closeLightbox.focus();
}

function hideLightbox() {
  imageLightbox.classList.add("hidden");
  imageLightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

document.addEventListener("click", (event) => {
  const image = event.target.closest("img.evidence-image, img.report-evidence");
  if (!image || image.classList.contains("hidden")) return;
  openLightbox(image);
});

closeLightbox.addEventListener("click", hideLightbox);

imageLightbox.addEventListener("click", (event) => {
  if (event.target === imageLightbox) {
    hideLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !imageLightbox.classList.contains("hidden")) {
    hideLightbox();
  }
});

captureDefaultEvidenceFromDom();
loadState();
if (isVideoCaptureMode) {
  const requestedPage = Number.parseInt(urlParams.get("page") || "3", 10);
  state.introPage = Math.min(Math.max(requestedPage, 0), introPages.length - 1);
  state.reportUnlocked = false;
  startActivated = true;
  startScreen.classList.add("hidden");
  workspace.classList.remove("hidden");
  document.body.classList.add("video-capture-mode");
}
syncCaseFields();
render();
