import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Home, User, Code, Briefcase, Mail, Menu, X, Sun, Moon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("HeroSection");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: "Home", to: "HeroSection", icon: Home },
    { name: "About", to: "AboutMe", icon: User },
    { name: "Skills", to: "myskills", icon: Code },
    { name: "Projects", to: "MyPortfolio", icon: Briefcase },
    { name: "Contact", to: "Contact", icon: Mail },
  ];

  // ✅ Custom IntersectionObserver & Bottom-Scroll Listener for robust spy activation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -25% 0px", // triggers when section dominates viewport center
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["HeroSection", "AboutMe", "myskills", "MyPortfolio", "Contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      // Force Contact active at the very bottom of scroll page
      if (scrollPosition >= scrollHeight - 120) {
        setActiveSection("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:pb-6">
      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 dark:bg-black/30 backdrop-blur-md transition-all duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Main navigation bar (iOS Liquid Glass Dock) */}
      <nav className="relative mx-auto max-w-2xl rounded-[2rem] bg-white/40 dark:bg-[#0c0c0e]/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
        {/* Mobile: Compact bar with menu button and dark mode */}
        <div className="md:hidden sticky flex items-center justify-between p-4">
          <span className="font-bold tracking-tight text-slate-800 dark:text-zinc-200 pl-2">
            Ayush Prajapati
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-[1.25rem] bg-white/50 dark:bg-zinc-900/50 text-slate-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 border border-white/40 dark:border-white/5 transition-all duration-300 active:scale-95"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2.5 rounded-[1.25rem] bg-white/50 dark:bg-zinc-900/50 text-slate-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 border border-white/40 dark:border-white/5 transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:block px-4 pb-4 md:py-3.5`}>
          <ul className="flex flex-col md:flex-row md:items-center md:justify-around gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.to;
              return (
                <li key={link.name} className="w-full md:w-auto">
                  <Link
                    onClick={closeMenu}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={800}
                    className={`flex items-center gap-2 p-3 rounded-[1.25rem] text-slate-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary hover:bg-white/60 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer active:scale-95 ${
                      isActive
                        ? "bg-white/80 dark:bg-zinc-800/80 shadow-md shadow-black/5 border border-white/50 dark:border-white/5 text-primary dark:text-white"
                        : ""
                    }`}
                  >
                    <link.icon size={18} />
                    <span className="font-semibold text-sm tracking-wide">{link.name}</span>
                  </Link>
                </li>
              );
            })}
            {/* Desktop: Dark mode toggle */}
            <li className="hidden md:block">
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 p-3 rounded-[1.25rem] text-slate-700 dark:text-zinc-300 hover:text-primary dark:hover:text-primary hover:bg-white/60 dark:hover:bg-white/5 transition-all duration-300 cursor-pointer active:scale-95"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <>
                    <Sun size={18} />
                    <span className="font-semibold text-sm tracking-wide">Light</span>
                  </>
                ) : (
                  <>
                    <Moon size={18} />
                    <span className="font-semibold text-sm tracking-wide">Dark</span>
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;