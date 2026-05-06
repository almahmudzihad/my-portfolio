'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    // Floating image animation
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Text reveal
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Mouse Parallax
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(".parallax-bg", {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: container });

  

  return (
    <section ref={container} className="relative min-h-[80vh] flex items-center overflow-hidden py-20 px-6 bg-background">
      <div className="absolute inset-0 hero-glow pointer-events-none parallax-bg"></div>
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="hero-text text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm Zihad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-blue-300">Frontend Developer.</span>
          </h1>
          <p className="hero-text text-lg text-foreground/60 mb-10 max-w-lg">
            I build modern, responsive and user-friendly websites using the latest frontend technologies.
          </p>
          <div className="hero-text flex flex-wrap gap-4">
            <button className="bg-brand-blue hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold transition-all">Let's Connect</button>
            <button className="bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 px-8 py-4 rounded-lg font-semibold transition-all text-foreground">View Projects</button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          {/* Background Glow for Transparent PNG */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div 
            ref={imageRef}
            className="relative z-10 w-full max-w-lg mx-auto"
          >
            <img 
              alt="Zihad Profile" 
              className="w-full h-auto drop-shadow-2xl" 
              src="/zihad.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
