'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "html", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEugMayQzlzRLTdpZfvyntgBKqhFNGldCYraXSgciK2_-8UdKxe41pXfjxa-zj4fFsCccsB_xKTmyMSTbVWXI7yakRDZZHlKy-2kC3dag3V_s0BQ1NTc0G3YQXYEv5Jodo-0kUQcZanFkPCpj1J7stHXTrd8L5p8falYQLls7Ngo-vMO1gGu7EYR2rkfFjNu61jf0LIb7Ve3S14u1hQVP3CGxq2Ns9dOlDEv8SBKMv9vw58O5AVJdKJSvAx2gzeItbPuf2X32sbc3R" },
  { name: "css", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN2B_reyn-ls8iwYcmhuFWun2sA-pmc8iQ_Ii3KOPe3uaaJjwejKI8wzI3flAVZU1HibPMb_nyAT1witGJIr-DRags2euRbCy-4HnRS0cdfyOomsso_HlyLPuVCHG8rJCvnZqvXf5BD5KZLL_wZttYpAIwBM0nu7kmB6KQWDFEIb1g0oqqALgR74JSwZcOkuVLzmjjoywZEY6F1qQe4ZLP-KQI7BV8gbfF06Qwl44fkz4lpDzm4agrPPTjhA3tL6P_2YAOOM6W_Epz" },
  { name: "javascript", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt872PTVw1ep4V9AboKOAoq2VrzOKCRUNkVcBR2_18GKNnx-8HQQqS4UPerpFKQR9dyTWl90nQTqPMrZaT8tKbqHl1P8j2wVKg-wwm26olih8qvUu-oeJnJoDt0GK4EMiGYWhBeurnAUNCwNgtom8FlXbbr0BESVS0Zq3AxC8KCXXQ_B7KkeZL4bcoL-IRQHUzL4vV4in5n9R8knRSRjGwKaYpcRpvO_NPo8K5OkDY0842HtCjrQSC8BjGY-AEjkZsmerKPh5iV5MM" },
  { name: "reactjs", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuapVZapgjmKWzbw9M7S0YE-L5tulzcF2gu5P2odAroFONGGVgQVDo1T6WUaQSvLgJvorvNM3J9vOQaIj60LEIbo3jCU7pfdSLEFUwaGG0DZWiWez5vB4_r7lgTrWsZgdrOQbEKAbRYMlkUqjM81ly15LskuOYDtNC8whg4pdoclvOI4uF6SzcHgPfpD1LoB9xxOJ6HZ1i0-Itch0HUXvPR02yOzm6tGIzBSi904EyUgnA_vof1GBRcUbUqIZXB9uPz5ysqjreAFBc" },
  { name: "nodejs", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5G8jEXHsagWGTHv8lwKUrVztqH8pQQIx_MtNsxfIsZIqjCe3rqKFyXJFtaBXKzWiTlpGmJmNQPpxhFPFghyziaCL_y5cVARFCShtqIcDFgN929kIogmuiNTyXO64bCKkPtWhuStn1HCD_X1-yG2N96hCI0Qclg1m0iYaLQuTowCs-iEesH_fxK3leXulY-eN1QQleU9gH4pgy5R0-c7pEDhBNwyTGMdTB4sT1XADkPgxtzChDrvPUHM5lxCFIjC_MaEGV9xuchFYH" },
  { name: "figma", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_4J-D1ZC4n2Q35CeA5NTcksw0S_vd9gesSKAM-dpUGfzye8yVKMfY3KOtt00XH4wD3EI2HkkXLOD1zdpuP8K0xEhjheDwl11kG3hyXe4Y4FIrNDcGE5Gafru00GG2P0QRPJjK5XauYexHxak2YujIQXK-sOqeZcncLolBAs7JmgpkVqmQKQdhvRV_IQ0B9Kr1xkhBj5tLggqz-IMpI_0MgNCr4f9YemF1wvk3mE4-1h0Qcv36bOCSLYCqkYhRjIxxAZKoHVe4aIq3" },
  { name: "git", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOx0PKuqxLXjfK0NB1UnLeS7eXyK58r-xQ3cwo5a2MzyEXHzhD-WiqNw73Pq8VX-lCIFeXE6lY38DGB1DrI9_HbGOx2oyQjV89wf5GoS2aP72h9ClxZOPQ9yGLjsxUBdW3kHbIJH0dZi8mFOj5NZwlx7VkBlD0F5qH-CgvHq7gnT-E84qqlf1yCoD3G-G9uN6pNn-EFHcS3512-Tp5l1MAw5W-GKRRH7GupLP_HJg-AKc2idOJDyTJ5WJoaGyOjg5FtVytkcfnCaO7" },
  { name: "mysql", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOCYbo1d9YC4lqPsuKR1duGBWRxgLO07TY-6NJdaOn4jQPWQzTAo46a_3W8xhvpzSZZNM92WJ8PpODVEtJy41TxTUv6yYmCKmVkgBhssB9zTpG7C0iGBak_6G3N1BsdnfKq_2ETMBL2YqWBaFhEkxB899nvz8I2Bf8e0CZ537gRp0FI4beBPE_Q0yu9LwcQZP1Q6wkS4DQNY6uazsnjp1nJ6Vni8w6iEjb-vPb_ojDJF5SERWwZNkScgt8GJ5odKq9uUsn8zhY9Jzn" },
  { name: "firebase", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNwPiFutzyZ7yeghfORBGNmde9xxKrZos_XEHWEZ7PWxT0CRj1iV9KjKp0iBZYOFbOJ4NGvf-aa346fRn6b0oR0Gb_F1a9KwtO1r6hxX7iu-MY2Vz_-j6kBqzHkJp6DN0IENtRVypfNHLXTNoBfAmP6W1Cm1FeLyp4uk1J21XQz2CB3pAHs5HnxevMVJ5D84XXVFVGHT8WrPRYhGVeA9nl7yTTxAqwvu-2o-FHyDx3GOQBv0uhzs2ZzIh--JZ6kTYCCEWjAWCnfZpD" },
  { name: "java", icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpaAZlWQHtFgB-q6GldKcvu0XK6ihXnbFT0Phaxbr5iAQ3Jqc_V6T8y9As9hDNJ0oE6qF3ZbfcEjkMA3durXmUfXDRYMH4eCqRU_pDEUKnAZpi7zu6J8Cl8P-G-zLfINJnTr6tud_3KXbAUxp4xSxBeZ52TjtCykfrqs7XPhFQQB4k8geZRUXJ8q8VsOeo5TTSHPI-8FfT3T6obKCp-Otdvh2MUTrw9UQmuC0g5YxS8DjhY40qe1IfvacF86czTja-sG-xPGQLLK-S" }
];

export default function Skills() {
  const container = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray(".skill-item");
    
    // Staggered Reveal
    gsap.from(items, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });

    // Individual Floating Loop
    items.forEach((item, i) => {
      gsap.to(item, {
        y: -10,
        duration: 2 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.1
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-accent text-2xl font-mono">#skills</span>
          <div className="h-px flex-grow bg-brand-accent/20"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="skill-item skill-border bg-white/5 rounded-xl p-6 flex flex-col items-center justify-center group hover:border-brand-accent/50 transition-colors cursor-default"
            >
              <img alt={skill.name} className="w-10 h-10 mb-4" src={skill.icon} />
              <span className="font-mono text-sm text-gray-400 group-hover:text-white">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
