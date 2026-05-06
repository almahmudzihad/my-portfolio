'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Integrate AI Into The E-Commerce",
    category: "SaaS Landing Page",
    description: "Landing Pages are designed for efficient and fast setup sales platform",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdTpXAGKH5nboHLy-NsQvYVd8WROwgft3fuPBzCnCyW6_veuZngGYapBdJBKMue57dqUqFH0dJOnW9VDCKvnPFMx1kYZ-2RUPks17N0kZEydKmCBhHgvKfF6FSPV5gMsAq4RVGAZsZbGt1ZyAv-uI66YmKpTk95wNv_z_Q7AwOAVormDUzYdhNqRPUVGbpysfqdzizuc1hefTkT_aWSx4AaWkC1Iij0XFMulm2-AztxGtT8Fx4novOUOW9RNl_8YS2yh4d3LkODerF"
  },
  {
    title: "Integrate AI Into The E-Commerce",
    category: "SaaS Landing Page",
    description: "Landing Pages are designed for efficient and fast setup sales platform",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlagIzRIVX-JHGz23m0V7PuDG9Ia9cqwM1NYlgAXG6mRdtw86uisFGqo3AtPooxtMj2LHgO3qVM3TEilSM7iqo1qcI2ldk68WitH46z1FnF-p26ukgnm1hyDliOBa2_Z7hyCz9d01BBvNIi6MY0WaJsZ1F8cirhijR37zHrtHu3ZVJ_wXUbo7HUUBnDx_FPYH3-rd2_I2LmOy6OY3AWX66l7EvODOCP-5hPybdu0PTT4xATdDtuRdm1_8ivGsnxIYLOjUYOsQOSayw"
  },
  {
    title: "Integrate AI Into The E-Commerce",
    category: "SaaS Landing Page",
    description: "Landing Pages are designed for efficient and fast setup sales platform",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnydHd8C8XpZ4mPCUsDv3ivreaIhHGojmF9H8tEcUOAniBMXwp7AqzF3rGe3Z7ZfCtEIvxs6qxUi1hwOMaLsYGDpd-B2PfMXnTp7z8ywUFdezn2wXaI0T3wmliZH7XXEAw_IGEKZlkvdqEuYQZu_T9ZvG0WNcgczRZ-CF7i2WRrqcPvoVtxflLRnTQlbvXDmyuZI9m2EXh-uJaiDtCQdmGg44zAtGHoATWiHSTCNMI1N5i9EAzrhzkwsiVz6hh3ugWNMV-NHC--k-J"
  },
  {
    title: "Integrate AI Into The E-Commerce",
    category: "SaaS Landing Page",
    description: "Landing Pages are designed for efficient and fast setup sales platform",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPgL51biGfxAGfoQH1iTdutaSW1BHtW390UohzcWEFLReQ-ilDA5ZsszM46N0WhIxqjnQ4HRubfSgNGF6EJev6qiRC_02HkSluDU-BOhdeiSO7e_umjiJxkx31NmneM2FuO094tOEWovepdZ6U3jkNfxGueuHmIr42qg5kiKvxT-vNtsbmaBLBYvuH4coRCfRcIsjoCDJjZ9p8q5F6Dm3w2OmzVgCq2kIcByrJFxvhwcbEGvYVFHd6Pjipu892wB2gBw4uoXaI70Kz"
  }
];

export default function Projects() {
  const container = useRef();

  useGSAP(() => {
    // Initial state
    gsap.set(".project-card", { y: 50, opacity: 0 });

    // Animation
    gsap.to(".project-card", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
        once: true
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 bg-background" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated mix of projects—scalable, fast, and future-ready—blending design, code, and creativity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -10 }}
              className="project-card glass-card rounded-3xl overflow-hidden group p-4 cursor-pointer"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-brand-dark">
                <motion.img 
                  alt={project.title} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  src={project.image}
                />
              </div>
              <div className="px-2 pb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-card border border-brand-dark text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
