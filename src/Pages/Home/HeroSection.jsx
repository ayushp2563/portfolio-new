
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
  <span className="px-3 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/25 dark:text-white">
    {children}
  </span>
);

const EarthGlobe = () => {
  const skills = [
    { name: 'React', category: 'Frontend', level: 'Advanced' },
    { name: 'Python', category: 'Backend', level: 'Expert' },
    { name: 'Node.js', category: 'Backend', level: 'Advanced' },
    { name: 'NumPy', category: 'AI/ML', level: 'Intermediate' },
    { name: 'MongoDB', category: 'Database', level: 'Advanced' },
    { name: 'Next JS', category: 'Frontend', level: 'Intermediate' },
    { name: 'Docker', category: 'DevOps', level: 'Advanced' },
    { name: 'JavaScript', category: 'Frontend', level: 'Advanced' }
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
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Problem Solver",
    "Tech Explorer"
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
              Passionate about building intelligent web applications and exploring the frontiers of AI/ML.
              Turning complex problems into elegant solutions.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start ">
              <TechBadge className="dark:text-white">Python</TechBadge>
              <TechBadge className="dark:text-white">NumPy</TechBadge>
              <TechBadge className="dark:text-white">React</TechBadge>
              <TechBadge className="dark:text-white">Node.js</TechBadge>
              <TechBadge className="dark:text-white">Machine Learning</TechBadge>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => window.open("https://drive.google.com/file/d/1dWS8zW3xx1y9CaIItp_lBsg-psYrCUN7/view?usp=sharing", "_blank")}
              >
                View Resume
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4">
                <a href="https://github.com/ayushp2563" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/ayush-p-prajapati" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/ayushp2563" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-muted transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Globe */}
          <div className="hidden lg:block relative h-[500px]">
            <Card className="absolute inset-0 overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="h-full bg-gradient-to-br from-primary/5 to-transparent">
                  <EarthGlobe />
                </div>
              </CardContent>
            </Card>

            {/* Background decoration */}
            <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent blur-2xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;