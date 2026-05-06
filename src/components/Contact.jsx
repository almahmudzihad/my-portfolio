'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".contact-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 bg-background" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-brand-accent text-2xl font-mono">#contacts</span>
          <div className="h-px flex-grow bg-brand-accent/20"></div>
        </div>
        <div className="contact-content grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-foreground/60 mb-12 max-w-md leading-relaxed">
              I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.
            </p>
            <div className="glass-card p-8 rounded-2xl inline-block border-foreground/10">
              <h5 className="font-bold mb-4">Message me here</h5>
              <div className="space-y-4 text-foreground/60">
                <div className="flex items-center gap-3">
                  <span className="text-brand-blue">Discord:</span>
                  <span>!Elias#3519</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-blue">Email:</span>
                  <span>elias@elias.me</span>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                className="w-full bg-brand-card border border-foreground/10 rounded-lg px-4 py-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all" 
                placeholder="Name" 
                type="text" 
              />
              <input 
                className="w-full bg-brand-card border border-foreground/10 rounded-lg px-4 py-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all" 
                placeholder="Email" 
                type="email" 
              />
            </div>
            <input 
              className="w-full bg-brand-card border border-foreground/10 rounded-lg px-4 py-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all" 
              placeholder="Title" 
              type="text" 
            />
            <textarea 
              className="w-full bg-brand-card border border-foreground/10 rounded-lg px-4 py-3 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/50 transition-all min-h-[150px]" 
              placeholder="Message"
            ></textarea>
            <button className="bg-brand-blue hover:bg-blue-600 px-10 py-4 rounded-lg font-bold transition-all shadow-lg shadow-blue-500/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
