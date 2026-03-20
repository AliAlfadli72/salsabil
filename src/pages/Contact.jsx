import { useState } from "react";
import { Icon } from "@iconify/react";
import { FadeUp } from "../utils/LightMotion";

const contactInfo = [
  { icon: "mdi:phone-in-talk-outline", label: "هاتف المبيعات", value: "+963 550 725 933", href: "tel:+963550725933", dir: "ltr" },
  { icon: "mdi:email-fast-outline",    label: "البريد الإلكتروني", value: "info@salsabil-sy.com", href: "mailto:info@salsabil-sy.com", dir: "ltr" },
  { icon: "mdi:map-marker-outline",    label: "الموقع",          value: "صبّورة، يفور، ريف دمشق، سوريا", href: "#", dir: "rtl" },
  { icon: "mdi:clock-outline",         label: "ساعات العمل",     value: "الأحد–الخميس: 8 ص– 5 م", href: "#", dir: "rtl" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSent(true);
  };

  return (
    <div className="bg-white font-cairo pt-20" dir="rtl">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-brand-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="inline-flex items-center gap-2 text-brand-600 text-sm font-bold uppercase tracking-widest mb-5">
              <Icon icon="mdi:phone-in-talk-outline" fontSize={16} />
              التواصل معنا
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
              نُسعد بتواصلكم
            </h1>
            <p className="text-ar-lg text-slate-500 max-w-xl mx-auto leading-loose">
              سواء كنت موزعاً محتملاً أو عميلاً أو شريكاً — نحن هنا للإجابة على كل استفساراتكم.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-14">

          {/* CONTACT INFO */}
          <div className="lg:col-span-2 space-y-5">
            <FadeUp>
              <h2 className="text-2xl font-black text-slate-900 mb-8">معلومات التواصل</h2>
            </FadeUp>
            {contactInfo.map((info, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <a
                  href={info.href}
                  className="flex items-start gap-4 p-5 bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-brand-sm hover:border-brand-100 transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-all">
                    <Icon icon={info.icon} fontSize={22} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">{info.label}</p>
                    <p className="font-bold text-slate-900 text-sm" dir={info.dir}>{info.value}</p>
                  </div>
                </a>
              </FadeUp>
            ))}

            {/* Social media */}
            <FadeUp delay={0.4}>
              <div className="p-6 bg-brand-50 rounded-4xl border border-brand-100">
                <p className="font-bold text-slate-800 mb-4">تابعونا على</p>
                <div className="flex gap-3">
                  {[
                    { icon: "mdi:facebook", href: "#", bg: "hover:bg-blue-600" },
                    { icon: "mdi:instagram", href: "#", bg: "hover:bg-pink-500" },
                    { icon: "mdi:whatsapp", href: "#", bg: "hover:bg-green-500" },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className={`w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-slate-600 hover:text-white transition-all ${s.bg}`}
                    >
                      <Icon icon={s.icon} fontSize={22} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* CONTACT FORM */}
          <div className="lg:col-span-3">
            <FadeUp delay={0.15}>
              {sent ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center py-20 bg-brand-50 rounded-5xl border border-brand-100 animate-[fadeIn_0.4s_ease]"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <Icon icon="mdi:check-circle" className="text-green-600" fontSize={50} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3">تم الإرسال بنجاح!</h3>
                  <p className="text-slate-500 max-w-sm leading-relaxed">
                    شكراً لتواصلكم. سيقوم فريقنا بمراجعة رسالتكم والرد عليكم خلال 24 ساعة.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 px-6 py-3 bg-brand-600 text-white rounded-2xl font-bold hover:bg-brand-700 transition-colors"
                  >
                    إرسال رسالة جديدة
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-5xl border border-gray-100 shadow-card p-8 space-y-5"
                >
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 mb-2">أرسل لنا رسالة</h2>
                    <p className="text-slate-500 text-sm">وسيرد عليك فريقنا خلال 24 ساعة</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">الاسم الكامل *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="اسمك"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">اسم الشركة / المنشأة</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="اختياري"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">رقم الهاتف / الواتساب *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+963..."
                      dir="ltr"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">نوع الاستفسار</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all appearance-none"
                    >
                      <option value="">اختر نوع الاستفسار</option>
                      <option>طلب توزيع / شراكة</option>
                      <option>استفسار عن منتج</option>
                      <option>اقتراح أو شكوى</option>
                      <option>أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">رسالتك *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-2xl font-black text-base active:scale-95 transition-all shadow-brand-sm"
                  >
                    <Icon icon="mdi:send" fontSize={20} className="rotate-180" />
                    إرسال الرسالة
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-3">الأسئلة الشائعة</h2>
            <p className="text-slate-500">إجابات على أبرز استفساراتكم</p>
          </FadeUp>
          <div className="space-y-4">
            {[
              { q: "كيف أصبح موزعاً معتمداً لمنتجات سلسـبيل؟",
                a: "تواصل معنا عبر نموذج الاتصال أو الهاتف، وسيتواصل معك مندوبنا خلال 24 ساعة لمناقشة شروط التوزيع." },
              { q: "هل منتجاتكم متوفرة خارج سوريا؟",
                a: "حالياً نركّز على تغطية السوق المحلي بشكل متكامل، ونتطلع للتوسع الإقليمي مستقبلاً." },
              { q: "ما معايير السلامة المتبعة في التعبئة؟",
                a: "نستخدم تقنية التعبئة المعقمة (Aseptic) التي تحافظ على الطعم والفيتامينات دون مواد حافظة مصنّعة." },
              { q: "هل يمكن طلب كميات كبيرة بأسعار خاصة؟",
                a: "نعم، نُقدّم أسعاراً تفضيلية للطلبات الكبيرة والمنشآت التجارية. تواصل مع قسم المبيعات للتفاصيل." },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <details className="group bg-white rounded-3xl p-5 border border-gray-100 shadow-card hover:border-brand-100 transition-all">
                  <summary className="flex justify-between items-center cursor-pointer font-bold text-slate-800 list-none">
                    {item.q}
                    <Icon
                      icon="mdi:chevron-down"
                      fontSize={22}
                      className="text-brand-500 group-open:rotate-180 transition-transform flex-shrink-0 mr-4"
                    />
                  </summary>
                  <p className="mt-4 pt-4 border-t border-gray-100 text-sm text-slate-500 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}