
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code2, Brain, Database, Cloud, TrendingUpDown } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-3 bg-white/50 dark:bg-white/5 backdrop-blur-sm p-4 rounded-lg">
    <div className="p-2 bg-primary/10 rounded-lg">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <h3 className="font-medium text-black dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export default function AboutMe() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const skills = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies"
    },
    {
      icon: Brain,
      title: "AI/ML Development",
      description: "Creating intelligent solutions using cutting-edge ML frameworks"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing robust data pipelines and architectures"
    },
    {
      icon: TrendingUpDown,
      title: "Data Analysis / Data Science",
      description: "Conducting in-depth research and analysis of data"
    }
  ];

  return (
    <section
      id="AboutMe"
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-10 md:py-24 px-4 md:px-16 items-center bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] dark:from-[#1e1e1e] dark:to-[#2b2b2c] rounded-3xl mx-4 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      <div data-aos="fade-right" className="md:order-1 relative">
        <div className="relative">
          <img
            src="./img/about-me.png"
            alt="About Me"
            className="w-full rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
        </div>

        {/* Experience Highlight */}
        <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">3+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Years of Experience</div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-start gap-8 md:order-2"
        data-aos="fade-left"
      >
        <div>
          <h2 className="text-lg font-medium text-primary mb-2">ABOUT ME</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
            Transforming Ideas into Intelligent Solutions
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm a passionate Full Stack Developer and AI/ML enthusiast with a strong
            foundation in building intelligent web applications. My journey spans from
            developing responsive front-end interfaces to implementing complex machine
            learning models. I combine technical expertise with creative problem-solving
            to deliver innovative solutions that make a difference.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap gap-8 mt-4">
          <div>
            <div className="text-3xl font-bold text-primary">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          {/* <div>
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">ML Models Deployed</div>
          </div> */}
          <div>
            <div className="text-3xl font-bold text-primary">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Tech Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
}