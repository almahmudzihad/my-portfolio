"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-background text-foreground" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            From interfaces to full-stack, I build modern products that are scalable and user-friendly.
          </p>
        </div>
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Crafting Digital Experiences
          </motion.h2>

          <motion.p
            variants={item}
            className="text-foreground/60 max-w-xl"
          >
            Frontend Developer focused on modern, responsive, and interactive web applications.
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          
          {/* Left Text */}
          <div className="space-y-5 text-foreground/80 leading-relaxed">
            {[
              "I’m Zihad — a frontend developer passionate about building modern, responsive, and interactive web experiences.",
              "I enjoy turning ideas into clean and intuitive interfaces, focusing on performance, usability, and smooth user interactions.",
              "I pay close attention to detail and always aim to write maintainable, scalable code.",
              "I’m constantly learning and exploring new tools and techniques to improve my workflow.",
              "My goal is to create digital experiences that are not just functional, but also engaging and visually impactful.",
            ].map((text, i) => (
              <motion.p key={i} variants={item}>
                {text}
              </motion.p>
            ))}
          </div>

          {/* Right Card */}
          <motion.div
            variants={item}
            className="bg-foreground/5 backdrop-blur-xl border border-foreground/10 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Quick Info</h3>

            <ul className="space-y-3 text-foreground/60">
              <li>💻 Frontend Developer</li>
              <li>⚛️ React / Next.js</li>
              <li>🎨 Tailwind CSS</li>
              <li>✨ GSAP / Framer Motion</li>
              <li>🚀 Learning Advanced Concepts</li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
