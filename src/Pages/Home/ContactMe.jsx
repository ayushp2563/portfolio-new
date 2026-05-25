"use client"

import { useEffect } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function ContactMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section id="Contact" className="relative py-20 md:py-24 px-4 md:px-16 overflow-hidden">
      {/* ✅ Ambient Gradient Orbs for Liquid Design */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">GET IN TOUCH</h2>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">Contact Me</h1>
          <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-zinc-400">
            I'm currently available for new projects and collaborations. If you have an exciting opportunity or just want
            to say hello, feel free to reach out!
          </p>
        </div>
        <div className="bg-gradient-to-br from-white/90 to-[#f8fafc]/90 dark:from-[#1a1a1c]/90 dark:to-[#121214]/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-[2rem] p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1.5 group">
          <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
            Email me at{" "}
            <a href="mailto:ayushprajapati2563@gmail.com" className="text-primary font-bold hover:underline">
              ayushprajapati2563@gmail.com
            </a>{" "}
            and let's discuss your project!
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="mailto:ayushprajapati2563@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-[1.25rem] hover:bg-primary/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 font-semibold text-xs uppercase tracking-wider"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-p-prajapati/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-[1.25rem] hover:bg-blue-500/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 font-semibold text-xs uppercase tracking-wider"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ayushp2563"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-500/10 dark:bg-zinc-800/60 text-slate-700 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-800/60 rounded-[1.25rem] hover:bg-slate-200 dark:hover:bg-zinc-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 font-semibold text-xs uppercase tracking-wider"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://twitter.com/ayushp2563"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-400/10 text-blue-400 border border-blue-400/20 rounded-[1.25rem] hover:bg-blue-400/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 font-semibold text-xs uppercase tracking-wider"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

