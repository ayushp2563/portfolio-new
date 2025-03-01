"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, Code2 } from "lucide-react"
import data from "../../data/index.json"
import AOS from "aos"
import "aos/dist/aos.css"

// ✅ ProjectCard Component
export function ProjectCard({ title, description, tags, githubUrl, liveUrl, image }) {
  return (
    <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] dark:from-[#1e1e1e] dark:to-[#2b2b2c] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              <Github className="w-5 h-5" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ✅ MyPortfolio Component
export default function MyPortfolio() {
  const [visibleProjects, setVisibleProjects] = useState(3)
  const [projects, setProjects] = useState([])

  // ✅ Initialize AOS and load projects
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    setProjects(data?.portfolio || [])
  }, [])

  // ✅ Handle View More button click
  const handleViewMore = () => {
    // console.log("Previous visible projects:", visibleProjects)
    // console.log("Total projects:", projects.length)

    setVisibleProjects((prev) => {
      const newCount = Math.min(prev + 3, projects.length)
      // console.log("New visible projects:", newCount)
      return newCount
    })
  }

  return (
    <section className="relative px-4 md:px-16 py-20 md:py-24" id="MyPortfolio">
      {/* ✅ Background Decoration */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />

      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="mb-8 md:mb-0">
          <h2 className="text-lg font-medium text-primary mb-2">MY WORK</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Featured Projects</h1>
        </div>
        <div>
          <a
            href="https://github.com/ayushp2563"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white dark:text-black rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            Visit My GitHub
          </a>


        </div>
      </div>

      {/* ✅ Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="1000">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            image={project.src}
          />
        ))}
      </div>

      {/* ✅ View More Button */}
      {visibleProjects < projects.length && (
        <div className="relative z-10 mt-12 flex justify-center">
          <button
            onClick={handleViewMore}
            className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Code2 className="w-5 h-5" />
            View More Projects
          </button>
        </div>
      )}

    </section>
  )
}
