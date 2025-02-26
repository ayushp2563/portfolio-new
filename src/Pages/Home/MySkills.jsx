"use client"

import React from "react"
import data from "../../data/index.json"
import AOS from "aos"
import "aos/dist/aos.css"
import { Code, Brain, Database, Cloud, Server, Globe, Lock, Zap } from "lucide-react"

const iconMap = {
  "Web Development": Code,
  "Machine Learning": Brain,
  "Data Engineering": Database,
  "Cloud Computing": Cloud,
  "Backend Development": Server,
  "Frontend Development": Globe,
  Cybersecurity: Lock,
  DevOps: Zap,
}

export default function MySkills() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="relative py-20 md:py-24 px-4 md:px-16" id="myskills">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      <div className="mb-12 md:mb-16">
        <h2 className="text-lg font-medium text-primary mb-2">MY EXPERTISE</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Skills & Technologies</h1>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {data?.skills?.map((item, index) => {
          const Icon = iconMap[item.title] || Code
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] dark:from-[#1e1e1e] dark:to-[#2b2b2c] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
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

