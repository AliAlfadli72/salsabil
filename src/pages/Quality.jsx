import React from 'react';
import { ShieldCheck, Thermometer, Cpu, Truck, FlaskConical, ClipboardCheck, Factory } from 'lucide-react';

export default function Quality() {
  const steps = [
    { title: "اختيار المكونات", desc: "فرز دقيق لأجود الفواكه والمواد الأولية من مصادر معتمدة.", icon: <FlaskConical /> },
    { title: "المعالجة والتصنيع", desc: "استخدام أنظمة خلط وبسترة أوتوماتيكية بالكامل دون لمس بشري.", icon: <Cpu /> },
    { title: "التعبئة والتغليف", desc: "تعبئة معقمة في عبوات صديقة للبيئة ومحكمة الإغلاق.", icon: <Factory /> },
    { title: "التوزيع الذكي", desc: "نقل مبرد وسريع لضمان وصول الطعم الطازج إليكم.", icon: <Truck /> }
  ];

  return (
    <div className="bg-white text-slate-900" dir="rtl">
      
      {/* 1. HERO - Clinical & Trustworthy */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6 border border-blue-100">
            <ShieldCheck size={16} />
            معايير الجودة العالمية ISO 
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            الجودة ليست مجرد شعار، <br/>
            <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">بل هي بصمتنا.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-500 leading-loose">
            في سلسبيل، نطبق بروتوكولات صارمة تبدأ من قطرة الماء وتستمر حتى وصول المنتج ليد المستهلك، 
            لضمان تجربة آمنة ومنعشة في كل رشفة.
          </p>
        </div>
      </section>

      {/* 2. PRODUCTION TIMELINE - Interactive Stepper */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-center mb-20 text-slate-800">رحلة الإنتاج داخل مصانعنا</h2>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-3xl flex items-center justify-center text-blue-600 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 mb-6">
                  {React.cloneElement(step.icon, { size: 32 })}
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm group-hover:shadow-xl transition-shadow">
                  <span className="text-blue-600 font-black text-xs uppercase tracking-widest block mb-2">المرحلة {i + 1}</span>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUALITY STANDARDS - Data Cards */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-blue-400 font-bold mb-4 uppercase tracking-widest">التزامنا</h2>
              <h3 className="text-4xl font-black mb-6">لماذا نثق بجودة سلسبيل؟</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                نحن لا نكتفي بالفحص العشوائي، بل نمتلك مختبرات داخلية تعمل على مدار الساعة لتحليل 
                كل دفعة إنتاج قبل خروجها من المصنع.
              </p>
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-emerald-400"><Thermometer size={24}/></div>
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {[
                { title: "رقابة مخبرية دقيقة", text: "فحص كيميائي وجرثومي لكل ساعة إنتاج لضمان خلوها من الملوثات." },
                { title: "مواد أولية معتمدة", text: "نتعامل مع أفضل الموردين العالميين للسكر الطبيعي والمنكهات." },
                { title: "تكنولوجيا الأوزون", text: "استخدام غاز الأوزون والأشعة فوق البنفسجية لتعقيم المياه المستخدمة." },
                { title: "تحسين مستمر", text: "تدريبات دورية لفريق العمل لمواكبة أحدث اشتراطات سلامة الغذاء." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 transition-colors">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                    <ClipboardCheck size={20} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNOLOGY SECTION - Visual Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-6">استثمارنا في التكنولوجيا</h2>
          <p className="max-w-2xl mx-auto text-gray-500">نمتلك أحدث خطوط الإنتاج من كبرى الشركات العالمية لضمان الدقة والسرعة.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group relative h-80 bg-slate-100 rounded-[3rem] overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="absolute bottom-8 right-8 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <p className="text-white font-black text-xl">خط تعبئة أوتوماتيكي</p>
                  <p className="text-blue-300 text-sm">بتقنية CIP للتنظيف الذاتي</p>
               </div>
               {/* Replace with actual machinery photo */}
               <div className="w-full h-full flex items-center justify-center text-slate-300 italic">
                  صورة حقيقية للمكينات المتطورة
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA - Final Trust Builder */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[4rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_30%_20%,_white_0%,_transparent_50%)]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
              نحن نلتزم بالمعايير، <br/> لتقدموا أنتم الأفضل لزبائنكم.
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
               <button className="bg-white text-blue-700 px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-slate-100 transition-all shadow-xl">
                 تصفح المنتجات المعتمدة
               </button>
               <button className="bg-blue-700 border border-white/20 text-white px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-blue-800 transition-all">
                 طلب شهادات الجودة
               </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}