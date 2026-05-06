'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", icon: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" },
  { name: "CSS", icon: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" },
  { name: "JavaScript", icon: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" },
  { name: "React JS", icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
  { name: "Next.js", icon: "/next.svg" },
  { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Node.js", icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
  { name: "MongoDB", icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
  { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
  { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" }
];

export default function Skills() {
  const container = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray(".skill-item");
    
    // Staggered Reveal
    gsap.from(items, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    // Individual Floating Loop
    items.forEach((item, i) => {
      gsap.to(item, {
        y: -10,
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.1
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 bg-background" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-accent text-2xl font-mono">#skills</span>
          <div className="h-px flex-grow bg-brand-accent/20"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="skill-item skill-border bg-foreground/5 rounded-xl p-6 flex flex-col items-center justify-center group hover:border-brand-accent/50 transition-colors cursor-default"
            >
              <img alt={skill.name} className="w-10 h-10 mb-4 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" src={skill.icon} />
              <span className="font-mono text-sm text-foreground/60 group-hover:text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
