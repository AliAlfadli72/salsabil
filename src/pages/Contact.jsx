import React from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white text-slate-900" dir="rtl">
      
      {/* 1. MINIMALIST HERO */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            دائماً <span className="text-blue-600">بالقرب منك</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed font-medium">
            سواء كنت مستهلكاً، موزعاً، أو شريكاً مستقبلياً، نحن هنا للاستماع إليك وتقديم الدعم اللازم.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT - SPLIT LAYOUT */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info & Socials */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black mb-8 text-slate-800">معلومات التواصل</h2>
              <div className="space-y-6">
                {[
                  { icon: <Phone />, title: "الخط الساخن", detail: "+963 550 725 933", color: "bg-blue-50 text-blue-600" },
                  { icon: <Mail />, title: "البريد الإلكتروني", detail: "info@salsabil-sy.com", color: "bg-emerald-50 text-emerald-600" },
                  { icon: <MapPin />, title: "المقر الرئيسي", detail: "دممشق، سوريا - المنطقة الصناعية", color: "bg-slate-100 text-slate-600" },
                  { icon: <Clock />, title: "ساعات العمل", detail: "الأحد - الخميس: 9:00 ص - 5:00 م", color: "bg-orange-50 text-orange-600" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-4 rounded-3xl hover:bg-slate-50 transition-colors group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12 ${item.color}`}>
                      {React.cloneElement(item.icon, { size: 24 })}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-400 text-sm uppercase tracking-widest">{item.title}</h4>
                      <p className="text-xl font-black text-slate-800">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Support */}
            <div className="p-8 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageCircle className="text-emerald-400" />
                  الدعم عبر الواتساب
                </h3>
                <p className="text-slate-400 mb-6 text-sm">للحصول على رد سريع بخصوص طلبات التوزيع، تواصل معنا مباشرة.</p>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-2xl font-bold transition-all flex items-center gap-2">
                   بدء المحادثة
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <MessageCircle size={150} />
              </div>
            </div>
          </div>

          {/* Right Side: Modern Form */}
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200 border border-slate-100 relative">
            <h3 className="text-2xl font-black mb-8">أرسل لنا رسالة</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase mr-2 tracking-widest">الاسم</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all" placeholder="الاسم الكامل" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase mr-2 tracking-widest">رقم الهاتف</label>
                  <input type="tel" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all" placeholder="09xx xxx xxx" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase mr-2 tracking-widest">البريد الإلكتروني</label>
                <input type="email" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all" placeholder="name@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase mr-2 tracking-widest">الموضوع</label>
                <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all">
                  <option>استفسار عام</option>
                  <option>طلب توزيع</option>
                  <option>شكوى أو اقتراح</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase mr-2 tracking-widest">الرسالة</label>
                <textarea className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all h-40" placeholder="كيف يمكننا مساعدتك؟"></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white py-5 rounded-[2rem] font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                إرسال الرسالة
                <Send size={20} className="rotate-180" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MAP SECTION */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl h-[500px] bg-slate-100 border-8 border-white">
          {/* Static Map Image Placeholder or Iframe */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold italic">
             سيتم عرض الخريطة التفاعلية هنا لتمثيل موقع المصنع والإدارة
          </div>
          
          {/* Floating Address Card */}
          <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl max-w-sm hidden md:block">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-4">
              <MapPin />
            </div>
            <h4 className="text-xl font-bold mb-2">مقرنا الرئيسي</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              سوريا، ريف دمشق، المدينة الصناعية - القطاع الثالث، شارع سلسبيل.
            </p>
            <button className="mt-4 text-blue-600 font-black text-sm hover:underline">فتح في خرائط جوجل ←</button>
          </div>
        </div>
      </section>

      {/* 4. SOCIAL MEDIA CONNECT */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-10 text-center">تابعنا على منصات التواصل</h2>
          <div className="flex justify-center gap-8">
            <a href="#" className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
              <Facebook size={28} />
            </a>
            <a href="#" className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all">
              <Instagram size={28} />
            </a>
            <a href="#" className="w-16 h-16 bg-white shadow-md rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all">
              <MessageCircle size={28} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}