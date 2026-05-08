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
    description:
      "Building fast, scalable and modern web applications focused on performance and clean architecture.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Cross-Platform Development",
    description:
      "Creating seamless experiences across web, mobile and desktop using modern technologies.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually engaging interfaces with smooth user experiences.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

export default function Services() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from('.service-card', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 85%',
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="services"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-[0.3em] text-brand-blue text-sm mb-4"
          >
            Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            What I Can Do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            I craft modern digital experiences with clean code,
            interactive animations and scalable architecture.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="service-card group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent" />
              </div>

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Icon */}
              <div className="relative z-10 w-20 h-20 mb-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-5">
                  {service.title}
                </h3>

                <p className="text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[32px] border border-transparent group-hover:border-blue-500/20 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}