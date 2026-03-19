import { useState } from "react";
import { ShoppingCart, Info, Droplets, Wind, Sparkles } from "lucide-react";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("drinks");

  const products = {
    drinks: [
      { name: "كولا كلاسيك", size: "330ml", desc: "انفجار من الفقاعات الكلاسيكية والمنعشة.", tag: "الأكثر مبيعاً", color: "from-red-500 to-red-700" },
      { name: "ليمون لايم", size: "330ml", desc: "مزيج حمضي منعش يمنحك طاقة فورية.", tag: "جديد", color: "from-lime-400 to-emerald-600" },
      { name: "برتقال فوار", size: "330ml", desc: "طعم البرتقال الغني بلمسة غازية ممتعة.", tag: "منعش", color: "from-orange-400 to-orange-600" },
    ],
    juices: [
      { name: "عصير برتقال", size: "250ml", desc: "عصرة طبيعية 100% غنية بفيتامين سي.", tag: "طبيعي", color: "from-orange-300 to-yellow-500" },
      { name: "عصير تفاح", size: "250ml", desc: "نقاء التفاح الأخضر في كل رشفة.", tag: "بدون سكر", color: "from-green-400 to-emerald-500" },
      { name: "عصير مانجا", size: "250ml", desc: "قوام كثيف وطعم استوائي لا يقاوم.", tag: "فاخر", color: "from-yellow-400 to-orange-500" },
    ],
  };

  return (
    <div className="bg-white min-h-screen" dir="rtl">
      
      {/* 1. PRODUCT HERO - Fluid Design */}
      <section className="relative pt-32 pb-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            عالم من <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-emerald-400">النكهات</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
            من قلب الطبيعة السورية إلى مائدتكم، نقدم تشكيلة مختارة بعناية لتناسب كل لحظاتكم الجميلة.
          </p>
        </div>
      </section>

      {/* 2. NAVIGATION & FILTERING */}
      <section className="relative z-20 -mt-10 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex p-2 bg-white shadow-2xl rounded-[2.5rem] border border-slate-100">
          <button
            onClick={() => setActiveCategory("drinks")}
            className={`flex items-center gap-2 px-8 py-4 rounded-[2rem] font-bold text-lg transition-all duration-300 ${
              activeCategory === "drinks"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                : "bg-transparent text-slate-500 hover:text-blue-600"
            }`}
          >
            <Sparkles size={20} />
            مشروبات غازية
          </button>

          <button
            onClick={() => setActiveCategory("juices")}
            className={`flex items-center gap-2 px-8 py-4 rounded-[2rem] font-bold text-lg transition-all duration-300 ${
              activeCategory === "juices"
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200 scale-105"
                : "bg-transparent text-slate-500 hover:text-emerald-600"
            }`}
          >
            <Droplets size={20} />
            عصائر طبيعية
          </button>
        </div>
      </section>

      {/* 3. DYNAMIC PRODUCTS GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {products[activeCategory].map((product, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[3rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Product Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  {product.tag}
                </span>
              </div>

              {/* IMAGE AREA - With Floating Effect */}
              <div className="relative h-72 mb-8 flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-5 rounded-[2rem] group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Visual Placeholder for a Bottle */}
                <div className="w-24 h-56 bg-slate-200 rounded-2xl relative shadow-lg group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                   <div className={`absolute bottom-0 w-full h-1/2 bg-gradient-to-t ${product.color} opacity-40 animate-pulse`}></div>
                </div>
                
                {/* Decorative bubbles or leaf icons */}
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-[-20px]">
                  {activeCategory === 'drinks' ? <Wind className="text-blue-400" /> : <Droplets className="text-emerald-400" />}
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="text-center relative z-10">
                <div className="flex items-center justify-center gap-2 mb-2">
                   <span className="text-slate-400 text-sm font-bold uppercase">{product.size}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{product.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 px-4">
                  {product.desc}
                </p>

                {/* ACTION BUTTONS */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors active:scale-95">
                    <ShoppingCart size={18} />
                    طلب سريع
                  </button>
                  <button className="p-4 bg-slate-100 text-slate-600 rounded-2xl hover:bg-slate-200 transition-colors">
                    <Info size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHOLESALE / DISTRIBUTION CTA */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">هل أنت تاجر أو صاحب مطعم؟</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto opacity-80 font-medium">
              نقدم أسعاراً خاصة وشروط توزيع ميسرة لشركاء النجاح. انضم إلى شبكة موزعي سلسـبيل المعتمدين في كافة المحافظات.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-700 px-10 py-5 rounded-[2rem] font-black text-lg hover:scale-105 transition-all shadow-xl shadow-blue-950/20">
                طلب قائمة الأسعار بالجملة
              </button>
              <button className="bg-blue-800/50 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-blue-800/80 transition-all">
                تحدث مع المبيعات
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}