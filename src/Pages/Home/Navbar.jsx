import { useState } from "react";
import { Link } from "react-scroll";
import { Home, User, Code, Briefcase, Mail, Menu, X, Sun, Moon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

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

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMenu}
        />
      )}

      {/* Main navigation bar */}
      <nav className="relative mx-auto max-w-2xl rounded-2xl bg-white/80 dark:bg-[#121212] backdrop-blur-lg shadow-lg shadow-black/5 ring-1 ring-black/5 dark:ring-white/10">
        {/* Mobile: Compact bar with menu button and dark mode */}
        <div className="md:hidden sticky flex items-center justify-between p-4">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Ayush Prajapati
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:block px-4 pb-4 md:py-4`}>
          <ul className="flex flex-col md:flex-row md:items-center md:justify-around gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  onClick={closeMenu}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={800}
                  className="flex items-center gap-2 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <link.icon size={20} />
                  <span className="font-medium">{link.name}</span>
                </Link>
              </li>
            ))}
            {/* Desktop: Dark mode toggle */}
            <li className="hidden md:block">
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-2 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <>
                    <Sun size={20} />
                    <span className="font-medium">Light</span>
                  </>
                ) : (
                  <>
                    <Moon size={20} />
                    <span className="font-medium">Dark</span>
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