'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from('.contact-content', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="flex items-center gap-5 mb-20">
          <span className="text-brand-blue text-3xl font-mono">
            #contact
          </span>

          <div className="h-px flex-grow bg-gradient-to-r from-brand-blue/40 to-transparent" />
        </div>

        <div className="contact-content grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              Let’s Build Something Amazing Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-foreground/60 mb-12 max-w-lg leading-relaxed text-lg"
            >
              I’m currently available for freelance projects, collaborations
              and creative opportunities. If you have an idea in mind,
              feel free to reach out.
            </motion.p>

            {/* Contact Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 max-w-md">
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />
              </div>

              <div className="relative z-10">
                <h5 className="text-2xl font-semibold mb-8">
                  Contact Info
                </h5>

                <div className="space-y-6 text-foreground/70">
                  {/* Email */}
                  <a
                    href="mailto:amzihad@gmail.com"
                    className="flex items-center justify-between border border-white/5 rounded-2xl px-5 py-4 hover:border-blue-500/20 transition"
                  >
                    <div>
                      <p className="text-sm text-foreground/40 mb-1">
                        Email
                      </p>

                      <p className="font-medium">
                        amzihad@gmail.com
                      </p>
                    </div>

                    <span className="text-brand-blue">
                      ↗
                    </span>
                  </a>

                  {/* Github */}
                  <a
                    href="https://github.com/almahmudzihad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-white/5 rounded-2xl px-5 py-4 hover:border-blue-500/20 transition"
                  >
                    <div>
                      <p className="text-sm text-foreground/40 mb-1">
                        Github
                      </p>

                      <p className="font-medium">
                        github.com/almahmudzihad
                      </p>
                    </div>

                    <span className="text-brand-blue">
                      ↗
                    </span>
                  </a>

                  {/* Linkedin */}
                  <a
                    href="https://www.linkedin.com/in/almahmudzihad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-white/5 rounded-2xl px-5 py-4 hover:border-blue-500/20 transition"
                  >
                    <div>
                      <p className="text-sm text-foreground/40 mb-1">
                        LinkedIn
                      </p>

                      <p className="font-medium">
                        linkedin.com/in/zihad
                      </p>
                    </div>

                    <span className="text-brand-blue">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Your Name"
                type="text"
              />

              <input
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Your Email"
                type="email"
              />
            </div>

            <input
              className="w-full mb-6 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Subject"
              type="text"
            />

            <textarea
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all min-h-[180px]"
              placeholder="Write your message..."
            ></textarea>

            <button className="mt-8 bg-brand-blue hover:scale-[1.03] hover:bg-blue-600 px-10 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-blue-500/20">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}