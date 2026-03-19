import React from 'react';
import { MapPin, Handshake, BarChart, Percent, Truck, Store, Globe2, Send } from 'lucide-react';

export default function Distribution() {
  return (
    <div className="bg-white text-slate-900" dir="rtl">
      
      {/* 1. HERO - Partnership Focus */}
      <section className="relative pt-32 pb-24 bg-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-500/30 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold mb-6">
            فرص النمو المشترك
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            لنكبر معاً... <br/>
            <span className="text-emerald-400 font-outline">شبكة توزيع سلسـبيل</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-blue-100 opacity-90 leading-loose">
            نحن نبحث عن شركاء طموحين لمشاركتنا قصة النجاح. نوفر لكم الدعم اللوجستي والتسويقي الكامل لضمان ريادتكم في مناطقكم.
          </p>
        </div>
      </section>

      {/* 2. DISTRIBUTION NETWORK - Visual Cards */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">قنواتنا التوزيعية</h2>
          <p className="text-slate-500">نصل إلى عملائنا من خلال شبكة احترافية متنوعة</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "متاجر التجزئة والسوبر ماركت", desc: "تغطية شاملة لأهم منافذ البيع المباشر للمستهلك.", icon: <Store className="text-blue-600" /> },
            { title: "الموزعون وتجار الجملة", desc: "نظام توريد ضخم يدعم الكميات الكبيرة والطلبات المتكررة.", icon: <Handshake className="text-emerald-500" /> },
            { title: "المنصات التجارية والفنادق", desc: "حلول خاصة لقطاع الضيافة والمطاعم والمنصات الرقمية.", icon: <Globe2 className="text-indigo-500" /> }
          ].map((item, i) => (
            <div key={i} className="group bg-slate-50 p-10 rounded-[3rem] border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PARTNERSHIP BENEFITS - Grid with Visual Accents */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-emerald-400 font-bold mb-4 tracking-widest uppercase italic">لماذا سلسـبيل؟</h2>
            <h3 className="text-4xl font-black">مزايا حصرية لشركاء النجاح</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "جودة مضمونة", sub: "منتجات حائزة على شهادات الجودة العالمية.", icon: <BarChart /> },
              { label: "دعم تسويقي", sub: "مواد دعائية وحملات ترويجية لزيادة مبيعاتك.", icon: <MapPin /> },
              { label: "هوامش ربح مجزية", sub: "أسعار تنافسية تضمن لك أفضل عائد استثماري.", icon: <Percent /> },
              { label: "لوجستيات ذكية", sub: "أسطول توزيع يضمن وصول الشحنات في موعدها.", icon: <Truck /> }
            ].map((benefit, i) => (
              <div key={i} className="text-center p-6 space-y-4">
                <div className="mx-auto w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-emerald-400">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold">{benefit.label}</h4>
                <p className="text-slate-400 text-sm">{benefit.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARTNERSHIP FORM - Modern Inquiry UI */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl font-black text-slate-900">ابدأ شراكتك <br/><span className="text-blue-600">اليوم</span></h2>
            <p className="text-slate-500 leading-loose">
              قم بتعبئة النموذج، وسيقوم فريق تطوير الأعمال لدينا بمراجعة طلبكم والتواصل معكم خلال 48 ساعة لمناقشة آفاق التعاون.
            </p>
            <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex items-center gap-4">
               <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <Handshake />
               </div>
               <div>
                  <p className="font-bold text-blue-900">قسم علاقات الموزعين</p>
                  <p className="text-blue-600 text-sm">distro@salsabil-sy.com</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 mr-2">الاسم بالكامل</label>
                  <input type="text" className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all" placeholder="مثلاً: محمد الأحمد" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 mr-2">اسم المؤسسة</label>
                  <input type="text" className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all" placeholder="شركة التجارة العامة" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 mr-2">البريد الإلكتروني</label>
                <input type="email" className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all" placeholder="email@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 mr-2">المنطقة الجغرافية</label>
                <select className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all appearance-none">
                  <option>دمشق وريفها</option>
                  <option>حلب</option>
                  <option>حمص</option>
                  <option>اللاذقية / طرطوس</option>
                  <option>محافظات أخرى</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 mr-2">رسالتكم</label>
                <textarea className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-blue-600 transition-all h-32" placeholder="أخبرنا عن نشاطك التجاري واهتماماتك..."></textarea>
              </div>

              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95">
                إرسال طلب الشراكة
                <Send size={20} className="rotate-180" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. CTA - Global Expansion Vision */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-6">هل أنت مهتم بالتوزيع الدولي؟</h2>
          <p className="text-slate-500 mb-10 leading-relaxed">
            سلسبيل تتوسع خارج الحدود. إذا كنت مهتماً بتمثيل علامتنا التجارية في الأسواق الدولية، يسعدنا التحدث معك حول فرص التصدير والوكالات الحصرية.
          </p>
          <button className="px-10 py-4 border-2 border-slate-900 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all">
            فتح قناة تواصل دولية
          </button>
        </div>
      </section>

    </div>
  );
}