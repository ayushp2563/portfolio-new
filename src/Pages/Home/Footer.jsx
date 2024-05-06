import { Link } from "react-scroll";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
  return (
    <footer className="py-20 px-4 md:px-28">
      <hr className="border-gray-300 dark:border-gray-600 mb-8" />
      <div className="flex flex-col md:flex-row md:items-center justify-between items-center mb-8">
        <p className="text-lg text-gray-800 dark:text-gray-300 font-normal mb-4 md:mb-0">
          Made with 💛 by Ayush
        </p>
        <div className="flex flex-col md:flex md:flex-row  md:justify-between">
          <div className="flex md:flex-row items-center justify-center gap-4">
            <FaXTwitter
              className="cursor-pointer hover:text-primary dark:hover:text-primary transition-colors duration-300"
              onClick={() =>
                window.open("https://twitter.com/ayushp2563", "_blank")
              }
            />
            <SlSocialLinkedin
              className="cursor-pointer hover:text-primary dark:hover:text-primary transition-colors duration-300"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ayush-p-prajapati/",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
