import React from 'react';
import { ChevronLeft, Droplets, ShieldCheck, Zap, Globe, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900" dir="rtl">
      
      {/* HERO SECTION - Dynamic & Fresh */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-500 text-white pt-32 pb-24 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-white/30">
            تأسست لتروي عطشكم بالجودة
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
            سلسـبيل... <br/>
            <span className="text-emerald-200">طعم الجودة والانتعاش</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-blue-50 mb-10 leading-relaxed opacity-90">
            نحن لا نصنع مجرد مشروبات، بل نبتكر تجربة من الانتعاش الطبيعي في قلب سوريا، 
            بأعلى المعايير العالمية.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-2">
              استكشف منتجاتنا <ChevronLeft size={20}/>
            </button>
            <button className="bg-blue-800/40 backdrop-blur-md border border-white/40 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-800/60 transition-all">
              اطلب الآن
            </button>
          </div>
        </div>
      </section>

      {/* STATS / FEATURES - Modern Grid */}
      <section className="-mt-12 relative z-10 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "نكهة مميزة", icon: <Zap className="text-yellow-400" /> },
            { label: "جودة مضمونة", icon: <ShieldCheck className="text-emerald-400" /> },
            { label: "مكونات طبيعية", icon: <Droplets className="text-blue-400" /> },
            { label: "انتشار واسع", icon: <Globe className="text-indigo-400" /> },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-xl shadow-blue-900/5 flex flex-col items-center text-center border border-gray-50">
              <div className="mb-3 p-3 bg-gray-50 rounded-2xl">{item.icon}</div>
              <span className="font-bold text-gray-800">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION - Storytelling style */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3 italic">قصة النجاح</h2>
          <h3 className="text-4xl font-extrabold mb-6 leading-snug text-slate-800">
            أكثر من مجرد شركة، <br/> نحن شريك لحظاتكم السعيدة.
          </h3>
          <p className="text-gray-600 text-lg leading-loose mb-8">
            في مصانع سلسـبيل، ندمج بين التكنولوجيا الحديثة وشغف الابتكار. نلتزم بتقديم مشروبات تعكس 
            أصالة المذاق السوري مع مواكبة التطور العالمي في صناعة الأغذية والمشروبات.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-700 font-medium">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</div>
              أحدث خطوط الإنتاج الأوتوماتيكية بالكامل.
            </div>
            <div className="flex items-center gap-4 text-slate-700 font-medium">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">✓</div>
              رقابة صارمة على الجودة ومعايير السلامة الصحية.
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
             {/* Replace with actual high-quality image of the factory or a refreshing drink */}
             <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center text-gray-400">صورة المصنع / المنتج</div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
            <p className="text-3xl font-bold italic">+20</p>
            <p className="text-sm opacity-80 uppercase tracking-tighter">عاماً من الخبرة</p>
          </div>
        </div>
      </section>
      {/* INDUSTRIAL EXCELLENCE SECTION */}
<section className="py-24 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Text Content */}
      <div className="order-2 lg:order-1">
        <h2 className="text-emerald-600 font-bold mb-4 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-emerald-600"></span>
          التميز الصناعي
        </h2>
        <h3 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
          تكنولوجيا متطورة تضمن <br/> <span className="text-blue-600">نقاء كل قطرة</span>
        </h3>
        
        <div className="space-y-8">
          {[
            { 
              title: "خطوط إنتاج ذكية", 
              desc: "نعتمد على أنظمة أتمتة كاملة تقلل التدخل البشري لضمان أعلى مستويات التعقيم.",
              icon: "⚙️" 
            },
            { 
              title: "معايير ISO العالمية", 
              desc: "كافة مراحل التصنيع تخضع لرقابة صارمة تطابق المواصفات القياسية السورية والدولية.",
              icon: "📜" 
            },
            { 
              title: "استدامة البيئة", 
              desc: "نستثمر في تقنيات صديقة للبيئة لتقليل الانبعاثات وترشيد استهلاك المياه في التصنيع.",
              icon: "🌿" 
            }
          ].map((feature, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:rotate-12 transition-all duration-300">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">{feature.title}</h4>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Component */}
      <div className="order-1 lg:order-2 relative">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="h-64 bg-slate-100 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
               <div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-200 animate-pulse"></div>
            </div>
            <div className="h-40 bg-emerald-500 rounded-[2rem] flex items-center justify-center p-6 text-white text-center shadow-lg">
               <p className="font-bold">فحص جودة مخبري يومي</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-40 bg-blue-600 rounded-[2rem] flex items-center justify-center p-6 text-white text-center shadow-lg">
               <p className="font-bold">قدرة إنتاجية تصل لمليون عبوة</p>
            </div>
            <div className="h-64 bg-slate-100 rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
               <div className="w-full h-full bg-gradient-to-b from-emerald-100 to-emerald-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* PRODUCTS PREVIEW - Card Focus */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4">تشكيلة منتجاتنا</h2>
              <p className="text-gray-500 text-lg">نقدم باقة متنوعة من المشروبات التي تلبي كافة الأذواق والمناسبات.</p>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              مشاهدة الكتالوج الكامل <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "مشروبات غازية", desc: "انفجار من الفقاعات والنكهات المنعشة.", color: "from-blue-500 to-indigo-600" },
              { title: "عصائر طبيعية", desc: "خلاصة الفاكهة الطازجة في كل رشفة.", color: "from-orange-400 to-red-500" },
              { title: "نكهات مميزة", desc: "إصدارات خاصة ومبتكرة حصرياً من سلسبيل.", color: "from-emerald-400 to-teal-600" }
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden relative">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-700`}></div>
                <div className="h-64 bg-gray-50 rounded-3xl mb-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                   <span className="text-gray-300 font-medium">صورة المنتج</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{item.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{item.desc}</p>
                <button className="w-full py-3 rounded-xl border border-gray-200 font-semibold group-hover:bg-slate-900 group-hover:text-white transition-colors"> التفاصيل </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS - Subtle & Professional */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-gray-400 font-medium mb-12 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gray-200"></span>
          نعتز بثقتهم بنا
          <span className="h-px w-12 bg-gray-200"></span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-center">
              <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
            </div>
          ))}
        </div>
      </section>
      {/* FAQ & SUPPORT SECTION */}
