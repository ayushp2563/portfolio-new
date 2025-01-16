// import { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import Darkmode from "../Darkmode";

// function Navbar() {
//   const [navActive, setNavActive] = useState(false);

//   const toggleNav = () => {
//     setNavActive(!navActive);
//   };

//   const closeMenu = () => {
//     setNavActive(false);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 500) {
//         closeMenu();
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (window.innerWidth <= 1200) {
//       closeMenu();
//     }
//   }, []);

//   return (
//     <>
//       <nav
//         className={`md:flex md:flex-row flex flex-col items-center justify-start fixed top-0 left-0 right-0 z-10 bg-[#f1f5f9ad] dark:bg-[#2b2b2cbf] backdrop-blur-sm md:rounded-full rounded-2xl mx-auto my-8 max-w-max py-6 px-6 md:px-14 shadow-lg  ${
//           navActive ? "active" : ""
//         }`}
//       >
//         <div className="flex items-center justify-between">
//           <h3 className="text-2xl font-bold text-black dark:text-[#ffffff] ">
//             Ayush Prajapati
//           </h3>
//           <div
//             className={`md:hidden cursor-pointer p-2  ${
//               navActive ? "active" : ""
//             }`}
//             onClick={toggleNav}
//           >
//             <span
//               className={`block h-1 w-6 mb-1 bg-black dark:bg-white rounded-2xl transition-transform duration-300 ${
//                 navActive ? "transform rotate-45 translate-y-2" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-1 w-6 mb-1 bg-black dark:bg-white rounded-2xl transition-opacity duration-300 ${
//                 navActive ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-1 w-6 bg-black dark:bg-white rounded-2xl transition-transform duration-300 ${
//                 navActive ? "transform -rotate-45 -translate-y-2" : ""
//               }`}
//             ></span>
//           </div>
//         </div>
//         <div
//           className={`md:flex md:items-center md:justify-between md:gap-20 transition-transform duration-500  ${
//             navActive ? "active" : "hidden"
//           }`}
//         >
//           <ul className="md:flex md:gap-4 ">
//             <li>
//               <Link
//                 onClick={closeMenu}
//                 activeClass="scale-125 transition-transform duration-300 "
//                 spy={true}
//                 smooth={true}
//                 offset={-50}
//                 duration={800}
//                 to="HeroSection"
//                 className="block py-2 px-4 md:pl-10 text-black dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={closeMenu}
//                 activeClass="scale-125 transition-transform duration-300 "
//                 spy={true}
//                 smooth={true}
//                 offset={-50}
//                 duration={800}
//                 to="AboutMe"
//                 className="block py-2 px-4  text-black dark:text-white font-semibold hover:text-primary  dark:hover:text-primary transition-colors duration-300 cursor-pointer "
//               >
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={closeMenu}
//                 activeClass="scale-125 transition-transform duration-300  "
//                 spy={true}
//                 smooth={true}
//                 offset={-50}
//                 duration={800}
//                 to="myskills"
//                 className="block py-2 px-4 text-black dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer"
//               >
//                 Skills
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={closeMenu}
//                 activeClass="scale-125 transition-transform duration-300 "
//                 spy={true}
//                 smooth={true}
//                 offset={-50}
//                 duration={800}
//                 to="MyPortfolio"
//                 className="block py-2 px-4 text-black dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer"
//               >
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={closeMenu}
//                 activeClass="scale-125 transition-transform duration-300 "
//                 spy={true}
//                 smooth={true}
//                 offset={-50}
//                 duration={800}
//                 to="Contact"
//                 className="block py-2 px-4 text-black dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer"
//               >
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link
//                 onClick={closeMenu}
//                 spy={true}
//                 smooth={true}
//                 offset={-50}
//                 duration={800}
//                 className="block  py-2 px-4 text-black dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer"
//               >
//                 <Darkmode />
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <style jsx>
//         {`
//           @media screen and (max-width: 768px) {
//             .navbar {
//               margin: 0 auto; /* This line fixes the margin issue on mobile */
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// }

// export default Navbar;

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