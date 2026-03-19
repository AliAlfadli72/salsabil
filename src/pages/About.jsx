import React from 'react';
import { Target, Lightbulb, ShieldCheck, Leaf, Award, Users, BarChart3, ChevronLeft } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden" dir="rtl">
      
      {/* 1. MINIMALIST HERO */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-20">
            {/* Subtle Grid Pattern or Abstract Water Bubbles */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <nav className="flex justify-center gap-2 text-blue-400 text-sm mb-6 font-bold uppercase tracking-widest">
            <a href="/">الرئيسية</a>
            <span>/</span>
            <span className="text-white">من نحن</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-black mb-8">
            نروي حكاية <span className="text-blue-500">الجودة</span> منذ البداية
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-300 leading-relaxed">
            تعرف على رحلة "سلسـبيل" في صياغة مفهوم جديد للانتعاش في الأسواق السورية والإقليمية.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY - Dynamic Layout */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
              <div className="bg-slate-200 aspect-[4/5] flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform duration-700">
                {/* Place a high-quality photo of the first bottle or factory entrance */}
                صورة أرشيفية أو صورة للمصنع
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-xl hidden md:block">
              <p className="text-4xl font-black">2026</p>
              <p className="text-sm opacity-80 uppercase">نواصل الإبداع</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-blue-600 font-bold mb-2">قصة النجاح</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-6">من فكرة طموحة إلى واقع يروي الملايين</h3>
              <p className="text-gray-600 text-lg leading-loose">
                منذ اللحظة الأولى لتأسيس <strong>سلسـبيل</strong>، لم يكن هدفنا مجرد إنتاج مشروبات غازية، 
                بل كان التحدي هو ابتكار مذاق يجمع بين التكنولوجيا العالمية والنكهة الأصيلة التي يفضلها المستهلك السوري.
              </p>
              <p className="text-gray-600 text-lg leading-loose mt-4">
                لقد استثمرنا في أرقى خطوط الإنتاج الألمانية والإيطالية، لنضمن أن كل عبوة تخرج من مصانعنا 
                تحمل معها وعداً بالسلامة، النقاء، والطعم المميز.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 border-r-4 border-blue-600 bg-blue-50">
                <p className="text-3xl font-black text-blue-600 tracking-tighter">+50</p>
                <p className="text-slate-700 font-bold">نقطة توزيع</p>
              </div>
              <div className="p-4 border-r-4 border-emerald-500 bg-emerald-50">
                <p className="text-3xl font-black text-emerald-600 tracking-tighter">100%</p>
                <p className="text-slate-700 font-bold">جودة طبيعية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION - Modern Contrast */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="group bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">رؤيتنا المستقبليّة</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                أن تصبح "سلسـبيل" الخيار الأول والاسم الأكثر ثقة في قطاع المشروبات على مستوى الشرق الأوسط، 
                عبر التوسع الذكي والابتكار المستمر في النكهات الصحية.
              </p>
            </div>

            {/* Mission */}
            <div className="group bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">رسالتنا</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                الالتزام بتقديم منتجات عالية الجودة بأسعار عادلة، مع الحفاظ على معايير الاستدامة البيئية 
                ودعم المجتمع المحلي من خلال خلق فرص عمل وتطوير الكفاءات الوطنية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VALUES - Icon Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-blue-600 font-bold mb-4 uppercase tracking-[0.3em]">مبادئنا</h2>
        <h3 className="text-4xl font-black mb-16">القيم التي تحركنا كل يوم</h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "الجودة الفائقة", icon: <Award className="text-blue-600" />, desc: "لا نساوم أبداً على المعايير الصحية." },
            { name: "الابتكار الدائم", icon: <Lightbulb className="text-orange-500" />, desc: "نبحث دائماً عن نكهات تسبق التوقعات." },
            { name: "الثقة المتبادلة", icon: <Users className="text-indigo-600" />, desc: "علاقتنا مع العميل والموزع هي رأس مالنا." },
            { name: "الاستدامة", icon: <Leaf className="text-emerald-500" />, desc: "نهتم بالأرض بقدر ما نهتم بمنتجاتنا." },
          ].map((value, i) => (
            <div key={i} className="flex flex-col items-center p-8 rounded-[2rem] hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="mb-6 p-5 bg-slate-50 rounded-full group-hover:bg-white transition-colors">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{value.name}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MARKET POSITION - Impact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <h2 className="text-4xl font-black text-white mb-6">مكانتنا في السوق المحلي</h2>
              <p className="text-blue-100 text-xl leading-relaxed opacity-90">
                بفضل شبكة توزيع تغطي 14 محافظة سورية، نجحت سلسـبيل في بناء حضور قوي 
                يجعل منتجاتنا في متناول يد الجميع، من المدن الكبرى وصولاً إلى الأرياف.
              </p>
              <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all shadow-xl">
                تعرف على شركاء التوزيع <ChevronLeft size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center">
                  <p className="text-4xl font-black text-white mb-2 tracking-tighter">14+</p>
                  <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">محافظة</p>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-center">
                  <p className="text-4xl font-black text-white mb-2 tracking-tighter">24/7</p>
                  <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">عمليات إنتاج</p>
               </div>
               <div className="bg-emerald-400/20 backdrop-blur-md p-8 rounded-3xl border border-emerald-400/20 text-center col-span-2">
                  <BarChart3 className="mx-auto text-emerald-400 mb-4" size={32}/>
                  <p className="text-white font-bold">نمو مستمر في الحصة السوقية سنوياً</p>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}