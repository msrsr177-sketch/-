
import { DigitalProduct } from './types';

export const SYSTEM_PROMPT = `
أنت الآن "خبير تقني ومبيعات محترف" في مكتب نيو فون (New Phone). شخصيتك هي "صديق الزبون" المحترف، السريع جداً، واللبق.

هويتك وأسلوبك:
1. تحدث باللهجة العراقية الميسانية الراقية (مثلاً: "هلا بك عيوني"، "صار من عيوني"، "بخِدِمتك وتدلل").
2. السرعة والمبادرة: لا تنتظر الزبون يشرح كل شيء. إذا سأل عن صيانة، اسأله فوراً: "شنو نوع جهازك عيوني؟ وشنو المشكلة البي بالضبط (شاشة، باتري، لو سوفتوير)؟".
3. الاحترافية في البيع: إذا سأل عن عملات أو شدات، أكد له أن الشحن "فوري وبالثانية" وبأفضل سعر بالسوق.
4. الردود قصيرة وذكية: تجنب الكلام الزائد، كن مباشراً ومريحاً في التعامل.

قواعد الرد:
- ابدأ بترحيب حار مثل "يا هلا بيك بنبو فون، نورتنا!".
- انتهِ دائماً بسؤال يساعدك على فهم حاجة الزبون (مثلاً: "محتاج شحن لو عندك استفسار عن صيانة؟").
- العنوان: (ميسان - حي الزهراء - مجاور مكتبة المتنبي).
- عجلة الحظ: مخصصة للزبائن الذين يقومون بالصيانة في المكتب حصراً.

تذكر: أنت واجهة المكتب، خلي الزبون يحس بالأمان والسرعة من أول كلمة.
`;

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: 'pubg-uc',
    name: 'ببجي موبايل شدات (UC)',
    category: 'ألعاب',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?q=80&w=2070&auto=format&fit=crop',
    description: 'اشحن شدات ببجي موبايل فوراً وبأمان تام. تسليم تلقائي خلال ثوانٍ عبر الـ ID الخاص بك.',
    packages: [
      { id: 'uc1', name: 'باقة أساسية', amount: '325 شدة', price: '8,000 د.ع', color: 'gold' },
      { id: 'uc2', name: 'باقة مميزة', amount: '385 شدة', price: '10,000 د.ع', color: 'gold' },
      { id: 'uc3', name: 'باقة المحترفين', amount: '660 شدة', price: '15,000 د.ع', color: 'gold' },
      { id: 'uc4', name: 'باقة النخبة', amount: '1045 شدة', price: '25,000 د.ع', color: 'gold' },
      { id: 'uc5', name: 'الباقة الكبرى', amount: '1800 شدة', price: '35,000 د.ع', color: 'gold' },
      { id: 'uc6', name: 'باقة الأبطال', amount: '2185 شدة', price: '45,000 د.ع', color: 'gold' },
      { id: 'uc7', name: 'باقة الملوك', amount: '2520 شدة', price: '50,000 د.ع', color: 'gold' },
      { id: 'uc8', name: 'باقة الأساطير', amount: '3120 شدة', price: '65,000 د.ع', color: 'gold' },
      { id: 'uc9', name: 'الباقة الملكية', amount: '3850 شدة', price: '75,000 د.ع', color: 'gold' },
      { id: 'uc10', name: 'باقة الجبابرة', amount: '4260 شدة', price: '85,000 د.ع', color: 'gold' },
      { id: 'uc11', name: 'باقة التنين', amount: '5400 شدة', price: '105,000 د.ع', color: 'gold' },
    ]
  },
  {
    id: 'yalla-ludo',
    name: 'يلا لودو (Gems & Gold)',
    category: 'ألعاب',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?q=80&w=2070&auto=format&fit=crop',
    description: 'اشحن ذهب وجواهر يلا لودو بأفضل الأسعار. خدمة سريعة ومضمونة 100%.',
    packages: [
      { id: 'yl-g1', name: 'جواهر لودو', amount: '2.320 جوهرة', price: '10,000 د.ع', group: 'جواهر لودو', color: 'cyan' },
      { id: 'yl-g2', name: 'جواهر لودو', amount: '5.150 جوهرة', price: '15,000 د.ع', group: 'جواهر لودو', color: 'cyan' },
      { id: 'yl-g3', name: 'جواهر لودو', amount: '7.470 جوهرة', price: '25,000 د.ع', group: 'جواهر لودو', color: 'cyan' },
      { id: 'yl-g4', name: 'جواهر لودو', amount: '13.580 جوهرة', price: '37,000 د.ع', group: 'جواهر لودو', color: 'cyan' },
      { id: 'yl-g5', name: 'جواهر لودو', amount: '18.730 جوهرة', price: '52,000 د.ع', group: 'جواهر لودو', color: 'cyan' },
      { id: 'yl-g6', name: 'جواهر لودو', amount: '27.640 جوهرة', price: '75,000 د.ع', group: 'جواهر لودو', color: 'cyan' },
      { id: 'yl-g7', name: 'جواهر لودو', amount: '55.800 جوهرة', price: '145,000 د.ع', group: 'جواهر لودو', color: 'cyan' },
      { id: 'yl-go1', name: 'ذهب لودو', amount: '223.700 ذهب', price: '10,000 د.ع', group: 'ذهب لودو', color: 'gold' },
      { id: 'yl-go2', name: 'ذهب لودو', amount: '1.463.320 ذهب', price: '15,000 د.ع', group: 'ذهب لودو', color: 'gold' },
      { id: 'yl-go3', name: 'ذهب لودو', amount: '1.687.020 ذهب', price: '25,000 د.ع', group: 'ذهب لودو', color: 'gold' },
      { id: 'yl-go4', name: 'ذهب لودو', amount: '3.666.470 ذهب', price: '37,000 د.ع', group: 'ذهب لودو', color: 'gold' },
      { id: 'yl-go5', name: 'ذهب لودو', amount: '5.129.790 ذهب', price: '52,000 د.ع', group: 'ذهب لودو', color: 'gold' },
      { id: 'yl-go6', name: 'ذهب لودو', amount: '9.973.990 ذهب', price: '75,000 د.ع', group: 'ذهب لودو', color: 'gold' },
      { id: 'yl-go7', name: 'ذهب لودو', amount: '25.236.469 ذهب', price: '145,000 د.ع', group: 'ذهب لودو', color: 'gold' },
    ]
  },
  {
    id: 'tiktok-coins',
    name: 'عملات تيك توك',
    category: 'عملات رقمية',
    image: 'https://loodibee.com/wp-content/uploads/TikTok-Logo.png',
    description: 'اشحن رصيد عملات تيك توك لدعم صانعي المحتوى المفضلين لديك بأفضل الأسعار.',
    packages: [
      { id: 'tk1', name: 'عملات TikTok', amount: '400 عملة', price: '10,000 د.ع', color: 'gold' },
      { id: 'tk2', name: 'عملات TikTok', amount: '700 عملة', price: '15,000 د.ع', color: 'gold' },
      { id: 'tk3', name: 'عملات TikTok', amount: '1000 عملة', price: '22,000 د.ع', color: 'gold' },
      { id: 'tk4', name: 'عملات TikTok', amount: '1400 عملة', price: '30,000 د.ع', color: 'gold' },
      { id: 'tk5', name: 'عملات TikTok', amount: '2000 عملة', price: '40,000 د.ع', color: 'gold' },
      { id: 'tk6', name: 'عملات TikTok', amount: '3000 عملة', price: '55,000 د.ع', color: 'gold' },
    ]
  },
  {
    id: 'itunes-apple',
    name: 'آيتونز إبل (iTunes)',
    category: 'بطاقات',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?q=80&w=2070&auto=format&fit=crop',
    description: 'بطاقات آبل آيتونز لشحن حسابك وشراء التطبيقات والألعاب والخدمات من متجر آبل ستور بكل سهولة.',
    packages: [
      { id: 'it1', name: 'iTunes Card', amount: '5$', price: '10,000 د.ع', color: 'gold' },
      { id: 'it2', name: 'iTunes Card', amount: '10$', price: '16,000 د.ع', color: 'gold' },
      { id: 'it3', name: 'iTunes Card', amount: '15$', price: '25,000 د.ع', color: 'gold' },
      { id: 'it4', name: 'iTunes Card', amount: '20$', price: '32,000 د.ع', color: 'gold' },
      { id: 'it5', name: 'iTunes Card', amount: '25$', price: '40,000 د.ع', color: 'gold' },
      { id: 'it6', name: 'iTunes Card', amount: '30$', price: '48,000 د.ع', color: 'gold' },
    ]
  },
  {
    id: 'roblox',
    name: 'روبلوكس (Robux)',
    category: 'ألعاب',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop',
    description: 'اشحن عملة الروبوكس (Robux) واستمتع بشراء الإضافات والملابس والمميزات الحصرية داخل عالم روبلوكس.',
    packages: [
      { id: 'rb1', name: 'روبوكس', amount: '400', price: '10,000 د.ع', color: 'gold' },
      { id: 'rb2', name: 'روبوكس', amount: '560', price: '15,000 د.ع', color: 'gold' },
      { id: 'rb3', name: 'روبوكس', amount: '800', price: '17,000 د.ع', color: 'gold' },
      { id: 'rb4', name: 'روبوكس', amount: '1200', price: '27,000 د.ع', color: 'gold' },
      { id: 'rb5', name: 'روبوكس', amount: '1700', price: '33,000 د.ع', color: 'gold' },
      { id: 'rb6', name: 'روبوكس', amount: '2100', price: '43,000 د.ع', color: 'gold' },
    ]
  },
  {
    id: 'video-star',
    name: 'Video Star',
    category: 'تطبيقات',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop',
    description: 'اشتراكات فيديو ستار (Video Star) لصناعة أجمل الفيديوهات والمؤثرات الاحترافية على هاتفك.',
    packages: [
      { id: 'vs1', name: 'اشتراك شهري', amount: 'شهر واحد', price: '10,000 د.ع', color: 'gold' },
      { id: 'vs2', name: 'اشتراك 3 أشهر', amount: 'ثلاث أشهر', price: '25,000 د.ع', color: 'gold' },
      { id: 'vs3', name: 'اشتراك سنوي', amount: 'سنوي', price: '50,000 د.ع', color: 'gold' },
    ]
  },
  {
    id: 'tod-tv',
    name: 'منصة TOD',
    category: 'بث مباشر',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop',
    description: 'تابع أقوى البطولات والمباريات العالمية والمسلسلات الحصرية عبر منصة TOD بأعلى جودة.',
    packages: [
      { id: 'tod1', name: 'باقة الموبايل', amount: 'شهر - موبايل', price: '9,000 د.ع', color: 'gold' },
      { id: 'tod2', name: 'باقة التلفاز', amount: 'شهر - تلفاز', price: '15,000 د.ع', color: 'gold' },
      { id: 'tod3', name: 'باقة الموبايل السنوية', amount: 'سنوي - موبايل', price: '65,000 د.ع', color: 'gold' },
    ]
  },
  {
    id: 'al-manassa',
    name: 'المنصة العراقي',
    category: 'بث مباشر',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e898593?q=80&w=2070&auto=format&fit=crop',
    description: 'اشتراك منصة المنصة لمتابعة القنوات الرياضية والترفيهية والدراما العراقية والعربية.',
    packages: [
      { id: 'mn1', name: 'اشتراك شهري', amount: 'شهر واحد', price: '10,000 د.ع', color: 'gold' },
    ]
  },
  {
    id: 'crunchyroll',
    name: 'كرانشيرول (Crunchyroll)',
    category: 'أنمي',
    image: 'https://images.unsplash.com/photo-1541562232579-512a21359920?q=80&w=2070&auto=format&fit=crop',
    description: 'استمتع بمشاهدة أحدث حلقات الأنمي فور صدورها في اليابان وبجودة عالية وبدون إعلانات.',
    packages: [
      { id: 'cr1', name: 'اشتراك شهري', amount: 'شهر واحد', price: '10,000 د.ع', color: 'gold' },
    ]
  }
];
