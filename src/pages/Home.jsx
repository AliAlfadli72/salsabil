import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

/* ═══════════════════════════════════════════
   ANIMATION HELPERS
═══════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

function FadeSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerSection({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   PRODUCT VISUAL MOCKUP (SVG-based)
═══════════════════════════════════════════ */
function ProductCan({ style = {}, className = "" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={style}>
      {/* Outer glow rings */}
      <div className="absolute w-[340px] h-[340px] rounded-full bg-cyan-400/10 animate-pulse-glow" />
      <div className="absolute w-[260px] h-[260px] rounded-full bg-brand-400/15 animate-pulse-glow" style={{ animationDelay: "1s" }} />

      {/* Can SVG */}
      <svg viewBox="0 0 120 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 md:w-48 drop-shadow-2xl glow-blue animate-float">
        {/* Can body */}
        <defs>
          <linearGradient id="canGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0c5fa8" />
            <stop offset="30%" stopColor="#1e90e0" />
            <stop offset="60%" stopColor="#38b8f4" />
            <stop offset="80%" stopColor="#0ca7ed" />
            <stop offset="100%" stopColor="#0a5099" />
          </linearGradient>
          <linearGradient id="topGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c8e8f8" />
            <stop offset="100%" stopColor="#7fc9ee" />
          </linearGradient>
          <linearGradient id="highlight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="40%" stopColor="white" stopOpacity="0.35" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cyanglow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#0ca7ed" stopOpacity="0.4"/>
          </linearGradient>
        </defs>

        {/* Body */}
        <rect x="12" y="28" width="96" height="188" rx="20" fill="url(#canGrad)" />

        {/* Highlight streak */}
        <rect x="22" y="28" width="30" height="188" rx="8" fill="url(#highlight)" />

        {/* Center brand label area */}
        <rect x="18" y="80" width="84" height="90" rx="8" fill="white" fillOpacity="0.06" />

        {/* Brand name on can */}
        <text x="60" y="118" textAnchor="middle" fontFamily="Cairo, sans-serif" fontSize="11" fontWeight="900" fill="white" fillOpacity="0.95">سلسـبيل</text>
        <text x="60" y="134" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fontWeight="400" fill="white" fillOpacity="0.6">SALSABIL</text>
        {/* Water drop icon on can */}
        <path d="M60 92 C60 92 52 101 52 107 C52 113 55.6 116 60 116 C64.4 116 68 113 68 107 C68 101 60 92 60 92Z" fill="white" fillOpacity="0.25"/>

        {/* Cyan stripe accent */}
        <rect x="12" y="145" width="96" height="6" fill="url(#cyanglow)" />

        {/* Top ellipse */}
        <ellipse cx="60" cy="28" rx="48" ry="10" fill="url(#topGrad)" />
        <ellipse cx="60" cy="26" rx="48" ry="10" fill="url(#topGrad)" />

        {/* Pull tab area */}
        <ellipse cx="60" cy="20" rx="32" ry="6" fill="#b4d8ef" />
        <ellipse cx="60" cy="18" rx="20" ry="4" fill="#8fc8e8" />
        <rect x="52" y="8" width="16" height="10" rx="3" fill="#9dd0ea" />
        <rect x="56" y="5" width="8" height="6" rx="2" fill="#7abedd" />

        {/* Bottom ellipse */}
        <ellipse cx="60" cy="216" rx="48" ry="10" fill="#0a4d8a" />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef(null);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end start"] });

  // 3D scroll transforms for can section
  const canRotate  = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const canScale   = useTransform(scrollYProgress, [0, 0.5], [1, 1.08]);
  const canY       = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Parallax for hero
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 600], [0, -90]);
  const heroOpacity  = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="bg-white text-slate-900 font-cairo overflow-x-hidden" dir="rtl">

      {/* ═══════════════════════════════════
          1) HERO SECTION
      ═══════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-glow-blue pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-glow-cyan pointer-events-none" />

        <div className="section-container py-32 pt-40 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* Text Column */}
          <motion.div style={{ y: heroParallax, opacity: heroOpacity }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-label"
            >
              <Icon icon="mdi:water-outline" fontSize={16} />
              مشروبات عالية الجودة · سوريا
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6"
            >
              حيث يلتقي
              <span className="block gradient-text">النقاء بالانتعاش</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-ar-lg text-slate-600 max-w-lg mb-10 leading-loose"
            >
              سلسـبيل — مشروبات تُصنع بشغف في قلب سوريا، تجمع بين المعايير العالمية
              وأصالة الطعم في كل عبوة، لترتوي بثقة من مصدر موثوق.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/products" className="btn-primary">
                <Icon icon="mdi:package-variant" fontSize={20} />
                استكشف منتجاتنا
              </Link>
              <Link to="/contact" className="btn-secondary">
                <Icon icon="mdi:handshake-outline" fontSize={20} />
                طلب شراكة / توزيع
              </Link>
            </motion.div>

            {/* Quick Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-gray-100"
            >
              {[
                { icon: "mdi:shield-check-outline", label: "جودة مضمونة" },
                { icon: "mdi:leaf-circle-outline", label: "مكوّنات طبيعية" },
                { icon: "mdi:truck-fast-outline", label: "توزيع شامل" },
              ].map((b) => (
                <span key={b.label} className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
                  <Icon icon={b.icon} className="text-brand-500" fontSize={18} />
                  {b.label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Column - Floating Can */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Real product image */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="absolute inset-0 rounded-full bg-brand-400/10 blur-3xl scale-125 animate-pulse-glow" />
              <img
                src="/hero.webp"
                alt="سلسبيل مشروب"
                className="w-72 md:w-96 object-contain drop-shadow-2xl relative z-10"
              />
            </motion.div>

            {/* Floating info badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-0 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-2.5 border border-brand-100"
            >
              <div className="w-9 h-9 bg-brand-50 rounded-xl flex items-center justify-center">
                <Icon icon="mdi:star-circle-outline" className="text-brand-600" fontSize={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">تقييم الجودة</p>
                <p className="font-black text-slate-900 text-sm">ممتاز AAA</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-16 left-0 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-2.5 border border-cyan-100"
            >
              <div className="w-9 h-9 bg-cyan-50 rounded-xl flex items-center justify-center">
                <Icon icon="mdi:leaf" className="text-cyan-600" fontSize={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400">مكوّنات</p>
                <p className="font-black text-slate-900 text-sm">100% طبيعية</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-400 font-medium">مرّر للأسفل</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-brand-300 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-brand-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════
          2) KEY FEATURES STRIP
      ═══════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <StaggerSection className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "mdi:water-check-outline",    label: "نقاء المياه",         sub: "مصدر طبيعي معتمد",       color: "bg-brand-50 text-brand-600" },
              { icon: "mdi:shield-star-outline",    label: "جودة معتمدة",         sub: "معايير دولية صارمة",      color: "bg-cyan-50 text-cyan-600" },
              { icon: "mdi:leaf",                   label: "مكوّنات طبيعية",       sub: "خالٍ من الألوان الصناعية", color: "bg-green-50 text-green-600" },
              { icon: "mdi:map-marker-radius-outline", label: "انتشار واسع",      sub: "يغطي كامل سوريا",         color: "bg-purple-50 text-purple-600" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-card hover:shadow-brand-sm hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-3"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}>
                  <Icon icon={item.icon} fontSize={26} />
                </div>
                <div>
                  <p className="font-black text-slate-900 mb-0.5">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ═══════════════════════════════════
          3) ABOUT SECTION
      ═══════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Visual side */}
            <FadeSection>
              <div className="relative">
                {/* Main visual block */}
                <div className="aspect-square max-w-md mx-auto rounded-5xl bg-gradient-to-br from-brand-50 to-cyan-50 border border-brand-100 overflow-hidden flex items-center justify-center shadow-brand-lg relative">
                  <div className="absolute inset-0 bg-grid opacity-60" />
                  <ProductCan className="relative z-10 scale-110" />
                </div>

                {/* Accent card - top-left */}
                <div className="absolute -top-6 -right-6 bg-white rounded-3xl shadow-brand-md p-5 border border-brand-100 hidden md:block">
                  <p className="text-4xl font-black gradient-text">+15</p>
                  <p className="text-xs text-slate-500 mt-1">عاماً من الخبرة</p>
                </div>

                {/* Accent card - bottom-right */}
                <div className="absolute -bottom-6 -left-6 bg-brand-600 rounded-3xl shadow-brand-lg p-5 text-white hidden md:block">
                  <p className="text-3xl font-black">100%</p>
                  <p className="text-xs opacity-80 mt-1">جودة مضمونة</p>
                </div>
              </div>
            </FadeSection>

            {/* Text side */}
            <div>
              <FadeSection>
                <p className="section-label">
                  <Icon icon="mdi:office-building-outline" fontSize={16} />
                  من نحن
                </p>
                <h2 className="section-title mb-6">
                  شركة سلسـبيل
                  <span className="block gradient-text">أكثر من مجرد مشروب</span>
                </h2>
                <p className="text-ar-base text-slate-500 leading-loose mb-8">
                  في سلسـبيل، نؤمن بأن كل رشفة تحكي قصة. انطلقنا من قلب سوريا بحلمٍ
                  واضح: تقديم مشروبات تجمع بين نقاء الطبيعة وأحدث معايير التصنيع العالمية.
                  اليوم، نفخر بأن منتجاتنا تتواجد في أرجاء المحافظات السورية بأنواعها المختلفة،
                  وتُقدّم لعملائنا تجربة انتعاش حقيقية في كل مناسبة.
                </p>
              </FadeSection>

              <StaggerSection className="space-y-4">
                {[
                  { icon: "mdi:cog-outline",          title: "خطوط إنتاج أوتوماتيكية",    desc: "أحدث معدات التصنيع تضمن دقة ونظافة كل عبوة." },
                  { icon: "mdi:certificate-outline",  title: "رقابة جودة صارمة",           desc: "فحص مخبري يومي وفق متطلبات المواصفة السورية والدولية." },
                  { icon: "mdi:earth",                title: "توزيع إقليمي متكامل",        desc: "شبكة توزيع تغطي سوريا بمرونة وكفاءة عالية." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-4 p-5 rounded-3xl hover:bg-brand-50 transition-colors group"
                  >
                    <div className="feature-icon group-hover:bg-brand-100 transition-colors flex-shrink-0">
                      <Icon icon={item.icon} fontSize={22} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerSection>

              <FadeSection delay={0.3}>
                <Link to="/about" className="btn-ghost mt-6 inline-flex">
                  اكتشف قصتنا كاملة
                  <Icon icon="mdi:chevron-left" fontSize={20} />
                </Link>
              </FadeSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          4) PRODUCTS SECTION
      ═══════════════════════════════════ */}
      <section className="py-28 bg-slate-50">
        <div className="section-container">
          <FadeSection className="text-center mb-16">
            <p className="section-label justify-center">
              <Icon icon="mdi:package-variant-closed" fontSize={16} />
              تشكيلة منتجاتنا
            </p>
            <h2 className="section-title">نكهات تأسر الوجدان</h2>
            <p className="section-desc max-w-2xl mx-auto">
              تشكيلة متنوعة من المشروبات المنعشة، لكل مذاق ومناسبة، بمعايير جودة لا تُجامل.
            </p>
          </FadeSection>

          {/* ── Featured first product ── */}
          <FadeSection>
            <Link to="/products" className="block group mb-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative rounded-4xl overflow-hidden h-80 md:h-96 shadow-brand-lg"
              >
                <img
                  src="/pro (1).webp"
                  alt="مشروبات غازية سلسبيل"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Badge */}
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  الأكثر طلباً ⭐
                </div>
                {/* Bottom content */}
                <div className="absolute bottom-0 inset-x-0 p-8 flex items-end justify-between">
                  <div>
                    <p className="text-white/70 text-sm mb-1">تشكيلتنا الأولى</p>
                    <h3 className="text-3xl font-black text-white">مشروبات غازية</h3>
                    <p className="text-white/70 text-sm mt-2 max-w-md">فقاعات منعشة بنكهات متعددة، توازن مثالي في كل رشفة.</p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-700 transition-all duration-300">
                    <Icon icon="mdi:chevron-left" fontSize={24} />
                  </div>
                </div>
              </motion.div>
            </Link>
          </FadeSection>

          {/* ── 5‑card grid ── */}
          <StaggerSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "عصائر طبيعية",
                sub:   "خلاصة الفاكهة الطازجة محتفظةً بكل فيتاميناتها.",
                img:   "/pro (2).webp",
                tag:   "صحي 100%",
                tagColor: "bg-green-500",
              },
              {
                title: "مياه الشرب المعبأة",
                sub:   "نقاء تام في كل قطرة، مُرشّحة بأحدث التقنيات.",
                img:   "/pro (3).webp",
                tag:   "نقاء طبيعي",
                tagColor: "bg-sky-500",
              },
              {
                title: "مشروبات الطاقة",
                sub:   "فيتامينات ومعادن تمنحك التركيز طوال اليوم.",
                img:   "/pro (1).webp",
                tag:   "جديد",
                tagColor: "bg-amber-500",
              },
              {
                title: "مشروبات الرياضة",
                sub:   "إلكتروليت وأملاح لتعويض ما يفقده جسمك.",
                img:   "/pro (2).webp",
                tag:   "Sport Line",
                tagColor: "bg-emerald-500",
              },
              {
                title: "إصدارات خاصة",
                sub:   "نكهات موسمية حصرية بكميات محدودة.",
                img:   "/pro (3).webp",
                tag:   "Limited Edition",
                tagColor: "bg-purple-500",
              },
            ].map((product, i) => (
              <motion.div key={i} variants={scaleIn}>
                <Link to="/products" className="block group">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="relative rounded-3xl overflow-hidden shadow-card hover:shadow-brand-md transition-shadow duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-56 bg-white overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      {/* Tag */}
                      <span className={`absolute top-4 right-4 ${product.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
                        {product.tag}
                      </span>
                    </div>

                    {/* Bottom card info */}
                    <div className="bg-white px-5 py-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-black text-slate-900 text-base leading-tight">{product.title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">{product.sub}</p>
                      </div>
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl border border-brand-100 bg-brand-50 flex items-center justify-center"
                        style={{ color: "#0168a5" }}>
                        <Icon icon="mdi:chevron-left" fontSize={20} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </StaggerSection>

          <FadeSection className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              <Icon icon="mdi:view-grid-outline" fontSize={20} />
              مشاهدة الكتالوج الكامل
            </Link>
          </FadeSection>
        </div>
      </section>

      {/* ═══════════════════════════════════
          5) QUALITY STORYTELLING
      ═══════════════════════════════════ */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <FadeSection>
                <p className="section-label">
                  <Icon icon="mdi:flask-outline" fontSize={16} />
                  الجودة والمعايير
                </p>
                <h2 className="section-title mb-6">
                  تكنولوجيا متطورة
                  <span className="block gradient-text">تضمن نقاء كل قطرة</span>
                </h2>
              </FadeSection>

              <StaggerSection className="space-y-6 mt-8">
                {[
                  {
                    icon:  "mdi:robot-industrial-outline",
                    title: "خطوط إنتاج ذكية",
                    desc:  "أتمتة كاملة تُقلّص التدخل البشري لتحقيق أعلى معدلات التعقيم والنظافة الصناعية.",
                    step:  "01",
                  },
                  {
                    icon:  "mdi:microscope",
                    title: "فحص مخبري يومي",
                    desc:  "فريق متخصص يُجري اختبارات دقيقة على المكوّنات والمنتج النهائي قبل خروجه من المصنع.",
                    step:  "02",
                  },
                  {
                    icon:  "mdi:certificate-outline",
                    title: "مطابقة المواصفات الدولية",
                    desc:  "كامل عمليات التصنيع متوافقة مع المعايير السورية والمواصفات القياسية الدولية ISO.",
                    step:  "03",
                  },
                  {
                    icon:  "mdi:recycle-variant",
                    title: "بيئة مسؤولة",
                    desc:  "تقنيات صديقة للبيئة تُرشّد استهلاك المياه وتُقلّل البصمة الكربونية في إنتاجنا.",
                    step:  "04",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-5 group"
                  >
                    <div className="flex-shrink-0 relative">
                      <div className="w-14 h-14 rounded-2xl bg-brand-50 group-hover:bg-brand-600 flex items-center justify-center text-brand-600 group-hover:text-white transition-all duration-300">
                        <Icon icon={item.icon} fontSize={24} />
                      </div>
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-600 text-white text-xs font-black rounded-full flex items-center justify-center">
                        {i+1}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h4 className="font-black text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerSection>

              <FadeSection delay={0.2}>
                <Link to="/quality" className="btn-ghost mt-6 inline-flex">
                  معايير الجودة التفصيلية
                  <Icon icon="mdi:chevron-left" fontSize={20} />
                </Link>
              </FadeSection>
            </div>

            {/* Stats / visual */}
            <FadeSection>
              <div className="grid grid-cols-2 gap-5">

                {/* Card 1 — blue bg */}
                <motion.div whileHover={{ scale: 1.03 }}
                  className="rounded-4xl p-7 shadow-card flex flex-col gap-3 cursor-default text-white"
                  style={{ backgroundColor: "#0083cc" }}
                >
                  <Icon icon="mdi:test-tube" fontSize={28} />
                  <p className="text-4xl font-black">+20</p>
                  <p className="text-sm opacity-80 font-medium">محطة فحص جودة</p>
                </motion.div>

                {/* Card 2 — white bg, blue text */}
                <motion.div whileHover={{ scale: 1.03 }}
                  className="rounded-4xl p-7 shadow-card flex flex-col gap-3 cursor-default bg-white border border-blue-100"
                  style={{ color: "#0168a5" }}
                >
                  <Icon icon="mdi:check-all" fontSize={28} />
                  <p className="text-4xl font-black">100%</p>
                  <p className="text-sm opacity-80 font-medium">فحص لكل دُفعة</p>
                </motion.div>

                {/* Card 3 — white bg, cyan text */}
                <motion.div whileHover={{ scale: 1.03 }}
                  className="rounded-4xl p-7 shadow-card flex flex-col gap-3 cursor-default bg-white border border-cyan-100 text-cyan-700"
                >
                  <Icon icon="mdi:close-circle-outline" fontSize={28} />
                  <p className="text-4xl font-black">صفر</p>
                  <p className="text-sm opacity-80 font-medium">تسوية مع الجودة</p>
                </motion.div>

                {/* Card 4 — cyan bg */}
                <motion.div whileHover={{ scale: 1.03 }}
                  className="rounded-4xl p-7 shadow-card flex flex-col gap-3 cursor-default text-white"
                  style={{ backgroundColor: "#0891b2" }}
                >
                  <Icon icon="mdi:earth" fontSize={28} />
                  <p className="text-4xl font-black">ISO</p>
                  <p className="text-sm opacity-80 font-medium">معايير دولية</p>
                </motion.div>

              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          6) INTERACTIVE 3D / SCROLL SECTION
      ═══════════════════════════════════ */}
      <section ref={scrollRef} className="py-28 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
        <div className="section-container relative z-10">

          <FadeSection className="text-center mb-20">
            <p className="section-label justify-center">
              <Icon icon="mdi:rotate-3d-variant" fontSize={16} />
              تجربة المنتج
            </p>
            <h2 className="section-title">
              صُنع بعناية
              <span className="gradient-text"> فلسفة تصنيع </span>
              استثنائية
            </h2>
          </FadeSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Product showcase image */}
            <div className="flex justify-center">
              <motion.div
                className="relative"
              >
                {/* Glowing circle background */}
                <div
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(12,167,237,0.18) 0%, rgba(1,104,165,0.08) 50%, transparent 75%)",
                    filter: "blur(4px)",
                  }}
                />
                {/* Floating product image */}
                <motion.img
                  src="/hero.webp"
                  alt="منتج سلسبيل"
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-72 md:w-80 drop-shadow-2xl"
                />
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-brand-md flex items-center gap-2 z-20"
                >
                  <span className="text-lg">✨</span>
                  <span className="text-xs font-black text-slate-800">جودة مضمونة 100%</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Layered info panels */}
            <StaggerSection className="space-y-5">
              {[
                {
                  icon:  "mdi:water-boiler-auto",
                  title: "تعبئة معقمة بالصوت فوق البنفسجي",
                  desc:  "تقنية UV Sterilization تقضي على 99.99% من الجراثيم دون أي مواد كيميائية.",
                  num:   "1",
                },
                {
                  icon:  "mdi:snowflake-check",
                  title: "حفظ السلسلة الباردة",
                  desc:  "من المصنع حتى المستهلك، نضمن درجة حرارة مثالية تحافظ على الطعم والنضارة.",
                  num:   "2",
                },
                {
                  icon:  "mdi:package-check-outline",
                  title: "تغليف مستدام وآمن",
                  desc:  "مواد تغليف خالية من مواد BPA وقابلة لإعادة التدوير لحماية صحتك والبيئة معاً.",
                  num:   "3",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: -6 }}
                  className="flex gap-5 bg-white rounded-4xl p-6 border border-gray-100 shadow-card hover:shadow-brand-sm hover:border-brand-200 transition-all duration-300 cursor-default"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-brand-sm">
                    <Icon icon={item.icon} fontSize={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black text-brand-500 bg-brand-50 px-2 py-0.5 rounded-full">
                        خطوة {item.num}
                      </span>
                    </div>
                    <h4 className="font-black text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          7) DISTRIBUTION / REACH
      ═══════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="section-container">

          <FadeSection className="text-center mb-16">
            <p className="section-label justify-center">
              <Icon icon="mdi:map-marker-path" fontSize={16} />
              شبكة التوزيع
            </p>
            <h2 className="section-title">
              نصلك أينما كنتَ
              <span className="block gradient-text">في كل ربوع سوريا</span>
            </h2>
            <p className="section-desc max-w-xl mx-auto">
              شبكة توزيع متكاملة تضمن وصول منتجاتنا طازجة وبانتظام إلى كل منفذ بيع.
            </p>
          </FadeSection>

          {/* Map visual placeholder */}
          <FadeSection>
            <div className="relative rounded-5xl overflow-hidden border border-brand-100 shadow-brand-lg mb-14 bg-gradient-to-br from-brand-50 via-white to-cyan-50 min-h-64 flex items-center justify-center">
              <div className="absolute inset-0 bg-dots opacity-60" />
              <div className="relative z-10 text-center py-16 px-6">
                <Icon icon="mdi:map-outline" fontSize={80} className="text-brand-300 mx-auto mb-4" />
                <p className="text-brand-600 font-bold text-lg mb-1">خريطة التوزيع التفاعلية</p>
                <p className="text-slate-400 text-sm">قريباً — تتبّع نقاط البيع في محافظتك</p>
              </div>
              {/* Decorative location dots */}
              {[
                { top: "20%", right: "30%" }, { top: "40%", right: "55%" },
                { top: "60%", right: "20%" }, { top: "35%", right: "70%" },
                { top: "70%", right: "60%" },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute w-4 h-4 rounded-full bg-brand-500 border-2 border-white shadow-brand-sm"
                  style={{ top: pos.top, right: pos.right }}
                />
              ))}
            </div>
          </FadeSection>

          <StaggerSection className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "mdi:store-outline",         val: "+500", label: "نقطة بيع",         color: "text-brand-600 bg-brand-50" },
              { icon: "mdi:truck-delivery-outline", val: "7",    label: "محافظات مغطاة",    color: "text-cyan-600 bg-cyan-50" },
              { icon: "mdi:timer-sand",            val: "24 ساعة",label: "وقت التوصيل",     color: "text-green-600 bg-green-50" },
              { icon: "mdi:account-group-outline",  val: "+30",  label: "موزع معتمد",        color: "text-purple-600 bg-purple-50" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-white rounded-4xl p-7 border border-gray-100 shadow-card text-center hover:-translate-y-1 hover:shadow-brand-sm transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${item.color}`}>
                  <Icon icon={item.icon} fontSize={26} />
                </div>
                <p className="text-4xl font-black text-slate-900 mb-1">{item.val}</p>
                <p className="text-sm text-slate-500">{item.label}</p>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ═══════════════════════════════════
          8) WHY SALSABIL
      ═══════════════════════════════════ */}
      <section className="py-28 bg-gradient-to-b from-brand-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-glow-blue opacity-60 pointer-events-none -translate-x-1/2" />
        <div className="section-container relative z-10">

          <FadeSection className="text-center mb-16">
            <p className="section-label justify-center">
              <Icon icon="mdi:crown-circle-outline" fontSize={16} />
              لماذا سلسـبيل
            </p>
            <h2 className="section-title">
              مزايا تميّزنا
              <span className="block gradient-text">في كل تفصيلة</span>
            </h2>
          </FadeSection>

          <StaggerSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "mdi:water-circle",         title: "نقاء لا يُجامَل",      desc: "مصادر مياه معتمدة ومُرشّحة بتقنيات متعددة المراحل لضمان النقاء التام."  },
              { icon: "mdi:flask-round-bottom-outline", title: "تركيبة متوازنة",   desc: "خبراء التغذية يشرفون على تطوير منتجات تُحقق التوازن بين الطعم والصحة." },
              { icon: "mdi:factory",               title: "مصنع بمواصفة عالمية",  desc: "منشأة إنتاج حديثة مزودة بأنظمة تعقيم ومراقبة بيئية متطورة."           },
              { icon: "mdi:handshake-outline",     title: "شراكة ونزاهة",          desc: "علاقات موزعين مبنية على الثقة والوضوح والمصلحة المشتركة على المدى البعيد." },
              { icon: "mdi:medal-outline",         title: "جوائز واعتراف",          desc: "حصلنا على تقديرات متعددة في مجال جودة المشروبات وسلامة الغذاء."          },
              { icon: "mdi:heart-pulse",           title: "صحة وسلامة",             desc: "منتجاتنا خالية من الألوان الصناعية الضارة، مع خيارات قليلة السكر."       },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(12,167,237,0.18)" }}
                className="bg-white rounded-4xl p-8 border border-gray-100 shadow-card transition-shadow cursor-default"
              >
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-5">
                  <Icon icon={item.icon} fontSize={26} />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </StaggerSection>
        </div>
      </section>

      {/* ═══════════════════════════════════
          9) CTA SECTION
      ═══════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <FadeSection>
          <div
              className="max-w-5xl mx-auto relative overflow-hidden rounded-5xl p-14 md:p-20 text-center"
              style={{ background: "linear-gradient(135deg, #0083cc 0%, #0ca7ed 55%, #22d3ee 100%)" }}
            >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/8 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
            <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

            <div className="relative z-10">
              <Icon icon="mdi:handshake" fontSize={56} className="text-white/80 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
                انضم إلى شبكة الموزعين
                <span className="block opacity-90">المعتمدين</span>
              </h2>
              <p className="text-blue-100 text-ar-lg max-w-xl mx-auto mb-10 leading-loose">
                نبحث عن شركاء طموحين لتوسيع انتشار سلسـبيل.
                تواصل معنا اليوم وابدأ رحلة النجاح المشترك.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-10 py-4 bg-white text-[#0168a5] rounded-2xl font-black text-base hover:bg-blue-50 active:scale-95 transition-all duration-200 shadow-xl"
                >
                  <Icon icon="mdi:phone-in-talk-outline" fontSize={22} />
                  تواصل مع الإدارة التجارية
                </Link>
                <Link
                  to="/distribution"
                  className="flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur text-white rounded-2xl font-bold text-base border border-white/30 hover:bg-white/25 active:scale-95 transition-all duration-200"
                >
                  <Icon icon="mdi:information-outline" fontSize={20} />
                  معرفة المزيد
                </Link>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
                {[
                  { icon: "mdi:clock-fast", label: "رد خلال 24 ساعة" },
                  { icon: "mdi:shield-check", label: "عقود واضحة وشفافة" },
                  { icon: "mdi:chart-line-variant", label: "دعم تسويقي مستمر" },
                ].map((t) => (
                  <span key={t.label} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                    <Icon icon={t.icon} fontSize={18} />
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

    </div>
  );
}