import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "خريطة الموقع",
    icon: "mdi:sitemap-outline",
    links: [
      { name: "الرئيسية", href: "/" },
      { name: "من نحن", href: "/about" },
      { name: "منتجاتنا", href: "/products" },
      { name: "معايير الجودة", href: "/quality" },
      { name: "التوزيع", href: "/distribution" },
    ],
  },
  {
    title: "منتجاتنا",
    icon: "mdi:package-variant-closed",
    links: [
      { name: "المشروبات الغازية", href: "/products" },
      { name: "العصائر الطبيعية", href: "/products" },
      { name: "مياه الشرب المعبأة", href: "/products" },
      { name: "إصدارات خاصة", href: "/products" },
    ],
  },
];

const socials = [
  { icon: "mdi:facebook", href: "#", label: "فيسبوك", color: "hover:bg-blue-600" },
  { icon: "mdi:instagram", href: "#", label: "إنستغرام", color: "hover:bg-gradient-to-tr hover:from-pink-500 hover:to-orange-400" },
  { icon: "mdi:whatsapp", href: "#", label: "واتساب", color: "hover:bg-green-500" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer dir="rtl" className="bg-slate-950 text-slate-400">
      
      {/* ── TOP WAVE DIVIDER ── */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
          <path d="M0 60L1440 60L1440 0C1200 40 960 60 720 50C480 40 240 20 0 0L0 60Z" fill="#020617"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── BRAND BLOCK ── */}
        <div className="pt-16 pb-12 border-b border-white/5 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="mb-6">
              <img src="/logo.webp" alt="سلسبيل" className="h-16 w-auto object-contain brightness-0 invert" loading="lazy" />
            </div>
            <p className="text-slate-400 text-ar-base leading-loose max-w-sm">
              رواد صناعة المشروبات في سوريا. نجمع بين نقاء المكوّنات الطبيعية وأحدث تقنيات التصنيع العالمية
              لنقدم إليك تجربة انتعاش لا مثيل لها في كل رشفة.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 ${s.color}`}
                >
                  <Icon icon={s.icon} fontSize={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white/5 rounded-4xl border border-white/8 p-8 relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <p className="flex items-center gap-2 text-brand-400 text-sm font-bold uppercase tracking-widest mb-3">
                <Icon icon="mdi:email-fast-outline" fontSize={16} />
                النشرة الإخبارية
              </p>
              <h3 className="text-white font-black text-xl mb-2">ابقَ على تواصل</h3>
              <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                كن أول من يعرف عن نكهاتنا الجديدة وعروض الشراكة والتوزيع.
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  dir="rtl"
                  className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brand-600 hover:bg-brand-500 text-white rounded-xl transition-colors"
                >
                  <Icon icon="mdi:send" fontSize={20} className="rotate-180" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ── LINKS + CONTACT ── */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest mb-6">
                <Icon icon={section.icon} className="text-brand-500" fontSize={18} />
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-slate-500 hover:text-brand-400 transition-colors text-sm font-medium"
                    >
                      <Icon
                        icon="mdi:chevron-left"
                        fontSize={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-500"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest mb-6">
              <Icon icon="mdi:contacts-outline" className="text-brand-500" fontSize={18} />
              تواصل معنا
            </h4>
            <div className="space-y-4">
              <a href="tel:+963550725933" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-brand-600/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Icon icon="mdi:phone-outline" fontSize={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-600">المبيعات والتوزيع</p>
                  <p className="text-white font-bold text-sm" dir="ltr">+963 550 725 933</p>
                </div>
              </a>
              <a href="mailto:info@salsabil-sy.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-brand-600/10 flex items-center justify-center text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Icon icon="mdi:email-outline" fontSize={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-600">البريد الإلكتروني</p>
                  <p className="text-white font-bold text-sm">info@salsabil-sy.com</p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-600/10 flex items-center justify-center text-brand-400 flex-shrink-0">
                  <Icon icon="mdi:map-marker-outline" fontSize={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-600">الموقع</p>
                  <p className="text-white font-bold text-sm leading-relaxed">
                    سوريا، ريف دمشق، صبّورة، يفور
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>© {year} شركة سلسـبيل للمشروبات. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-400 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-brand-400 transition-colors">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}