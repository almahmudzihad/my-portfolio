'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    // Slide in from left (text)
    gsap.from(".about-text", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    // Slide in from right (image)
    gsap.from(".about-image", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    // Floating animation
    gsap.to(imageRef.current, {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 bg-background" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-brand-accent text-2xl font-mono">#about-me</span>
          <div className="h-px flex-grow bg-brand-accent/20"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="about-text">
            <h3 className="text-3xl font-bold mb-8 text-foreground">Creative Developer & Problem Solver</h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Hello, I’m Jaydeep! I’m a self-taught front-end developer based in India. I develop responsive websites from scratch and raise them into modern user-friendly web experiences.
              </p>
              <p>
                Transforming my creativity and knowledge into a website has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
              </p>
            </div>
            <button className="mt-10 border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
              Download Resume
            </button>
          </div>
          <div className="about-image relative">
            <div ref={imageRef} className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-brand-dark shadow-2xl">
              <img 
                alt="About Jaydeep" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiR_66-fC_75W-V0xL90-qA8rD0UfC_F_pX8X9K8_1-w9s7b_mS_y_nd2A_jRtQ7uKmGTJ7l_w6cpZP3URN5CJRY4sLad-ZzLqL2uNeYJlMw4B4WYUvrVIq7-NGu9s7bDnwFNVHze26BeZ4dRn6GAByZBt4_v_YtYdY1q4CNSVHrj4sBhcXR7jBi5LNh6YmYj94L8AEWlLdxZ-JxMQAcZu4DM9sgG2uHbUCuIVcP5ctY55SvKav9_yVHJnhpiaMPAutCb3Yy-P6Q"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand-blue/10 blur-3xl rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
