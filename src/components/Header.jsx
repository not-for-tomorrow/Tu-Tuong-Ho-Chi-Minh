import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#banner");

  const navLinks = [
    { href: "#banner", label: "Trang chủ" },
    { href: "#book-section", label: "Sổ 3D" },
    { href: "#bookmark-section", label: "Bookmark" },
    { href: "#about", label: "Giới thiệu" },
    { href: "#contact", label: "Liên hệ" },
  ];

  // Theo dõi cuộn trang để tô sáng menu hiện tại
  useEffect(() => {
    const handleScroll = () => {
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
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* Logo */}
        <motion.h1
          className="text-2xl md:text-3xl font-extrabold tracking-wide cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tu Tuong Ho Chi Minh
        </motion.h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-10 font-medium">
          {navLinks.map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              className={`relative group transition-all duration-200 ${
                activeSection === href ? "text-blue-300" : "text-white"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all ${
                  activeSection === href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </motion.a>
          ))}
        </nav>

        {/* Nút menu mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-white/20 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-medium">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`hover:text-blue-300 transition-colors ${
                      activeSection === href ? "text-blue-300" : "text-white"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
