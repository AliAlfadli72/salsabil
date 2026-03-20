import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { FadeUp } from "../utils/LightMotion";

const regions = [
  { icon: "mdi:map-marker",  name: "محافظة دمشق",       icon2: "mdi:check-circle", status: "active" },
  { icon: "mdi:map-marker",  name: "ريف دمشق",           icon2: "mdi:check-circle", status: "active" },
  { icon: "mdi:map-marker",  name: "محافظة حمص",         icon2: "mdi:check-circle", status: "active" },
  { icon: "mdi:map-marker",  name: "محافظة حلب",         icon2: "mdi:check-circle", status: "active" },
  { icon: "mdi:map-marker",  name: "محافظة اللاذقية",    icon2: "mdi:check-circle", status: "active" },
  { icon: "mdi:map-marker",  name: "محافظة حماة",        icon2: "mdi:check-circle", status: "active" },
  { icon: "mdi:map-marker",  name: "محافظة طرطوس",       icon2: "mdi:check-circle", status: "active" },
];

const partnerSteps = [
  { icon: "mdi:email-fast-outline",   title: "تقديم الطلب",    desc: "تواصل معنا عبر نموذج التواصل أو البريد الإلكتروني وزوّدنا ببيانات منشأتك." },
  { icon: "mdi:headset",              title: "التواصل المبدئي", desc: "يتواصل معك مندوبنا خلال 24 ساعة لمناقشة التفاصيل وتحديد اتفاقية التعاون." },
  { icon: "mdi:file-sign",            title: "التعاقد",        desc: "نُعدّ عقداً واضحاً وشفافاً يحدد الحقوق والمسؤوليات لكلا الطرفين." },
  { icon: "mdi:truck-delivery-outline", title: "بدء الإمدادات", desc: "انطلق في توزيع منتجات سلسـبيل مع دعم تسويقي مستمر من فريقنا." },
];

const benefits = [
  { icon: "mdi:chart-line",              title: "هامش ربح تنافسي",    desc: "أسعار جملة تُتيح لك هامش ربح مجزياً في كل عملية بيع." },
  { icon: "mdi:handshake",              title: "دعم تسويقي",         desc: "مواد تسويقية وعروض ترويجية تساعدك على تحقيق مبيعات أعلى." },
  { icon: "mdi:truck-fast-outline",     title: "توصيل منتظم",        desc: "جداول توصيل مرنة ومنتظمة لضمان عدم نفاد المخزون." },
  { icon: "mdi:account-tie-outline",    title: "مندوب مخصص",         desc: "مندوب مبيعات متاح لمساعدتك وتلبية احتياجاتك الميدانية." },
];

