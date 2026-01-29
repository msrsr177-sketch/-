
export interface ProductPackage {
  id: string;
  name: string;
  price: string;
  amount: string;
  group?: string; // مجموعة الحزمة (مثلاً: ذهب لودو، جواهر لودو)
  color?: string; // لون السعر (مثلاً: ذهبي، سمائي)
}

export interface DigitalProduct {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  packages: ProductPackage[];
}

export enum AppMenu {
  HOME = 'الرئيسية',
  SERVICES = 'المنتجات الرقمية',
  PRODUCTS = 'المنتجات الملموسة',
  OFFERS = 'الخصومات',
  WHEEL = 'عجلة الحظ',
  ADS = 'الإعلانات',
  CONTACT = 'تواصل معنا',
  ICLOUD = 'آيكلود'
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
