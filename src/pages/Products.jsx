import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const products = [
  {
    id: 1,
    category: "غازية",
    name: "المشروبات الغازية",
    icon: "mdi:bottle-soda-classic-outline",
    accent: "from-brand-500 to-cyan-400",
    bg: "bg-brand-50",
    tag: "الأكثر طلباً",
    desc: "تشكيلة متنوعة من المشروبات الغازية المنعشة بنكهات متعددة، تناسب كل الأذواق.",
    sizes: ["250 مل", "500 مل", "1 لتر", "1.5 لتر"],
    features: ["خالٍ من الألوان الصناعية", "معبأ بتقنية معقمة", "نكهات متعددة"],
  },
  {
    id: 2,
    category: "عصائر",
    name: "العصائر الطبيعية",
    icon: "mdi:fruit-citrus",
    accent: "from-orange-400 to-amber-400",
    bg: "bg-amber-50",
    tag: "صحي 100%",
    desc: "عصائر طبيعية تحافظ على كامل الفيتامينات والنكهة الأصيلة للفاكهة الطازجة.",
    sizes: ["200 مل", "500 مل", "1 لتر"],
    features: ["100% طبيعي", "بدون مواد حافظة", "غني بفيتامين C"],
  },
  {
    id: 3,
    category: "مياه",
    name: "مياه الشرب المعبأة",
    icon: "mdi:water-outline",
    accent: "from-sky-400 to-brand-400",
    bg: "bg-sky-50",
    tag: "نقاء طبيعي",
    desc: "مياه نقية مُرشّحة عبر مراحل متعددة لضمان أعلى معايير النقاء والسلامة.",
    sizes: ["330 مل", "660 مل", "1.5 لتر", "5 لتر"],
    features: ["نقاء تام", "معادن متوازنة", "خالٍ من الشوائب"],
  },
  {
    id: 4,
    category: "طاقة",
    name: "مشروبات الطاقة",
    icon: "mdi:lightning-bolt",
    accent: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-50",
    tag: "جديد",
    desc: "مزيج متوازن من الفيتامينات والمعادن يمنحك الطاقة والتركيز طوال اليوم.",
    sizes: ["250 مل", "500 مل"],
    features: ["فيتامينات B", "تورين طبيعي", "بدون سكر مضاف"],
  },
  {
    id: 5,
    category: "رياضة",
    name: "مشروبات الرياضة",
    icon: "mdi:run-fast",
    accent: "from-green-400 to-cyan-500",
    bg: "bg-green-50",
    tag: "Sport Line",
    desc: "إلكتروليت وأملاح معدنية لتعويض ما يفقده جسمك خلال التمرين والمجهود البدني.",
    sizes: ["500 مل", "750 مل"],
    features: ["إلكتروليت", "أملاح معدنية", "ترطيب فائق"],
  },
  {
    id: 6,
    category: "خاص",
    name: "إصدارات خاصة",
    icon: "mdi:star-shooting-outline",
    accent: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    tag: "Limited Edition",
    desc: "نكهات موسمية وحصرية تصدر بكميات محدودة للمناسبات والأعياد الخاصة.",
    sizes: ["330 مل", "500 مل"],
    features: ["نكهات موسمية", "تغليف مميز", "كميات محدودة"],
  },
];

const categories = ["الكل", "غازية", "عصائر", "مياه", "طاقة", "رياضة", "خاص"];

export default function Products() {
  const [active, setActive] = useState("الكل");
  const [selected, setSelected] = useState(null);

  const filtered = active === "الكل" ? products : products.filter(p => p.category === active);

  return (
    <div className="bg-white font-cairo pt-20" dir="rtl">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-brand-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="inline-flex items-center gap-2 text-brand-600 text-sm font-bold uppercase tracking-widest mb-5">
              <Icon icon="mdi:package-variant-closed" fontSize={16} />
              كتالوج المنتجات
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">منتجاتنا</h1>
            <p className="text-ar-lg text-slate-500 max-w-xl mx-auto leading-loose">
              تشكيلة متكاملة من المشروبات لكل مناسبة وكل ذوق، بمعايير جودة عالمية.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-8 bg-white sticky top-20 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-2xl font-bold text-sm transition-all ${
                  active === cat
                    ? "bg-brand-600 text-white shadow-brand-sm"
                    : "bg-gray-100 text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            <AnimatePresence>
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => setSelected(p)}
                  className="product-card cursor-pointer group"
                >
                  <div className={`h-52 ${p.bg} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 250 }}>
                      <Icon icon={p.icon} fontSize={90} className="text-slate-300" />
                    </motion.div>
                    <div className="absolute inset-0 flex items-end p-3">
                      <span className="text-xs text-slate-400 bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded-lg">
                        صورة المنتج
                      </span>
                    </div>
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-l ${p.accent} text-white text-xs font-bold`}>
                      {p.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-brand-500 font-bold bg-brand-50 px-2 py-0.5 rounded-full">{p.category}</span>
                    <h3 className="text-xl font-black text-slate-900 mt-2 mb-2">{p.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.sizes.map((s) => (
                        <span key={s} className="text-xs bg-gray-100 text-slate-600 px-2.5 py-1 rounded-xl font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-5xl shadow-2xl p-8 max-w-md w-full z-10"
              dir="rtl"
            >
              <button onClick={() => setSelected(null)} className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                <Icon icon="mdi:close" fontSize={20} />
              </button>

              <div className={`h-48 ${selected.bg} rounded-3xl flex items-center justify-center mb-6`}>
                <Icon icon={selected.icon} fontSize={100} className="text-slate-300" />
              </div>

              <span className="text-xs text-brand-500 font-bold bg-brand-50 px-2 py-0.5 rounded-full">{selected.category}</span>
              <h2 className="text-2xl font-black text-slate-900 mt-2 mb-3">{selected.name}</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{selected.desc}</p>

              <div className="space-y-3 mb-6">
                <p className="font-bold text-slate-700 text-sm">المميزات:</p>
                {selected.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <Icon icon="mdi:check-circle" className="text-brand-500" fontSize={18} />
                    <span className="text-slate-600">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <p className="font-bold text-slate-700 text-sm mb-2">الأحجام المتوفرة:</p>
                <div className="flex flex-wrap gap-2">
                  {selected.sizes.map((s) => (
                    <span key={s} className="px-3 py-1.5 bg-brand-50 text-brand-700 rounded-xl text-sm font-bold border border-brand-100">{s}</span>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setSelected(null)}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-600 text-white rounded-2xl font-bold hover:bg-brand-700 transition-colors"
              >
                <Icon icon="mdi:phone-in-talk-outline" fontSize={20} />
                استفسار عن المنتج
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}