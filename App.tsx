
import React, { useState, useRef, useEffect } from 'react';
import { 
  Home, Gift, Disc, Megaphone, Phone, MessageSquare, Search, LayoutGrid, 
  PlusCircle, Camera, DollarSign, User, Hash, MapPin, Instagram, 
  Facebook, PlayCircle, Smartphone, Cpu, ShieldCheck, Sparkles, Zap, Package, ShoppingBag,
  Bell, X, Info, TrendingDown, Star, Cloud, Calendar, Image as ImageIcon, Send, Clock, AlertTriangle, ChevronLeft, Users
} from 'lucide-react';
import { AppMenu, DigitalProduct } from './types';
import { DIGITAL_PRODUCTS } from './constants';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import ChatWidget from './components/ChatWidget';
import WheelOfFortune from './components/WheelOfFortune';

const NOTIFICATIONS = [
  { id: 6, title: 'تيم التوحد', message: 'حمد + احمد يرحبون بكم في تطبيق نيو فون الرسمي.', type: 'welcome', time: 'الآن', icon: <Users size={16} /> },
  { id: 5, title: 'حمد يرحب بكم', message: 'أهلاً وسهلاً بكم في تطبيق نيو فون الرسمي، نسعد بخدمتكم دائماً.', type: 'welcome', time: 'منذ قليل', icon: <Star size={16} /> },
  { id: 1, title: 'تخفيضات كبرى!', message: 'خصم 15% على جميع شدات ببجي لفترة محدودة.', type: 'discount', time: 'منذ ساعتين', icon: <DollarSign size={16} /> },
  { id: 2, title: 'منتج جديد', message: 'تم إضافة جواهر يلا لودو بباقات جديدة وحصرية.', type: 'new', time: 'منذ 5 ساعات', icon: <Package size={16} /> },
  { id: 3, title: 'تحديث الأسعار', message: 'انخفاض أسعار عملات تيك توك. تحقق من القائمة الآن!', type: 'price', time: 'أمس', icon: <TrendingDown size={16} /> },
  { id: 4, title: 'خدمة الآيكلود', message: 'الآن إنشاء حسابات آيكلود رسمية متوفر في المكتب.', type: 'service', time: 'قبل يومين', icon: <Cloud size={16} /> },
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppMenu>(AppMenu.HOME);
  const [selectedProduct, setSelectedProduct] = useState<DigitalProduct | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasNewNotifications, setHasNewNotifications] = useState(true);

  const [adForm, setAdForm] = useState({
    userName: '',
    phone: '',
    productName: '',
    price: '',
    image: null as File | null
  });

  const [icloudForm, setIcloudForm] = useState({
    name: '',
    birthDate: '',
    phone: '',
    image: null as string | null
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً لتفعيل إعلانك.');
    setAdForm({ userName: '', phone: '', productName: '', price: '', image: null });
  };

  const handleIcloudImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIcloudForm({ ...icloudForm, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIcloudSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('تم إرسال بيانات الآيكلود بنجاح! سيتم إنشاء حسابك قريباً.');
  };

  const renderContent = () => {
    switch (activeTab) {
      case AppMenu.HOME:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-right pb-10">
            <div className="relative glass p-6 md:p-10 rounded-[45px] overflow-hidden border border-white/10">
              <div className="absolute top-0 left-0 w-full h-full maroon-gradient opacity-10"></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="space-y-2">
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white drop-shadow-lg">نيو فون</h2>
                  <p className="text-red-500 font-black text-lg md:text-2xl italic tracking-[0.2em] uppercase">NEW PHONE</p>
                  <p className="text-white/40 font-bold text-xs md:text-sm tracking-widest uppercase mt-2">لصيانة وبرمجة الهاتف النقال</p>
                </div>
                
                <div className="max-w-lg space-y-3">
                  <p className="text-white/70 leading-relaxed font-medium text-base">
                    في <span className="text-white font-black">نيو فون</span>، نضمن لكم جودة لا تضاهى. نحن مركز متخصص يجمع بين الخبرة العميقة والتقنيات الحديثة.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <div className="glass-dark px-6 py-3 rounded-[20px] border border-white/10 flex items-center gap-2">
                    <ShieldCheck className="text-green-500 w-5 h-5" />
                    <span className="text-sm font-black">موثوقية 100%</span>
                  </div>
                  <div className="glass-dark px-6 py-3 rounded-[20px] border border-white/10 flex items-center gap-2">
                    <Zap className="text-yellow-500 w-5 h-5" />
                    <span className="text-sm font-black">دقة في البرمجة</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-8 rounded-[40px] border border-white/10 group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden">
                <div className="w-14 h-14 maroon-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <Cpu className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-4">صيانة وبرمجة الهاتف</h3>
                <p className="text-white/60 leading-relaxed text-sm font-medium">
                  حلول برمجية متكاملة لجميع أنواع الهواتف، فك أقفال، روت، وتفليش الأنظمة بأحدث المعدات. صيانة هاردوير تشمل تبديل الشاشات والبطاريات الأصلية.
                </p>
              </div>

              <div className="glass p-8 rounded-[40px] border border-white/10 group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden">
                <div className="w-14 h-14 maroon-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                  <DollarSign className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-4">العملات والبطاقات</h3>
                <p className="text-white/60 leading-relaxed text-sm font-medium">
                  بيع وشراء USDT، شحن شدات ببجي، وجواهر الألعاب المختلفة بأسعار تنافسية وتحويل فوري يضمن لك الأمان والسرعة.
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-10">
              <p className="text-[10px] text-white/20 font-medium">تم إنشاء التطبيق بواسطة الدكتور حمد هادي</p>
            </div>
          </div>
        );
      case AppMenu.SERVICES:
        return (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {DIGITAL_PRODUCTS.map(p => (
              <ProductCard key={p.id} product={p} onClick={setSelectedProduct} />
            ))}
          </div>
        );
      case AppMenu.PRODUCTS:
        return (
          <div className="flex flex-col items-center justify-center p-12 glass rounded-[40px] text-center space-y-4 animate-in fade-in duration-500 border border-white/10">
            <div className="p-8 bg-white/5 rounded-full mb-2">
              <Package className="w-16 h-16 text-red-500" />
            </div>
            <h2 className="text-2xl font-black">المنتجات الملموسة</h2>
            <p className="text-white/60 text-base max-w-sm">هذا القسم قيد التحديث حالياً ليضم أحدث أنواع الهواتف والإكسسوارات الأصلية.</p>
          </div>
        );
      case AppMenu.OFFERS:
        return (
          <div className="space-y-6 animate-in fade-in duration-500 text-right">
            <h2 className="text-2xl font-black px-4 text-red-500">عروض حصرية 🔥</h2>
            
            <div className="glass p-10 rounded-[40px] relative overflow-hidden border border-white/10 opacity-60 grayscale">
              <div className="absolute top-0 left-0 bg-white/20 px-6 py-2 rounded-br-3xl font-black text-sm text-white/50">انتهى العرض</div>
              <h3 className="text-5xl font-black mb-3 tracking-tighter line-through">خصم 50%</h3>
              <p className="text-white/80 text-lg mb-8 font-bold">على جميع عمليات تبديل الشاشات.</p>
              <button disabled className="bg-white/10 px-10 py-4 rounded-xl font-black text-lg cursor-not-allowed">منتهي</button>
            </div>

            <div className="glass p-10 rounded-[40px] relative overflow-hidden border border-dashed border-red-500/30 group">
              <div className="absolute top-0 left-0 maroon-gradient px-6 py-2 rounded-br-3xl font-black text-sm animate-pulse">قريباً جداً</div>
              <div className="flex flex-col items-center justify-center py-6">
                <Clock className="w-16 h-16 text-red-500 mb-4 animate-spin-slow opacity-40" />
                <h3 className="text-3xl font-black mb-2 tracking-tighter">تخفيضات كبرى قادمة</h3>
                <p className="text-white/60 text-base font-bold text-center">انتظرونا في الأيام القادمة، عروض قوية ستشمل جميع الألعاب والخدمات!</p>
              </div>
            </div>
          </div>
        );
      case AppMenu.WHEEL:
        return <WheelOfFortune />;
      case AppMenu.ADS:
        return (
          <div className="space-y-8 animate-in fade-in duration-500 text-right pb-10">
            <div className="glass p-10 rounded-[40px] border border-white/10 maroon-gradient bg-opacity-5 relative overflow-hidden">
              <h2 className="text-3xl font-black mb-4">أعلن عن منتجك معنا!</h2>
              <p className="text-lg text-white/80 leading-relaxed font-medium">
                مقابل <span className="text-red-500 font-black">10,000 د.ع شهرياً فقط</span>.
              </p>
            </div>
            
            <div className="glass p-10 rounded-[40px] border border-white/10">
              <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                <div className="p-2.5 maroon-gradient rounded-xl"><Megaphone className="text-white w-5 h-5" /></div>
                نموذج طلب إعلان
              </h3>
              <form onSubmit={handleAdSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-white/60 font-black mr-2">اسم المعلن</label>
                  <input 
                    type="text" required placeholder="الاسم الكامل"
                    className="w-full bg-black/40 border-2 border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-500/30 transition-all text-base font-bold"
                    value={adForm.userName}
                    onChange={e => setAdForm({...adForm, userName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/60 font-black mr-2">رقم التواصل</label>
                  <input 
                    type="tel" required placeholder="07XXXXXXXXX"
                    className="w-full bg-black/40 border-2 border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-500/30 transition-all text-base font-mono font-bold"
                    value={adForm.phone}
                    onChange={e => setAdForm({...adForm, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/60 font-black mr-2">اسم المنتج</label>
                  <input 
                    type="text" required placeholder="مثال: آيفون 15"
                    className="w-full bg-black/40 border-2 border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-500/30 transition-all text-base font-bold"
                    value={adForm.productName}
                    onChange={e => setAdForm({...adForm, productName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/60 font-black mr-2">سعر المنتج</label>
                  <input 
                    type="text" required placeholder="1,000,000 د.ع"
                    className="w-full bg-black/40 border-2 border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-500/30 transition-all text-base font-bold"
                    value={adForm.price}
                    onChange={e => setAdForm({...adForm, price: e.target.value})}
                  />
                </div>
                <div className="col-span-full pt-2">
                  <button type="submit" className="w-full maroon-gradient py-5 rounded-2xl font-black text-xl hover:scale-[1.01] active:scale-95 transition-all">
                    إرسال طلب الإعلان
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      case AppMenu.ICLOUD:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 text-right pb-10">
            <h2 className="text-2xl font-black px-4 text-red-500 flex items-center gap-2">
              <Cloud className="w-6 h-6" /> خدمات آيكلود (iCloud)
            </h2>

            <div className="flex justify-center p-4">
              <div className="w-full max-w-sm aspect-[1.6/1] maroon-gradient rounded-[30px] p-6 relative overflow-hidden shadow-2xl border border-white/20 group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-left">
                      <p className="text-[10px] font-black tracking-widest text-white/40 uppercase">New Phone Premium</p>
                      <h4 className="text-lg font-black tracking-tighter text-white">iCloud Service</h4>
                    </div>
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center overflow-hidden border border-white/10">
                      {icloudForm.image ? (
                        <img src={icloudForm.image} className="w-full h-full object-cover" alt="Profile" />
                      ) : (
                        <Cloud className="text-white w-6 h-6 opacity-30" />
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest">Subscriber Name</p>
                    <p className="text-2xl font-black tracking-tight text-white line-clamp-1">
                      {icloudForm.name || 'الاسم الكامل'}
                    </p>
                  </div>

                  <div className="flex justify-between items-end border-t border-white/10 pt-4">
                    <div className="space-y-0.5">
                      <p className="text-[7px] font-bold text-white/40 uppercase">Date of Birth</p>
                      <p className="text-sm font-black text-white">{icloudForm.birthDate || 'YYYY/MM/DD'}</p>
                    </div>
                    <div className="space-y-0.5 text-left">
                      <p className="text-[7px] font-bold text-white/40 uppercase">Contact Number</p>
                      <p className="text-sm font-black text-white font-mono">{icloudForm.phone || '07XXXXXXXXX'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-[40px] border border-white/10">
              <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                <div className="p-2.5 maroon-gradient rounded-xl"><PlusCircle className="text-white w-5 h-5" /></div>
                إنشاء حساب آيكلود جديد
              </h3>
              <form onSubmit={handleIcloudSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-white/60 font-black mr-2 flex items-center gap-1">
                      <User size={12} className="text-red-500" /> الاسم بالكامل
                    </label>
                    <input 
                      type="text" required placeholder="اكتب اسمك الثلاثي"
                      className="w-full bg-black/40 border-2 border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-500/30 transition-all text-base font-bold"
                      value={icloudForm.name}
                      onChange={e => setIcloudForm({...icloudForm, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-white/60 font-black mr-2 flex items-center gap-1">
                      <Calendar size={12} className="text-red-500" /> تاريخ الميلاد الكامل
                    </label>
                    <input 
                      type="text" required placeholder="مثال: 1902/2/17"
                      className="w-full bg-black/40 border-2 border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-500/30 transition-all text-base font-bold"
                      value={icloudForm.birthDate}
                      onChange={e => setIcloudForm({...icloudForm, birthDate: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-white/60 font-black mr-2 flex items-center gap-1">
                      <Phone size={12} className="text-red-500" /> رقم الهاتف
                    </label>
                    <input 
                      type="tel" required placeholder="07XXXXXXXXX"
                      className="w-full bg-black/40 border-2 border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-red-500/30 transition-all text-base font-mono font-bold"
                      value={icloudForm.phone}
                      onChange={e => setIcloudForm({...icloudForm, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-white/60 font-black mr-2 flex items-center gap-1">
                      <ImageIcon size={12} className="text-red-500" /> صورة اختيارية للكارت
                    </label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full bg-black/40 border-2 border-dashed border-white/10 rounded-2xl py-4 px-6 flex items-center justify-center gap-2 cursor-pointer hover:border-red-500/30 transition-all"
                    >
                      <ImageIcon size={18} className="text-white/40" />
                      <span className="text-sm font-bold text-white/40">اختر صورة</span>
                    </div>
                    <input 
                      ref={fileInputRef}
                      type="file" accept="image/*" className="hidden"
                      onChange={handleIcloudImageChange}
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full maroon-gradient py-5 rounded-2xl font-black text-xl hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3">
                    <Send size={24} /> إنشاء الكارت والحساب
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      case AppMenu.CONTACT:
        return (
          <div className="space-y-8 animate-in fade-in duration-500 text-right pb-10">
            <h2 className="text-2xl font-black px-4 mb-4">تواصل معنا 📞</h2>
            
            <div className="glass p-8 rounded-[35px] border border-white/10 flex items-center gap-5">
              <div className="p-4 maroon-gradient rounded-2xl"><MapPin className="text-white w-7 h-7" /></div>
              <div>
                <h3 className="text-sm text-white/40 font-black uppercase tracking-widest">العنوان</h3>
                <p className="text-xl font-black">ميسان - حي الزهراء - مجاور مكتبة المتنبي</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[ 
                { name: 'حمد', phone: '07722655734', wa: 'https://wa.me/964722655734' }, 
                { name: 'حمزة', phone: '07710557578', wa: 'https://wa.me/964710557578' }, 
                { name: 'حيدر', phone: '07711150157', wa: 'https://wa.me/964711150157' } 
              ].map((c, i) => (
                <div key={i} className="glass-dark p-6 rounded-[30px] border border-white/10 hover:translate-y-[-4px] transition-all group">
                  <a href={c.wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-2 hover:text-red-400 transition-colors">
                    <User className="w-5 h-5 text-red-500" />
                    <span className="font-black text-lg">{c.name}</span>
                  </a>
                  <a href={`tel:${c.phone}`} className="text-red-500 font-mono text-base block font-black">{c.phone}</a>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { Icon: Instagram, color: 'text-pink-500' },
                { Icon: Facebook, color: 'text-blue-500' },
                { Icon: PlayCircle, color: 'text-white' }
              ].map((social, i) => (
                <button key={i} className="glass py-8 rounded-[35px] flex flex-col items-center hover:scale-105 transition-all group border border-white/10 overflow-hidden relative">
                  <div className={`${social.color} transition-transform group-hover:scale-110`}>
                    <social.Icon size={32} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0 md:pt-20" dir="rtl" style={{ paddingBottom: 'calc(6rem + env(safe-area-inset-bottom, 0px))' }}>
      <header 
        className="fixed top-0 left-0 right-0 z-40 glass-dark px-4 md:px-8 pb-3.5 flex items-center justify-between border-none shadow-sm"
        style={{ paddingTop: 'calc(0.875rem + env(safe-area-inset-top, 0px))' }}
      >
        <div className="flex items-center gap-3">
          <div className="text-right">
            <h1 className="text-2xl font-black tracking-tighter leading-none text-white">نيو فون</h1>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => { setShowNotifications(!showNotifications); setHasNewNotifications(false); }} 
              className={`relative glass-dark p-3 rounded-2xl border transition-all duration-300 shadow-xl group overflow-hidden
                ${hasNewNotifications 
                  ? 'border-red-500/50 shadow-[0_0_20px_rgba(226,29,29,0.2)] bg-red-950/20' 
                  : 'border-white/10 hover:border-red-500/30'
                }
                active:scale-95`}
            >
              <div className={`absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity ${hasNewNotifications ? 'opacity-20' : ''}`}></div>
              <Bell className={`w-5 h-5 relative z-10 transition-colors ${hasNewNotifications ? 'text-red-500 animate-bounce' : 'text-white/70 group-hover:text-white'}`} />
              {hasNewNotifications && (
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5 z-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 border border-white/20"></span>
                </span>
              )}
            </button>
            
            {showNotifications && (
              <div className="absolute top-full left-0 mt-3 w-[300px] glass-dark border border-white/10 rounded-[30px] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                <div className="maroon-gradient p-4 flex items-center justify-between">
                  <span className="font-black text-sm text-white">التنبيهات والأخبار</span>
                  <X size={16} className="cursor-pointer opacity-50 text-white" onClick={() => setShowNotifications(false)} />
                </div>
                <div className="max-h-[350px] overflow-y-auto">
                  {NOTIFICATIONS.length > 0 ? (
                    NOTIFICATIONS.map((n, idx) => (
                      <div key={n.id} className={`p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer group ${idx === NOTIFICATIONS.length - 1 ? 'border-none' : ''}`}>
                        <div className="flex gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                            {n.icon}
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-black text-xs text-white">{n.title}</h4>
                            <p className="text-[10px] text-white/50 leading-relaxed">{n.message}</p>
                            <span className="text-[9px] text-red-400 font-bold block mt-1">{n.time}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-10 text-center text-white/30 space-y-2">
                      <AlertTriangle className="mx-auto opacity-20" size={32} />
                      <p className="text-xs font-black italic">لا يوجد تنبيهات حالياً</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <button onClick={() => setShowChat(true)} className="maroon-gradient p-3 rounded-2xl hover:scale-110 active:scale-90 transition-all shadow-xl shadow-red-900/20">
            <MessageSquare className="w-5 h-5 text-white" />
          </button>
        </div>
      </header>

      <main 
        className="max-w-4xl mx-auto p-4 md:p-8 pt-24 md:pt-12 min-h-screen"
        style={{ paddingTop: 'calc(6rem + env(safe-area-inset-top, 0px))' }}
      >
        {renderContent()}
      </main>

      <nav 
        className="fixed bottom-4 left-4 right-4 z-40 glass-dark rounded-[24px] p-1.5 shadow-xl md:hidden border-none"
        style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar scroll-smooth px-1">
          <NavButton active={activeTab === AppMenu.SERVICES} icon={<LayoutGrid size={18} />} label="المنتجات" onClick={() => setActiveTab(AppMenu.SERVICES)} />
          <NavButton active={activeTab === AppMenu.OFFERS} icon={<Gift size={18} />} label="العروض" onClick={() => setActiveTab(AppMenu.OFFERS)} />
          <NavButton active={activeTab === AppMenu.ADS} icon={<Megaphone size={18} />} label="إعلانات" onClick={() => setActiveTab(AppMenu.ADS)} />
          <NavButton active={activeTab === AppMenu.HOME} icon={<Home size={18} />} label="الرئيسية" onClick={() => setActiveTab(AppMenu.HOME)} />
          <NavButton active={activeTab === AppMenu.ICLOUD} icon={<Cloud size={18} />} label="آيكلود" onClick={() => setActiveTab(AppMenu.ICLOUD)} />
          <NavButton active={activeTab === AppMenu.WHEEL} icon={<Disc size={18} />} label="العجلة" onClick={() => setActiveTab(AppMenu.WHEEL)} />
          <NavButton active={activeTab === AppMenu.CONTACT} icon={<Phone size={18} />} label="تواصل" onClick={() => setActiveTab(AppMenu.CONTACT)} />
        </div>
      </nav>

      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3.5 glass-dark p-3 rounded-[32px] shadow-2xl border-none">
        <NavButton active={activeTab === AppMenu.SERVICES} icon={<LayoutGrid size={22} />} onClick={() => setActiveTab(AppMenu.SERVICES)} tooltip="المنتجات الرقمية" />
        <NavButton active={activeTab === AppMenu.HOME} icon={<Home size={22} />} onClick={() => setActiveTab(AppMenu.HOME)} tooltip="الصفحة الرئيسية" />
        <NavButton active={activeTab === AppMenu.ICLOUD} icon={<Cloud size={22} />} onClick={() => setActiveTab(AppMenu.ICLOUD)} tooltip="خدمات آيكلود" />
        <NavButton active={activeTab === AppMenu.OFFERS} icon={<Gift size={22} />} onClick={() => setActiveTab(AppMenu.OFFERS)} tooltip="أقوى العروض" />
        <NavButton active={activeTab === AppMenu.ADS} icon={<Megaphone size={22} />} onClick={() => setActiveTab(AppMenu.ADS)} tooltip="سوق الإعلانات" />
        <NavButton active={activeTab === AppMenu.WHEEL} icon={<Disc size={22} />} onClick={() => setActiveTab(AppMenu.WHEEL)} tooltip="عجلة الحظ" />
        <NavButton active={activeTab === AppMenu.CONTACT} icon={<Phone size={22} />} onClick={() => setActiveTab(AppMenu.CONTACT)} tooltip="تواصل معنا" />
      </nav>

      {selectedProduct && <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />}
      {showChat && (
        <div className="fixed inset-0 z-[60] p-4 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="w-full max-w-xl h-[80vh]">
            <ChatWidget onClose={() => setShowChat(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

const NavButton: React.FC<{ active: boolean; icon: React.ReactNode; label?: string; onClick: () => void; tooltip?: string }> = ({ active, icon, label, onClick, tooltip }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center flex-1 py-1.5 md:py-3 rounded-[20px] transition-all duration-300 relative group min-w-[50px]
      ${active ? 'scale-115 -translate-y-1 md:-translate-y-2 text-red-500 font-black' : 'scale-100 opacity-40 text-white hover:opacity-100'}
    `}
  >
    <div className="mb-0.5">{icon}</div>
    {label && <span className={`text-[8px] font-black tracking-tighter ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-50 h-0 overflow-hidden'}`}>{label}</span>}
    {tooltip && (
      <span className="absolute right-full mr-4 px-3 py-1.5 glass-dark text-white text-[11px] rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none font-black whitespace-nowrap shadow-lg">
        {tooltip}
      </span>
    )}
  </button>
);

export default App;
