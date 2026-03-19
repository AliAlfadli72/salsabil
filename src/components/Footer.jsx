import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: BRAND & NEWSLETTER */}
        <div className="grid lg:grid-cols-2 gap-16 pb-16 border-b border-white/5">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-600/20">
                S
              </div>
              <h2 className="text-3xl font-black text-white tracking-tighter">سلسـبيل</h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-slate-500">
              رواد صناعة المشروبات في المنطقة. نجمع بين أصالة المذاق وأحدث تقنيات الإنتاج العالمية لنروي عطش عملائنا بالجودة والتميز.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
            <h3 className="text-white font-bold mb-4 relative z-10">اشترك في نشرتنا الإخبارية</h3>
            <p className="text-sm mb-6 text-slate-500 relative z-10">كن أول من يعرف عن نكهاتنا الجديدة وعروض الشراكة.</p>
            <form className="relative z-10 flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="flex-1 bg-slate-900 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-600 transition-all"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all group-hover:scale-105">
                <Send size={20} className="rotate-180" />
              </button>
            </form>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS & CONTACT */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          
          {/* SITEMAP */}
          <div>
            <h4 className="text-white font-black mb-8 text-sm uppercase tracking-widest border-r-4 border-blue-600 pr-3">خريطة الموقع</h4>
            <ul className="space-y-4 font-bold">
              {[
                { name: "الرئيسية", href: "/" },
                { name: "قصة الشركة", href: "/about" },
                { name: "كتالوج المنتجات", href: "/products" },
                { name: "معايير الجودة", href: "/quality" },
                { name: "طلب توزيع", href: "/distribution" }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-500 transition-colors flex items-center gap-2 group">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS CATEGORIES */}
          <div>
            <h4 className="text-white font-black mb-8 text-sm uppercase tracking-widest border-r-4 border-emerald-500 pr-3">منتجاتنا</h4>
            <ul className="space-y-4">
              <li className="hover:text-white transition-colors cursor-pointer">المشروبات الغازية</li>
              <li className="hover:text-white transition-colors cursor-pointer">العصائر الطبيعية 100%</li>
              <li className="hover:text-white transition-colors cursor-pointer">مياه الشرب المعبأة</li>
              <li className="hover:text-white transition-colors cursor-pointer">إصدارات خاصة</li>
            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black mb-8 text-sm uppercase tracking-widest border-r-4 border-slate-500 pr-3">ابقَ على اتصال</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-500">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">المبيعات</p>
                    <p className="text-white font-bold" dir="ltr">+963 550 725 933</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-500">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">البريد الإلكتروني</p>
                    <p className="text-white font-bold">info@salsabil-sy.com</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-500">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">المقر</p>
                    <p className="text-white font-bold text-sm">سوريا، دمشق، المدينة الصناعية</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-pink-600/10 flex items-center justify-center text-pink-500 hover:bg-pink-600 hover:text-white transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© {currentYear} شركة سلسـبيل للمشروبات. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8 text-slate-500">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
            <a href="#" className="hover:text-white transition-colors">الموزعون</a>
          </div>
        </div>
      </div>
    </footer>
  );
}