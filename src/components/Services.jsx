'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    description: "Build fast, scalable, and modern web apps tailored for performance and impact.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "Cross-Platform Development",
    description: "Create seamless experiences across web, mobile, and desktop with one codebase.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive, conversion-driven interfaces that users love to interact with.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    )
  }
];

export default function Services() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".service-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: container.current,
        start: "top 90%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            From interfaces to full-stack, I build modern products that are scalable and user-friendly.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -10, boxShadow: "0 0 30px rgba(0, 102, 255, 0.15)" }}
              className="service-card glass-card rounded-3xl p-8 flex flex-col items-center text-center cursor-default"
            >
              <div className="w-20 h-20 mb-8 border border-brand-blue/30 rounded-2xl flex items-center justify-center text-brand-blue">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
