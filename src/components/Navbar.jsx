import { useState, useEffect } from "react";
import { Menu, X, Globe, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "منتجاتنا", href: "/products" },
    { name: "الجودة", href: "/quality" },
    { name: "التوزيع", href: "/distribution" },
  ];

  return (
    <nav 
      dir="rtl"
      className={`fixed w-full top-0 z-[100] transition-all duration-500 ${
        scrolled 
        ? "bg-white/80 backdrop-blur-lg shadow-lg py-3" 
        : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO - Elegant Typography */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:rotate-12 transition-transform">
            S
          </div>
          <span className={`text-2xl font-black tracking-tighter transition-colors ${
            scrolled ? "text-slate-900" : "text-white"
          }`}>
            سلسـبيل
          </span>
        </div>

        {/* DESKTOP MENU - Centered & Clean */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold text-sm uppercase tracking-wide transition-all hover:scale-110 ${
                scrolled ? "text-slate-600 hover:text-blue-600" : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* ACTIONS - Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/contact" className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl font-bold transition-all shadow-md active:scale-95 ${
            scrolled 
            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200" 
            : "bg-white text-blue-600 hover:bg-blue-50 shadow-none"
          }`}>
            <PhoneCall size={18} />
            تواصل معنا
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`md:hidden p-2 rounded-xl ${
            scrolled ? "text-slate-900 bg-gray-100" : "text-white bg-white/10"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <div className={`fixed inset-0 bg-slate-900 transition-transform duration-500 ease-in-out z-[-1] md:hidden ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-10 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-white hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-emerald-500 text-white py-5 rounded-3xl font-bold text-xl mt-4">
            تواصل معنا الآن
          </button>
          
          <div className="flex gap-6 pt-8 border-t border-white/10 w-full justify-center text-white/50">
            <span>FB</span>
            <span>IG</span>
            <span>LI</span>
          </div>
        </div>
      </div>
    </nav>
  );
}