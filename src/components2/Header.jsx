import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen, Sparkles } from "lucide-react";

export const Header = ({ onTogglePage }) => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#overview"); // Mặc định section đầu tiên
  const [scrolled, setScrolled] = useState(false);

  // 🟢 DANH SÁCH MENU CHO TRANG TƯ TƯỞNG (Bạn chỉnh sửa ở đây)
  const navLinks = [
    { href: "#overview", label: "Tổng quan" },
    { href: "#context", label: "Bối cảnh" },
        { href: "#timeline", label: "Dòng thời gian" },
    { href: "#return-home", label: "Trở về quê hương" },
    { href: "#preparation", label: "Chuẩn bị lực lượng" },
    { href: "#famine", label: "Nạn đói 1945" },
    { href: "#august-revolution", label: "Cách mạng tháng Tám" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const scrollY = window.scrollY;
      let current = "#overview";
      navLinks.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section) {
          const sectionTop = section.offsetTop - 120;
          if (scrollY >= sectionTop) current = href;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nút này đang ở trang Tư Tưởng, nên click sẽ về Sổ Tay
  const toggleButtonLabel = "Về Sổ Tay";
  const ToggleIcon = BookOpen;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-red-900/95 backdrop-blur-lg shadow-xl" 
          : "bg-gradient-to-r from-red-800 via-red-700 to-red-800"
      } border-b-2 border-yellow-500`}
    >
      <div className="max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 xl:px-8 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="relative w-9 h-9 md:w-10 md:h-10 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
                fill="#FFCD00"
                stroke="#FFD700"
                strokeWidth="2"
              />
            </svg>
          </div>
           <div className="flex flex-col leading-tight">
            <h1 className="text-[18px] md:text-[20px] font-bold text-yellow-400 tracking-wide font-serif">
              Tư Tưởng Hồ Chí Minh
            </h1>
            <span className="text-[11px] md:text-[12px] text-yellow-200/80 tracking-wider uppercase">
              Di sản vô giá của dân tộc
            </span>
          </div>
        </motion.div>

        {/* Menu desktop */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center gap-6 xl:gap-8 2xl:gap-10">
            {navLinks.map(({ href, label }) => (
              <li key={href} className="list-none">
                <motion.a
                  href={href}
                  className={`relative group transition-colors duration-200 py-2 px-0 whitespace-nowrap ${
                    activeSection === href 
                      ? "text-yellow-400" 
                      : "text-white hover:text-yellow-300"
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="tracking-normal">{label}</span>
                  <span
                    className={`absolute left-0 -bottom-[6px] h-[2px] bg-yellow-400 transition-all duration-300 ${
                      activeSection === href ? "w-14" : "w-0 group-hover:w-14"
                    }`}
                  />
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <motion.button
          onClick={onTogglePage}
          className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold px-5 py-2 rounded-full transition-all shadow-lg ml-4 min-w-[180px] justify-center"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <span>{toggleButtonLabel}</span>
          <ToggleIcon className="w-4 h-4" />
        </motion.button>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg hover:bg-red-700/50 text-yellow-400 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
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
            <ul className="flex flex-col items-stretch px-6 py-6 space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href} className="list-none">
                  <a
                    href={href}
                    className={`block w-full text-lg font-medium transition-colors px-3 py-2 rounded-md ${
                      activeSection === href 
                        ? "text-yellow-400 bg-red-800/40" 
                        : "text-white hover:text-yellow-300 hover:bg-red-800/30"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button 
                  onClick={() => {
                    onTogglePage();
                    setOpen(false);
                  }}
                  className="w-full bg-yellow-500 text-red-900 font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2"
                >
                  {toggleButtonLabel} <ToggleIcon size={18} />
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