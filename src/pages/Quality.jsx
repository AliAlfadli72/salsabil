import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { FadeUp } from "../utils/LightMotion";

const standards = [
  {
    icon: "mdi:robot-industrial-outline",
    title: "أتمتة الإنتاج الكاملة",
    desc: "خطوط إنتاج أوتوماتيكية بالكامل تُقلّص التدخل البشري وتضمن ثبات الجودة في كل دفعة إنتاجية.",
    stat: "100%",
    statLabel: "أتمتة",
    color: "bg-brand-600 text-white",
  },
  {
    icon: "mdi:microscope",
    title: "مختبر رقابة الجودة",
    desc: "مختبر متطور يُجري اختبارات كيميائية وميكروبيولوجية دقيقة على المياه والمكوّنات والمنتج النهائي.",
    stat: "+20",
    statLabel: "اختبار يومي",
    color: "bg-cyan-600 text-white",
  },
  {
    icon: "mdi:certificate-outline",
    title: "مطابقة المعايير الدولية",
    desc: "كامل مراحل التصنيع تتوافق مع المواصفة السورية القياسية والمعايير الدولية ISO للغذاء والمشروبات.",
    stat: "ISO",
    statLabel: "معتمد دولياً",
    color: "bg-white border border-brand-100 text-[#0168a5]",
  },
  {
    icon: "mdi:water-boiler-auto",
    title: "تعبئة معقمة (Aseptic)",
    desc: "تقنية التعبئة المعقمة تحافظ على الفيتامينات والنكهة الطبيعية دون اللجوء إلى مواد حافظة مصنّعة.",
    stat: "99.99%",
    statLabel: "نقاء ميكروبي",
    color: "bg-white border border-cyan-100 text-cyan-700",
  },
  {
    icon: "mdi:recycle-variant",
    title: "إنتاج صديق للبيئة",
    desc: "نستثمر في تقنيات تُرشّد استهلاك المياه والطاقة وتُقلّص الانبعاثات الكربونية في كافة مراحل الإنتاج.",
    stat: "خضراء",
    statLabel: "تقنياتنا",
    color: "bg-green-50 border border-green-100 text-green-700",
  },
  {
    icon: "mdi:snowflake-check",
    title: "سلسلة التبريد المتكاملة",
    desc: "نضمن الحفاظ على درجات الحرارة المثالية من لحظة الإنتاج حتى وصول المنتج لرفوف المحال التجارية.",
    stat: "24/7",
    statLabel: "مراقبة مستمرة",
    color: "bg-sky-50 border border-sky-100 text-sky-700",
  },
];

const certStats = [
  { icon: "mdi:flask-outline",    val: "+20",   label: "محطة فحص" },
  { icon: "mdi:shield-check",     val: "100%",  label: "فحص شامل" },
  { icon: "mdi:clock-time-eight", val: "24 ساعة",  label: "رقابة يومية" },
  { icon: "mdi:earth",            val: "ISO",    label: "معتمد دولياً" },
];

export default function Quality() {
  return (
    <div className="bg-white font-cairo pt-20" dir="rtl">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-brand-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="inline-flex items-center gap-2 text-brand-600 text-sm font-bold uppercase tracking-widest mb-5">
              <Icon icon="mdi:flask-outline" fontSize={16} />
              الجودة والمعايير
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              نقاء لا يُجامَل
            </h1>
            <p className="text-ar-lg text-slate-500 max-w-xl mx-auto leading-loose">
              في سلسـبيل، الجودة ليست خياراً — بل هي الأساس الذي يقوم عليه كل ما نفعله.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certStats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mx-auto mb-3">
                    <Icon icon={s.icon} fontSize={24} />
                  </div>
                  <p className="text-3xl font-black text-slate-900">{s.val}</p>
                  <p className="text-sm text-slate-500 mt-1">{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* STANDARDS GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">معايير الجودة لدينا</h2>
            <p className="text-slate-500 text-ar-base max-w-xl mx-auto">
              كل خطوة في إنتاجنا مصممة لضمان وصول المنتج إليك بأعلى مستوى من الجودة والسلامة.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((s, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div
                  className="bg-white rounded-4xl p-7 border border-gray-100 shadow-card hover:shadow-brand-sm hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${s.color}`}>
                    <Icon icon={s.icon} fontSize={26} />
                  </div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-black mb-3 ${s.color}`}>
                    {s.stat} {s.statLabel}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS VISUAL */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900">رحلة المنتج</h2>
            <p className="text-slate-500 mt-3">من المواد الخام إلى يديك</p>
          </FadeUp>

          <div className="relative">
            {[
              { icon: "mdi:water-check-outline",       label: "فحص المواد الخام",   desc: "تحليل دقيق لكل مكوّن قبل دخوله خط الإنتاج." },
              { icon: "mdi:robot-industrial-outline",  label: "التصنيع الآلي",       desc: "معالجة وتعبئة بخطوط آلية معقمة." },
              { icon: "mdi:microscope",                label: "مراقبة الجودة",      desc: "اختبارات مخبرية على كل دُفعة إنتاج." },
              { icon: "mdi:package-check-outline",     label: "التغليف والتعبئة",    desc: "تغليف آمن ومستدام يحافظ على المنتج." },
              { icon: "mdi:truck-delivery-outline",    label: "التوزيع المبرّد",     desc: "توصيل في درجات حرارة مثالية ومراقبة مستمرة." },
            ].map((step, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex gap-5 mb-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-brand-sm group-hover:scale-110 transition-transform">
                      <Icon icon={step.icon} fontSize={24} />
                    </div>
                    {i < 4 && <div className="w-0.5 h-8 bg-brand-200 mt-2" />}
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-black text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full">
                      خطوة {i + 1}
                    </span>
                    <h4 className="font-black text-slate-900 mt-1 mb-1">{step.label}</h4>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <FadeUp>
          <div
              className="max-w-4xl mx-auto rounded-5xl p-14 text-center text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #0083cc 0%, #0ca7ed 55%, #22d3ee 100%)" }}
            >
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="relative z-10">
              <Icon icon="mdi:flask-outline" fontSize={56} className="text-white/70 mx-auto mb-4" />
              <h2 className="text-3xl font-black mb-4">تساؤلات حول معايير جودتنا؟</h2>
              <p className="text-blue-100 mb-8">فريقنا مستعد للإجابة على استفساراتكم وتقديم كل الوثائق اللازمة.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0168a5] rounded-2xl font-black hover:bg-blue-50 transition-colors shadow-md">
                <Icon icon="mdi:email-outline" fontSize={20} />
                تواصل مع قسم الجودة
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}