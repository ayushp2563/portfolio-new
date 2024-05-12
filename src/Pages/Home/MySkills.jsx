import React from "react";
import data from "../../data/index.json";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MySkills() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-20 md:py-24 px-4 md:px-28" id="myskills">
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white text-start">
          Skills
        </h1>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className="bg-[#e2e8f0] dark:bg-[#242424] dark:elevation-10 rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 z-10"
          >
            <div className="flex justify-center items-center p-6">
              <img src={item.src} alt={item.title} className="w-20 h-20" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-md text-black dark:text-white">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
