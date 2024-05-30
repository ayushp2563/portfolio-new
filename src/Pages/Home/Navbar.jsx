import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Darkmode from "../Darkmode";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <>
      <nav
        className={`md:flex md:flex-row flex flex-col items-center justify-start fixed top-0 left-0 right-0 z-10 bg-[#f1f5f9ad] dark:bg-[#2b2b2cbf] backdrop-blur-sm md:rounded-full rounded-2xl mx-auto my-8 max-w-max py-6 px-6 md:px-14 shadow-lg  ${
          navActive ? "active" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-black dark:text-[#ffffff] ">
            Ayush Prajapati
          </h3>
          <div
            className={`md:hidden cursor-pointer p-2  ${
              navActive ? "active" : ""
            }`}
            onClick={toggleNav}
          >
            <span
              className={`block h-1 w-6 mb-1 bg-black dark:bg-white rounded-2xl transition-transform duration-300 ${
                navActive ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 mb-1 bg-black dark:bg-white rounded-2xl transition-opacity duration-300 ${
                navActive ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-black dark:bg-white rounded-2xl transition-transform duration-300 ${
                navActive ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </div>
        <div
          className={`md:flex md:items-center md:justify-between md:gap-20 transition-transform duration-500  ${
            navActive ? "active" : "hidden"
          }`}
        >
          <ul className="md:flex md:gap-4 ">
            <li>
              <Link
                onClick={closeMenu}
                activeClass="dark:text-primary text-primary "
                spy={true}
                smooth={true}
                offset={-50}
                duration={800}
                to="HeroSection"
                className="block py-2 px-4 md:pl-10 text-black dark:text-white font-semibold hover:text-primary  dark:hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="dark:text-primary text-primary "
                spy={true}
                smooth={true}
                offset={-50}
                duration={800}
                to="AboutMe"
                className="block py-2 px-4  text-black dark:text-white font-semibold hover:text-primary  dark:hover:text-primary transition-colors duration-300 cursor-pointer "
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="dark:text-primary text-primary  "
                spy={true}
                smooth={true}
                offset={-50}
                duration={800}
                to="myskills"
                className="block py-2 px-4 text-black dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="dark:text-primary text-primary "
                spy={true}
                smooth={true}
                offset={-50}
                duration={800}
                to="MyPortfolio"
                className="block py-2 px-4 text-black dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="dark:text-primary text-primary "
                spy={true}
                smooth={true}
                offset={-50}
                duration={800}
                to="Contact"
                className="block py-2 px-4 text-black dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                spy={true}
                smooth={true}
                offset={-50}
                duration={800}
                className="block  py-2 px-4 text-black dark:text-white font-semibold hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                <Darkmode />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>
        {`
          @media screen and (max-width: 768px) {
            .navbar {
              margin: 0 auto; /* This line fixes the margin issue on mobile */
            }
          }
        `}
      </style>
    </>
  );
}

export default Navbar;
