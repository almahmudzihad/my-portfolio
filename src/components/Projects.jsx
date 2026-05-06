'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Qurbani Hat",
    category: "Next.js / E-commerce",
    description: "A specialized online marketplace for cows and goats, simplifying the Qurbani animal purchase experience with modern tech.",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2070&auto=format&fit=crop",
    live: "https://qurbanihat-nextjs.vercel.app/animal",
    github: "https://github.com/almahmudzihad/qurbanihat-nextjs"
  },
  {
    title: "Keen Keeper",
    category: "Web Application",
    description: "A task management and organization tool designed for productivity and seamless user experience.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    live: "https://keen-keeper-zihad.netlify.app/",
    github: "https://github.com/almahmudzihad/keen-keeper"
  },
  {
    title: "PixGen",
    category: "AI Image Generation",
    description: "An AI-powered image generation tool with a sleek user interface and advanced generation capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    live: "https://pixgen-teal.vercel.app/",
    github: "https://github.com/almahmudzihad/pixgen"
  },
  {
    title: "Dragon News",
    category: "Next.js / News Portal",
    description: "A dynamic news portal built with Next.js, featuring real-time updates and a clean, responsive layout.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    live: "https://dragon-news-nextjs-blond.vercel.app/",
    github: "https://github.com/almahmudzihad/dragon-news-nextjs"
  }
];

export default function Projects() {
  const container = useRef();

  useGSAP(() => {
    // Initial state
    gsap.set(".project-card", { y: 50, opacity: 0 });

    // Animation
    gsap.to(".project-card", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
        once: true
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 bg-background" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A curated mix of projects—scalable, fast, and future-ready—blending design, code, and creativity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -10 }}
              className="project-card glass-card rounded-3xl overflow-hidden group p-4 flex flex-col h-full"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-brand-dark">
                <motion.img 
                  alt={project.title} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  src={project.image}
                />
              </div>
              <div className="px-2 pb-2 flex-grow">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-card border border-foreground/10 text-[10px] font-bold uppercase tracking-wider text-foreground/60 mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed mb-6">{project.description}</p>
              </div>
              
              <div className="px-2 pb-2 flex gap-4">
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-grow text-center py-2.5 rounded-xl bg-brand-blue text-white text-xs font-bold hover:bg-blue-600 transition-colors"
                >
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-foreground/10 text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
