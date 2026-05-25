
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code2, Brain, Database, Cloud, Sparkles } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 bg-white/60 dark:bg-zinc-900/35 backdrop-blur-md p-5 rounded-[1.5rem] border border-white/40 dark:border-zinc-800/30 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:bg-white/80 dark:hover:bg-zinc-900/50 group">
    <div className="p-3 bg-primary/10 rounded-[1.25rem] text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h3 className="font-bold text-gray-800 dark:text-white text-sm mb-1">{title}</h3>
      <p className="text-xs leading-relaxed text-slate-500 dark:text-zinc-400">{description}</p>
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
      icon: Brain,
      title: "Generative AI & LLMs",
      description: "Orchestrating large language models, agentic workflows, and RAG architectures."
    },
    {
      icon: Code2,
      title: "Full Stack Engineering",
      description: "Building fast, dynamic, and state-managed frontend and backend ecosystems."
    },
    {
      icon: Database,
      title: "Deep Learning & MLOps",
      description: "Training neural models, engineering data layers, and creating scalable AI microservices."
    },
    {
      icon: Sparkles,
      title: "Creative UI/UX Design",
      description: "Designing sleek transitions, micro-animations, and visually stunning digital assets."
    }
  ];

  return (
    <section
      id="AboutMe"
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-10 md:py-24 px-4 md:px-16 items-center bg-gradient-to-br from-white/30 to-white/10 dark:from-zinc-950/20 dark:to-zinc-950/5 backdrop-blur-xl border border-slate-200/40 dark:border-zinc-800/40 rounded-[2.5rem] md:rounded-[3rem] mx-4 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      <div data-aos="fade-right" className="md:order-1 relative">
        <div className="relative">
          <img
            src="./img/about-me.png"
            alt="About Me"
            className="w-full rounded-[2rem] shadow-md border border-white/20"
          />
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/20 to-transparent" />
        </div>

        {/* Experience Highlight */}
        <div className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-5 rounded-[1.75rem] border border-white/50 dark:border-zinc-800/50 shadow-xl max-w-[150px] transition-transform duration-300 hover:scale-105">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-primary leading-none mb-1">3+</div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-zinc-400">Years of Experience</div>
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
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            I'm a Full Stack AI Engineer specializing in building intelligent conversational agents, 
            enterprise-grade machine learning pipelines, and native macOS utilities. 
            My work centers on turning complex algorithmic logic into seamless, high-performance software, 
            as demonstrated by systems like the Canada PR Chatbot, the Enterprise AI framework, and 
            the native macOS calendar alarms app Prelude.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap gap-6 mt-4">
          <div className="bg-white/30 dark:bg-zinc-900/20 px-4 py-2.5 rounded-xl border border-white/40 dark:border-zinc-800/40 shadow-sm transition-transform duration-300 hover:scale-105">
            <div className="text-2xl font-extrabold text-primary">30%</div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">Latency Reduction</div>
          </div>
          <div className="bg-white/30 dark:bg-zinc-900/20 px-4 py-2.5 rounded-xl border border-white/40 dark:border-zinc-800/40 shadow-sm transition-transform duration-300 hover:scale-105">
            <div className="text-2xl font-extrabold text-primary">85%</div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">Time Savings</div>
          </div>
          <div className="bg-white/30 dark:bg-zinc-900/20 px-4 py-2.5 rounded-xl border border-white/40 dark:border-zinc-800/40 shadow-sm transition-transform duration-300 hover:scale-105">
            <div className="text-2xl font-extrabold text-primary">98%</div>
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">RAG Accuracy</div>
          </div>
        </div>
      </div>
    </section>
  );
}