export default function Distribution() {
  return (
    <div className="bg-white font-cairo pt-20" dir="rtl">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-brand-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="inline-flex items-center gap-2 text-brand-600 text-sm font-bold uppercase tracking-widest mb-5">
              <Icon icon="mdi:truck-delivery-outline" fontSize={16} />
              شبكة التوزيع
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              معاً نصل <span className="gradient-text">أبعد</span>
            </h1>
            <p className="text-ar-lg text-slate-500 max-w-xl mx-auto leading-loose">
              انضم إلى شبكة موزعينا المعتمدين وكن شريكاً في
              نقل تجربة الانتعاش لكل بيت وكل مناسبة.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Link to="/contact" className="btn-primary">
                <Icon icon="mdi:handshake-outline" fontSize={20} />
                طلب التوزيع الآن
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "mdi:store-outline",          val: "+500", label: "نقطة بيع" },
              { icon: "mdi:map-marker-radius",      val: "7",    label: "محافظات" },
              { icon: "mdi:account-group-outline",  val: "+30",  label: "موزع معتمد" },
              { icon: "mdi:timer-sand",             val: "24 ساعة", label: "توصيل سريع" },
            ].map((s, i) => (
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

      {/* MAP PLACEHOLDER + REGIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">

          {/* Map Visual */}
          <FadeUp>
            <div className="relative rounded-5xl overflow-hidden border border-brand-100 shadow-brand-lg bg-gradient-to-br from-brand-50 to-cyan-50 min-h-80 flex items-center justify-center">
              <div className="absolute inset-0 bg-dots opacity-60" />
              {/* Decorative pulsing location dots */}
              {[
                { top: "25%", right: "32%" }, { top: "38%", right: "58%" },
                { top: "55%", right: "22%" }, { top: "30%", right: "72%" },
                { top: "65%", right: "50%" }, { top: "18%", right: "48%" },
                { top: "72%", right: "35%" },
              ].map((pos, i) => (
                <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-brand-500 border-2 border-white shadow-brand-sm animate-pulse"
                    style={{ top: pos.top, right: pos.right, animationDelay: `${i * 0.4}s` }}
                  />
              ))}
              <div className="relative z-10 text-center py-20">
                <Icon icon="mdi:map-outline" fontSize={90} className="text-brand-300 mx-auto mb-4" />
                <p className="text-brand-600 font-bold">شبكة التوزيع — سوريا</p>
                <p className="text-slate-400 text-sm">خريطة تفاعلية قريباً</p>
              </div>
            </div>
          </FadeUp>

          {/* Regions List */}
          <div>
            <FadeUp>
              <h2 className="text-3xl font-black text-slate-900 mb-8">
                المحافظات <span className="gradient-text">المُغطاة</span>
              </h2>
            </FadeUp>
            <div className="space-y-3">
              {regions.map((r, i) => (
                <FadeUp key={i} delay={i * 0.07}>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-brand-sm hover:border-brand-100 transition-all">
                    <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 flex-shrink-0">
                      <Icon icon={r.icon} fontSize={20} />
                    </div>
                    <span className="font-bold text-slate-800 flex-1">{r.name}</span>
                    <Icon icon={r.icon2} className="text-green-500" fontSize={20} />
                  </div>
                </FadeUp>
              ))}
              <FadeUp delay={0.5}>
                <div className="p-4 bg-brand-50 rounded-3xl border border-brand-100 text-center">
                  <p className="text-brand-600 font-bold text-sm">
                    + باقي المحافظات قيد التوسع
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP STEPS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">
              كيف تصبح موزعاً معتمداً؟
            </h2>
            <p className="text-slate-500">أربع خطوات بسيطة تبدأ منها رحلة النجاح المشترك</p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-6">
            {partnerSteps.map((step, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-white rounded-4xl p-7 border border-gray-100 shadow-card hover:shadow-brand-sm transition-all flex gap-5">
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-brand-sm">
                      <Icon icon={step.icon} fontSize={24} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-brand-600 rounded-full flex items-center justify-center text-brand-600 text-xs font-black">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-3">
              لماذا تُوزّع <span className="gradient-text">سلسـبيل</span>؟
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="bg-white rounded-4xl p-7 border border-gray-100 shadow-card hover:shadow-brand-sm hover:-translate-y-1.5 text-center transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mx-auto mb-5">
                    <Icon icon={b.icon} fontSize={26} />
                  </div>
                  <h4 className="font-black text-slate-900 mb-3">{b.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
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
              <Icon icon="mdi:handshake" fontSize={56} className="text-white/70 mx-auto mb-4" />
              <h2 className="text-3xl font-black mb-4">مستعد للانطلاق معنا؟</h2>
              <p className="text-blue-100 mb-8 leading-relaxed max-w-lg mx-auto">
                تواصل معنا الآن وسيرد عليك فريق المبيعات خلال 24 ساعة.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#0168a5] rounded-2xl font-black hover:bg-blue-50 transition-colors shadow-xl">
                <Icon icon="mdi:phone-in-talk-outline" fontSize={22} />
                تقديم طلب التوزيع
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}