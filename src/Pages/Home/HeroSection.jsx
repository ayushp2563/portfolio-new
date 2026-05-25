
import React, { useEffect, useState, useCallback } from 'react';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

const TypeWriter = ({ words, speed = 100 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed]);

  return (
    <span className="font-mono">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

const TechBadge = ({ children }) => (
  <span className="px-3.5 py-1.5 text-xs font-semibold rounded-[1rem] bg-slate-50 dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 transition-colors duration-300 hover:border-primary/30 hover:text-primary">
    {children}
  </span>
);

const EarthGlobe = () => {
  const skills = [
    { name: 'Next.js', category: 'Frontend', level: 'Advanced' },
    { name: 'Python', category: 'Backend/AI', level: 'Expert' },
    { name: 'LangChain', category: 'AI/LLM', level: 'Expert' },
    { name: 'OpenAI API', category: 'AI/LLM', level: 'Advanced' },
    { name: 'FastAPI', category: 'Backend', level: 'Advanced' },
    { name: 'PyTorch', category: 'AI/ML', level: 'Intermediate' },
    { name: 'Docker', category: 'DevOps', level: 'Advanced' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert' }
  ];

  const [rotation, setRotation] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const animate = () => {
      setRotation(prev => (prev + 0.2) % 360);
    };

    const interval = setInterval(animate, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Earth Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-64 h-64">
          {/* Main Earth sphere */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800">
            {/* Continents overlay - simplified representation */}
            <div className="absolute inset-0 rounded-full opacity-30 dark:opacity-40"
              style={{
                background: `radial-gradient(circle at 30% 50%, 
                     rgba(34, 197, 94, 0.8) 0%, 
                     transparent 60%),
                     radial-gradient(circle at 70% 50%, 
                     rgba(34, 197, 94, 0.8) 0%, 
                     transparent 60%)`
              }}
            />
          </div>

          {/* Atmosphere glow */}
          <div className="absolute -inset-2 rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-md" />

          {/* Cloud layer */}
          <div className="absolute inset-0 rounded-full bg-white/20 dark:bg-white/10 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle at 50% 50%, 
                   rgba(255, 255, 255, 0.2) 0%, 
                   transparent 70%)`
            }}
          />
        </div>
      </div>

      {/* Orbital ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80">
          <div
            className="absolute inset-0 rounded-full border-2 border-primary/20 dark:border-primary/10"
            style={{
              transform: `rotate(${rotation}deg)`,
              borderStyle: 'dashed'
            }}
          />
        </div>
      </div>

      {/* Floating Skills */}
      {skills.map((skill, index) => {
        const angle = (index * (360 / skills.length) + rotation) * (Math.PI / 180);
        const radius = 160;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const isHovered = hoveredSkill === skill.name;

        return (
          <div
            key={skill.name}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${isHovered ? 'z-20' : ''
              }`}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              zIndex: Math.sin(angle) > 0 ? 2 : 0,
              opacity: (Math.sin(angle) + 2) / 3
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className={`px-3 py-1 text-sm font-medium rounded-full bg-background/80 backdrop-blur-sm border transition-all duration-300 ${isHovered ? 'border-primary scale-125' : 'border-primary/20'
              }`}>
              {skill.name}
              {isHovered && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 p-2 rounded-lg bg-background/95 backdrop-blur-sm border border-primary/20 shadow-lg">
                  <p className="text-xs font-medium text-primary">{skill.category}</p>
                  <p className="text-xs text-muted-foreground">{skill.level}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const HeroSection = () => {
  const roles = [
    "AI Agent Systems Engineer",
    "Full Stack Developer",
    "Generative AI Specialist",
    "Creative Frontend Engineer"
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center px-4 py-8 md:py-0 overflow-hidden " id="HeroSection">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-medium text-primary">Welcome to my digital space</h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Hey, I'm <span className="text-primary">Ayush Prajapati</span>
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
                <TypeWriter words={roles} />
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Passionate about building intelligent web applications, scaling generative AI products, and designing next-generation interactive UIs.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start ">
              <TechBadge className="dark:text-white">Python</TechBadge>
              <TechBadge className="dark:text-white">Next.js</TechBadge>
              <TechBadge className="dark:text-white">Generative AI</TechBadge>
              <TechBadge className="dark:text-white">LangChain</TechBadge>
              <TechBadge className="dark:text-white">Docker</TechBadge>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-[1.5rem] bg-primary text-primary-foreground hover:opacity-95 shadow-md shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 active:scale-98"
                onClick={() => window.open("https://drive.google.com/file/d/1dWS8zW3xx1y9CaIItp_lBsg-psYrCUN7/view?usp=sharing", "_blank")}
              >
                View Resume
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4">
                <a href="https://github.com/ayushp2563" target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:bg-muted transition-colors text-slate-600 dark:text-zinc-400 hover:text-primary dark:hover:text-white active:scale-90">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/ayush-p-prajapati" target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:bg-muted transition-colors text-slate-600 dark:text-zinc-400 hover:text-primary dark:hover:text-white active:scale-90">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/ayushp2563" target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-full hover:bg-muted transition-colors text-slate-600 dark:text-zinc-400 hover:text-primary dark:hover:text-white active:scale-90">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Globe */}
          <div className="hidden lg:block relative h-[500px]">
            <div className="absolute inset-0 rounded-[2.5rem] bg-white/40 dark:bg-zinc-950/20 backdrop-blur-2xl border border-white/40 dark:border-zinc-800/40 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="p-0 h-full">
                <div className="h-full bg-gradient-to-br from-primary/5 to-transparent">
                  <EarthGlobe />
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-primary/10 via-primary/3 to-transparent blur-3xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;