<section className="py-24 bg-slate-50">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">الأسئلة الشائعة</h2>
      <p className="text-gray-500">كل ما تحتاج معرفته عن منتجاتنا وطرق التوزيع</p>
    </div>

    <div className="space-y-4">
      {[
        { 
          q: "كيف يمكنني أن أصبح موزعاً معتمداً لمنتجات سلسبيل؟", 
          a: "يمكنك التقدم بطلب عبر صفحة 'تواصل معنا' أو الاتصال مباشرة بقسم المبيعات لتزويدنا ببيانات منشأتك التجارية وموقعك الجغرافي." 
        },
        { 
          q: "هل تتوفر منتجات سلسبيل في جميع المحافظات السورية؟", 
          a: "نعم، نمتلك أسطول نقل حديث يغطي كافة المناطق لضمان وصول المنتجات طازجة وبشكل دوري لجميع منافذ البيع." 
        },
        { 
          q: "ما هي معايير السلامة المتبعة في تعبئة العصائر الطبيعية؟", 
          a: "نستخدم تقنية التعبئة المعقمة (Aseptic Filling) التي تحافظ على الفيتامينات والطعم الطبيعي دون الحاجة للمواد الحافظة القوية." 
        }
      ].map((item, i) => (
        <details key={i} className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-lg text-slate-800">
            {item.q}
            <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-open:rotate-180 transition-transform">
              ↓
            </span>
          </summary>
          <div className="mt-4 pt-4 border-t border-gray-50 text-gray-600 leading-loose">
            {item.a}
          </div>
        </details>
      ))}
    </div>
    
    <div className="mt-12 p-8 bg-blue-600/5 rounded-[2rem] border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-right">
        <p className="font-bold text-slate-800">لديك سؤال آخر؟</p>
        <p className="text-gray-500 text-sm">فريق الدعم الفني جاهز للرد عليك خلال 24 ساعة.</p>
      </div>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors">
        تحدث معنا الآن
      </button>
    </div>
  </div>
</section>

      {/* CTA - Action Focused */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              هل أنت مستعد لتكون جزءاً من نجاحنا؟
            </h2>
            <p className="text-blue-200/70 text-lg mb-10 max-w-2xl mx-auto">
              نحن نرحب دائماً بالموزعين والشركاء الجدد لتوسيع نطاق الانتعاش في جميع أنحاء المنطقة.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-emerald-900/20 transition-all flex items-center gap-2">
                <MessageCircle size={20}/> تواصل مع الإدارة التجاريّة
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}