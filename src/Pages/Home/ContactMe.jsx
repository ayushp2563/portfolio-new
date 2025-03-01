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
    <section id="Contact" className="relative py-20 md:py-24 px-4 md:px-16">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-lg font-medium text-primary mb-2">GET IN TOUCH</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">Contact Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          I'm currently available for new projects and collaborations. If you have an exciting opportunity or just want
          to say hello, feel free to reach out!
        </p>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <p className="text-lg text-gray-800 dark:text-gray-200 mb-6">
            Email me at{" "}
            <a href="mailto:ayushprajapati2563@gmail.com" className="text-primary hover:underline">
              ayushprajapati2563@gmail.com
            </a>{" "}
            and let's discuss your project!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:ayushprajapati2563@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-p-prajapati/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full hover:bg-blue-500/20 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ayushp2563"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500/10 text-gray-500 dark:text-gray-400 rounded-full hover:bg-gray-500/20 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://twitter.com/ayushp2563"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/10 text-blue-400 rounded-full hover:bg-blue-400/20 transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

