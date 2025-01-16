import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingMachine = ({
  text,
  speed = 70,
  fontSize = "text-4xl",
  color = "text-gray-800",
  fontStyle = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed); // Adjust typing speed for smooth effect

      return () => clearTimeout(timeoutId);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="flex items-start justify-start min-h-22">
      <motion.div
        className={`font-mono ${fontSize} ${color} ${fontStyle}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            {char}
          </motion.span>
        ))}
        {!isComplete && (
          <motion.span
            className="animate-blink" // Add Tailwind Config
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            |
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

const ExampleUsageTypingMachine = () => {
  return (
    <div className="min-h-22 flex flex-col items-start justify-start space-y-4 text-wrap">
      <TypingMachine
        text="Full Stack Developer"
        speed={70}
        fontSize="text-6xl"
        color="text-black dark:text-white"
        fontStyle=""
      />
    </div>
  );
};
export default function HeroSection() {
  return (
    <section
      id="HeroSection"
      className=" flex md:flex md:flex-row flex-col gap-8 pb-20 pt-28 md:pt-44 px-4 md:px-28 items-center justify-center "
    >
      <div className="flex flex-col md:flex md:flex-row items-start gap-8 md:order-1">
        <div className="flex justify-center md:order-2">
          <img
            src="./img/hero_img.png"
            alt="Hero Section"
            className=" md:max-w-lg rounded-2xl bg-transparent"
          />
        </div>
        <div className="flex flex-col items-start gap-6">
          <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white flex items-start">
            Hey, I'm Ayush Prajapati
          </p>
          <ExampleUsageTypingMachine />
          <p className="text-lg md:text-xl text-gray-700 dark:text-white">
            I design and build websites that look good and work well.
          </p>

          <div className="flex flex-row gap-8">
            <button
              className="px-8 py-4 text-white bg-primary border-2 border-primary rounded-2xl mt-2 hover:bg-primary-dark transition-transform duration-300 hover:scale-110 "
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1dWS8zW3xx1y9CaIItp_lBsg-psYrCUN7/view?usp=sharing"
                )
              }
            >
              Resume
            </button>

            <FaXTwitter
              className="cursor-pointer hover:text-primary dark:hover:text-primary transition-colors duration-300 mt-7 scale-150 "
              onClick={() =>
                window.open("https://twitter.com/ayushp2563", "_blank")
              }
            />
            <SlSocialLinkedin
              className="cursor-pointer hover:text-primary dark:hover:text-primary transition-colors duration-300 mt-7 scale-150 "
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
    </section>
  );
}
