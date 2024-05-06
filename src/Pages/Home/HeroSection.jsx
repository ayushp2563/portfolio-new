import React from "react";
export default function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="flex md:flex md:flex-row flex-col gap-8 pb-20 pt-36 md:pt-60 px-4 md:px-28 items-center justify-center"
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
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-black dark:text-white">Full Stack</span>{" "}
            <br /> Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            I design and build websites that look good and work well.
          </p>

          <button
            className="px-8 py-4 text-white bg-primary border-2 border-primary rounded-2xl mt-2 hover:bg-primary-dark transition-colors duration-300"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1dWS8zW3xx1y9CaIItp_lBsg-psYrCUN7/view?usp=sharing"
              )
            }
          >
            Resume
          </button>
        </div>
      </div>
    </section>
  );
}
