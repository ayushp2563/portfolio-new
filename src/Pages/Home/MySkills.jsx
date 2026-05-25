"use client"

import React from "react"
import data from "../../data/index.json"
import AOS from "aos"
import "aos/dist/aos.css"
import { Code, Brain, Database, Cloud, Server, Globe, Lock, Zap } from "lucide-react"

const iconMap = {
  "Agentic AI & LLMs": Brain,
  "Enterprise Machine Learning": Database,
  "Creative Frontend Engineering": Globe,
  "Robust Backend Systems": Server,
  "Modern DevOps & Cloud": Cloud,
}

export default function MySkills() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="relative py-20 md:py-24 px-4 md:px-16 overflow-hidden" id="myskills">
      {/* ✅ Ambient Gradient Orbs for Premium Design */}
      <div className="absolute top-1/2 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-12 md:mb-16">
        <h2 className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">MY EXPERTISE</h2>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Skills & Technologies
        </h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {data?.skills?.map((item, index) => {
          const Icon = iconMap[item.title] || Code
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-white/90 to-[#f8fafc]/90 dark:from-[#1a1a1c]/90 dark:to-[#121214]/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-[2rem] overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 group flex flex-col h-full"
            >
              <div className="p-8 flex-grow">
                <div className="w-12 h-12 bg-primary/10 rounded-[1.25rem] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
              <div className="px-8 pb-8 pt-2 border-t border-slate-100 dark:border-zinc-800/60 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-slate-50 dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 rounded-[0.75rem] text-xs font-medium transition-colors duration-300 hover:border-primary/30 hover:text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

