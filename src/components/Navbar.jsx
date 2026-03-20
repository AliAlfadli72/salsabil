import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const navLinks = [
  { name: "الرئيسية",  href: "/" },
  { name: "من نحن",   href: "/about" },
  { name: "منتجاتنا", href: "/products" },
  { name: "الجودة",   href: "/quality" },
  { name: "التوزيع",  href: "/distribution" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        dir="rtl"
        className={`fixed w-full top-0 z-[200] transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.08)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* ─── LOGO ─── */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img
              src="/logo.webp"
              alt="سلسبيل"
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* ─── DESKTOP LINKS ─── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-bold rounded-xl transition-all duration-200 ${
                    active
                      ? "text-brand-700 bg-brand-50"
                      : scrolled
                        ? "text-slate-600 hover:text-brand-700 hover:bg-brand-50"
                        : "text-slate-700 hover:text-brand-700 hover:bg-brand-50"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-1 right-1/2 translate-x-1/2 w-1.5 h-1.5 bg-brand-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              style={{ backgroundColor: "#0083cc" }}
              className="flex items-center gap-2 px-6 py-2.5 text-white rounded-2xl font-bold text-sm hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg"
            >
              <Icon icon="mdi:phone-in-talk-outline" fontSize={18} />
              تواصل معنا
            </Link>
          </div>

          {/* ─── MOBILE TOGGLE ─── */}
          <button
            aria-label="فتح القائمة"
            className={`md:hidden p-2.5 rounded-xl transition-colors ${
              scrolled ? "text-slate-900 bg-gray-100 hover:bg-gray-200" : "text-slate-900 bg-white/20 hover:bg-white/30"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} fontSize={26} />
          </button>
        </div>
      </motion.nav>

      {/* ─── MOBILE OVERLAY ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[190] md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            dir="rtl"
            className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-2xl z-[195] md:hidden flex flex-col pt-24 pb-10 px-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-lg transition-colors ${
                      location.pathname === link.href
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon icon="mdi:chevron-left" className="text-brand-500" />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 bg-brand-600 text-white rounded-2xl font-bold text-lg hover:bg-brand-700 transition-colors"
              >
                <Icon icon="mdi:phone-in-talk-outline" fontSize={22} />
                تواصل معنا الآن
              </Link>
              <div className="flex justify-center gap-4 mt-6">
                <a href="#" aria-label="فيسبوك" className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-brand-600 hover:text-white transition-all">
                  <Icon icon="mdi:facebook" fontSize={20} />
                </a>
                <a href="#" aria-label="إنستغرام" className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all">
                  <Icon icon="mdi:instagram" fontSize={20} />
                </a>
                <a href="#" aria-label="واتساب" className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-all">
                  <Icon icon="mdi:whatsapp" fontSize={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}