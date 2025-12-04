// components/Header.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#banner");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "#banner", label: "Trang chủ" },
    { href: "#introduction", label: "Giới thiệu" },
    { href: "#book-section", label: "Sổ tay 3D" },
    { href: "#thought", label: "Tư tưởng" },
    { href: "#description", label: "Mô tả sản phẩm" },
    { href: "#contact", label: "Liên hệ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const scrollY = window.scrollY;
      let current = "#banner";
      navLinks.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (scrollY >= sectionTop) current = href;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-red-900/95 backdrop-blur-lg shadow-xl" 
          : "bg-gradient-to-r from-red-800 via-red-700 to-red-800"
      } border-b-2 border-yellow-500`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo với ngôi sao vàng */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {/* Ngôi sao vàng 5 cánh */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
                fill="#FFCD00"
                stroke="#FFD700"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-yellow-400 tracking-wide font-serif">
              Tư Tưởng Hồ Chí Minh
            </h1>
            <span className="text-xs text-yellow-200/80 tracking-widest uppercase">
              Di sản vô giá của dân tộc
            </span>
          </div>
        </motion.div>

        {/* Menu desktop */}
        <nav className="hidden lg:flex space-x-8 font-medium">
          {navLinks.map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              className={`relative group transition-all duration-200 py-2 ${
                activeSection === href 
                  ? "text-yellow-400" 
                  : "text-white hover:text-yellow-300"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${
                  activeSection === href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold px-5 py-2 rounded-full transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Khám phá ngay</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg hover:bg-red-700/50 text-yellow-400 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="lg:hidden bg-red-900/98 backdrop-blur-xl border-t border-yellow-500/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <ul className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`text-lg font-medium transition-colors ${
                      activeSection === href 
                        ? "text-yellow-400" 
                        : "text-white hover:text-yellow-300"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <button className="bg-yellow-500 text-red-900 font-bold px-6 py-3 rounded-full">
                  Khám phá ngay
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;