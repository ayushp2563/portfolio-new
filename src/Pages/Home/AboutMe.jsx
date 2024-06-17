// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function AboutMe() {
//   AOS.init();
//   return (
//     <section
//       id="AboutMe"
//       className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 py-16 md:py-32 px-4 md:px-28 items-center"
//     >
//       <div data-aos="fade-right" className="md:order-2">
//         <img src="./img/about-me.png" alt="About Me" className="w-full" />
//       </div>
//       <div className="flex flex-col items-start gap-8" data-aos="fade-left">
//         <h1 className="text-4xl md:text-5xl font-bold text-heading-color">
//           About Me
//         </h1>
//         <p className="text-lg md:text-xl text-darkblue">
//           I am a budding web developer with a passion for creating beautiful and
//           functional websites. I have completed courses in React JS and have
//           built a number of personal projects to gain experience in web
//           development. With a keen eye for design and a commitment to delivering
//           high-quality work, I am excited to take on new challenges and grow as
//           a developer.
//         </p>
//       </div>
//     </section>
//   );
// }

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="AboutMe"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 py-10 md:py-32 px-4 md:px-28 items-center bg-[#f1f5f9ad] dark:bg-[#2b2b2c96]   sm:rounded-full rounded-3xl mx-4"
    >
      <div data-aos="fade-right" className="md:order-1">
        <img
          src="./img/about-me.png"
          alt="About Me"
          className="w-full rounded-full"
        />
      </div>
      <div
        className="flex flex-col items-start gap-8 md:order-2"
        data-aos="fade-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          About Me
        </h1>
        <p className="text-lg md:text-xl  text-black dark:text-white">
          I am a budding web developer with a passion for creating beautiful and
          functional websites. I have completed courses in React JS and have
          built a number of personal projects to gain experience in web
          development. With a keen eye for design and a commitment to delivering
          high-quality work, I am excited to take on new challenges and grow as
          a developer.
        </p>
      </div>
    </section>
  );
}
