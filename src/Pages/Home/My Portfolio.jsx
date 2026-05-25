"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, Code2 } from "lucide-react"
import data from "../../data/index.json"
import AOS from "aos"
import "aos/dist/aos.css"

// ✅ ProjectCard Component (Upgraded to Premium Visuals)
export function ProjectCard({ title, description, tags, githubUrl, liveUrl, image }) {
  return (
    <div className="bg-gradient-to-br from-white/90 to-[#f8fafc]/90 dark:from-[#1a1a1c]/90 dark:to-[#121214]/90 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-[2.25rem] shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 group flex flex-col h-full">
      <div className="p-4 pb-0">
        <div className="relative overflow-hidden aspect-video rounded-[1.5rem] bg-slate-100/50 dark:bg-zinc-950/20 border border-slate-200/40 dark:border-zinc-800/20">
          <img 
            src={image || "/placeholder.svg"} 
            alt={title} 
            className={`w-full h-full ${title === "Prelude" ? "object-contain bg-zinc-900/60 dark:bg-zinc-950/60 p-2" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-105`} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
            <span className="text-white text-xs font-semibold tracking-wider uppercase px-2.5 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              View Details
            </span>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2.5 py-1 bg-slate-50 dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 rounded-[0.75rem] text-xs font-medium transition-colors duration-300 hover:border-primary/30 hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-6 mt-auto pt-2 border-t border-slate-100 dark:border-zinc-800/60">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-primary transition-all duration-300 hover:translate-x-0.5 group/btn"
            >
              <Github className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-primary transition-all duration-300 hover:translate-x-0.5 group/btn"
            >
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ✅ MyPortfolio Component (Upgraded with Category Filters and Premium Layout)
export default function MyPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
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

  // ✅ Get categories dynamically
  const categories = ["All", "AI & Agents", "Web Apps", "macOS Apps"]

  // ✅ Filter projects based on selected category
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  // ✅ Handle View More button click
  const handleViewMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length))
  }

  // ✅ Handle Category selection change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setVisibleProjects(3) // Reset count to initial 3 for the new filter context
  }

  return (
    <section className="relative px-4 md:px-16 py-20 md:py-24 overflow-hidden" id="MyPortfolio">
      {/* ✅ Ambient Gradient Orbs for Premium Design */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-16">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">MY WORK</h2>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Featured Projects
          </h1>
        </div>
        <div>
          <a
            href="https://github.com/ayushp2563"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Github className="w-5 h-5" />
            Visit My GitHub
          </a>
        </div>
      </div>

      {/* ✅ Dynamic Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16">
        {categories.map((category) => {
          const isActive = selectedCategory === category
          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/10 scale-105"
                  : "bg-slate-100 dark:bg-zinc-900/60 text-slate-600 dark:text-zinc-400 border border-transparent dark:border-zinc-800/40 hover:bg-slate-200 dark:hover:bg-zinc-800"
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      {/* ✅ Project Cards Grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
        data-aos="fade-up" 
        data-aos-duration="1000"
      >
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={project.id || index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            image={project.src}
          />
        ))}
      </div>

      {/* ✅ Empty State when no projects match */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-500 dark:text-zinc-500">No projects found in this category.</p>
        </div>
      )}

      {/* ✅ View More Button */}
      {visibleProjects < filteredProjects.length && (
        <div className="relative z-10 mt-12 flex justify-center">
          <button
            onClick={handleViewMore}
            className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-95 shadow-md shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Code2 className="w-5 h-5" />
            View More Projects
          </button>
        </div>
      )}
    </section>
  )
}
