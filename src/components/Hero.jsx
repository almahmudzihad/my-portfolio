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
    <section ref={container} className="relative min-h-[90vh] flex items-center overflow-hidden py-20 px-6 bg-background">
      <div className="absolute inset-0 hero-glow pointer-events-none parallax-bg"></div>
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="hero-text text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I'm Zihad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-blue-300">Frontend Developer.</span>
          </h1>
          <p className="hero-text text-lg text-gray-400 mb-10 max-w-lg">
            I build modern, responsive and user-friendly websites using the latest frontend technologies.
          </p>
          <div className="hero-text flex flex-wrap gap-4">
            <button className="bg-brand-blue hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold transition-all">Let's Connect</button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-lg font-semibold transition-all">View Projects</button>
          </div>
        </div>
        <div className="relative">
          {/* Central Profile Image */}
          <div 
            ref={imageRef}
            className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              alt="Leo Carter Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ugGT9l6xZy12qYrlnSYxg26R4yOvDmfCkeXdCMotrJEl4y9aMsMZ7m6_nd2A_jRtQ7uKmGTJ7l_w6cpZP3URN5CJRY4sLad-ZzLqL2uNeYJlMw4B4WYUvrVIq7-NGu9s7bDnwFNVHze26BeZ4dRn6GAByZBt4_v_YtYdY1q4CNSVHrj4sBhcXR7jBi5LNh6YmYj94L8AEWlLdxZ-JxMQAcZu4DM9sgG2uHbUCuIVcP5ctY55SvKav9_yVHJnhpiaMPAutCb3Yy-P6Q"
            />
          </div>

   
        </div>
      </div>
    </section>
  );
}
