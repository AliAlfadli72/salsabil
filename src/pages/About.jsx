import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { FadeUp } from "../utils/LightMotion";
import { motion } from "framer-motion"; // ✅ ADD THIS

export default function About() {
  const values = [
    {
      icon: "mdi:water-circle",
      title: "النقاء",
      desc: "لا تسوية مع جودة المياه والمكوّنات.",
    },
    {
      icon: "mdi:shield-check",
      title: "الموثوقية",
      desc: "منتج موثوق يصل إليك بأعلى معايير السلامة.",
    },
    {
      icon: "mdi:leaf",
      title: "الاستدامة",
      desc: "نحترم بيئتنا ونستثمر في التقنيات الخضراء.",
    },
    {
      icon: "mdi:handshake",
      title: "الشراكة",
      desc: "نبني علاقات طويلة الأمد مع عملائنا وموزعينا.",
    },
    {
      icon: "mdi:lightbulb-on",
      title: "الابتكار",
      desc: "نكهات وصيغ جديدة تولد باستمرار من مختبراتنا.",
    },
    {
      icon: "mdi:heart-pulse",
      title: "الصحة",
      desc: "خيارات صحية في كل تشكيلة تلائم نمط حياتك.",
    },
  ];

  const milestones = [
    {
      year: "التأسيس",
      label: "انطلاق سلسـبيل",
      desc: "بدأت رحلتنا بحلم بسيط: مشروب نقي يعكس طعم سوريا الأصيل.",
    },
    {
      year: "التوسّع",
      label: "توسيع خطوط الإنتاج",
      desc: "أضفنا خطوط إنتاج حديثة ورفعنا الطاقة الإنتاجية بشكل كبير.",
    },
    {
      year: "الجودة",
      label: "مطابقة المعايير الدولية",
      desc: "حصلنا على اعتمادات الجودة وفق المواصفات القياسية السورية والدولية.",
    },
    {
      year: "اليوم",
      label: "رواد في السوق",
      desc: "منتجاتنا تتواجد في مئات نقاط البيع عبر مختلف المحافظات.",
    },
  ];

  return (
    <div className="bg-white font-cairo pt-20" dir="rtl">
      {/* PAGE HERO */}
      <section className="relative py-24 bg-gradient-to-br from-brand-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="inline-flex items-center gap-2 text-brand-600 text-sm font-bold uppercase tracking-widest mb-5">
              <Icon icon="mdi:office-building-outline" fontSize={16} />
              قصة الشركة
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              من نحن
            </h1>
            <p className="text-ar-lg text-slate-500 max-w-2xl mx-auto leading-loose">
              سلسـبيل ليست مجرد علامة تجارية، بل هي قصة شغف وإصرار على تقديم
              الأفضل دائماً في صناعة المشروبات السورية.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
          <FadeUp>
            <div className="aspect-[4/3] rounded-5xl overflow-hidden shadow-brand-lg relative group">
              <img
                src="/bf.webp"
                alt="مصنع سلسبيل"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* subtle bottom brand bar */}
              <div
                className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(1,104,165,0.55), transparent)" }}
              />
              <span className="absolute bottom-5 right-6 text-white font-bold text-sm drop-shadow">
                مصنع سلسـبيل — ريف دمشق
              </span>
            </div>
          </FadeUp>

          <div>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl font-black text-slate-900 mb-6">
                قصة تأسيس <span className="gradient-text">سلسـبيل</span>
              </h2>
              <div className="space-y-4 text-ar-base text-slate-500 leading-loose">
                <p>
                  انطلقت سلسـبيل من حلم جريء في قلب سوريا: تقديم مشروبات ذات
                  جودة عالمية تحمل طابعاً محلياً أصيلاً. بدأنا بخط إنتاج واحد
                  بمعدات حديثة متكاملة، وبفريق مؤمن برسالته.
                </p>
                <p>
                  اليوم، نفخر بأن سلسـبيل تُنتج ملايين العبوات سنوياً، وتغطي
                  شبكتها التوزيعية أغلب المحافظات السورية، حاملةً معها معايير
                  الجودة الحقيقية لكل بيت وكل مناسبة.
                </p>
              </div>
            </FadeUp>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                {
                  icon: "mdi:map-marker-radius",
                  val: "ريف دمشق",
                  label: "مقرنا",
                },
                {
                  icon: "mdi:certificate",
                  val: "معتمد",
                  label: "جودة مُعتمدة",
                },
              ].map((s, i) => (
                <FadeUp key={i} delay={0.2 + i * 0.1}>
                  <div className="bg-brand-50 rounded-3xl p-5 border border-brand-100">
                    <Icon
                      icon={s.icon}
                      fontSize={24}
                      className="text-brand-600 mb-2"
                    />
                    <p className="text-2xl font-black text-slate-900">
                      {s.val}
                    </p>
                    <p className="text-sm text-slate-500">{s.label}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-brand-600 text-sm font-bold uppercase tracking-widest mb-4">
              <Icon icon="mdi:star-circle-outline" fontSize={16} />
              قيمنا
            </span>
            <h2 className="text-4xl font-black text-slate-900">
              ما يُحرّكنا كل يوم
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-4xl p-7 border border-gray-100 shadow-card hover:shadow-brand-sm transition-all"
                >
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-4">
                    <Icon icon={v.icon} fontSize={26} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900">مسيرة النجاح</h2>
            <p className="text-slate-500 mt-3">محطات جوهرية شكّلت هويتنا</p>
          </FadeUp>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center text-white font-black text-xs flex-shrink-0 shadow-brand-sm">
                      {i + 1}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-brand-100 my-2" />
                    )}
                  </div>
                  <div className="pb-10 pt-2">
                    <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs font-black rounded-full mb-2">
                      {m.year}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mb-2">
                      {m.label}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {m.desc}
                    </p>
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
            <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-4">
                هل أنت مهتم بالتعاون معنا؟
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                نرحب بجميع الاستفسارات المتعلقة بالتوزيع والشراكة.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0168a5] rounded-2xl font-black hover:bg-blue-50 transition-colors shadow-md"
              >
                <Icon icon="mdi:phone-in-talk-outline" fontSize={20} />
                تواصل معنا
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
