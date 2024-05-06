import React from "react";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Darkmode = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="flex items-center justify-center content-center  
      "
      onClick={handleThemeSwitch}
    >
      {theme === "dark" ? (
        <>
          <FaSun className="mr-2 text-yellow-400" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <FaMoon className="mr-2 text-gray-600" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default Darkmode;
