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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.span
            variants={item}
            className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block"
          >
            About Me
          </motion.span>
          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/40"
          >
            Passionate Full Stack Developer
          </motion.h2>

          <motion.div
            variants={item}
            className="w-20 h-1 bg-primary rounded-full mb-6"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-start"
        >
          
          {/* Left Text */}
          <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
            <motion.p variants={item}>
              My journey into programming started with curiosity about how websites
              work behind the scenes. At first, I explored <span className="text-foreground font-medium">HTML, CSS, and JavaScript</span>,
              and gradually moved into modern technologies like <span className="text-foreground font-medium">React, Next.js,
              Node.js, Express.js, and MongoDB</span>.
            </motion.p>
            
            <motion.p variants={item}>
              I enjoy building modern, responsive, and user-friendly web applications.
              Creating smooth UI experiences and solving real-world problems through
              code is what excites me the most. I especially love working on full
              stack projects where I can handle both frontend design and backend
              functionality.
            </motion.p>

            <motion.p variants={item}>
              Beyond programming, I enjoy exploring new technologies, watching tech
              content, learning UI/UX design concepts, and spending time improving my
              creativity. I also enjoy sports, gaming, and discovering new ideas that
              help me think differently and grow as a developer.
            </motion.p>

            <motion.p variants={item} className="italic border-l-2 border-primary/30 pl-4 py-1">
              I’m someone who believes in continuous learning and consistency. Every
              project I build helps me improve my skills and pushes me closer to
              becoming a better software engineer.
            </motion.p>
          </div>

          {/* Right Card */}
          <motion.div
            variants={item}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-background/40 backdrop-blur-2xl border border-foreground/5 p-10 rounded-2xl shadow-2xl space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/5">
                    <p className="text-sm text-foreground/40 mb-1">Experience</p>
                    <p className="text-xl font-semibold">1+ Year</p>
                  </div>
                  <div className="p-4 rounded-xl bg-foreground/5 border border-foreground/5">
                    <p className="text-sm text-foreground/40 mb-1">Projects</p>
                    <p className="text-xl font-semibold">20+</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "MongoDB", "Tailwind", "Framer Motion"].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-sm font-medium hover:bg-primary/10 hover:border-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full py-4 rounded-xl bg-foreground text-background font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Download Resume
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
