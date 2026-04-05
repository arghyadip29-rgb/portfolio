"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    { 
      title: "Portfolio Website", 
      desc: "Designed and deployed a responsive portfolio website to showcase projects and skills. Built using Next.js and hosted on Vercel.",
      image: "/projects/alpha.png", // Fallback placeholder
      link: "https://portfolio-dntc.vercel.app/"
    },
    { 
      title: "AI SmartBoat PavitraX", 
      desc: "Smart India Hackathon 2025. Developed a waste segregation system using image processing with a TACO YOLOv8n model trained by our team.",
      image: "/projects/beta.png", // Fallback placeholder
      link: "#"
    }
  ];

  return (
    <section className="bg-[#121212] min-h-screen text-white py-32 px-6 md:px-20 font-sans relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-24 text-center tracking-tight"
        >
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3F245] to-[#A0D468]">Work</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((proj, idx) => (
            <motion.a 
              key={idx}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative block bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 cursor-pointer group shadow-2xl hover:shadow-[0_0_40px_rgba(227,242,69,0.15)] flex-col flex"
            >
              <div className="w-full relative aspect-video bg-black/50 rounded-2xl mb-8 overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-3 relative z-10 group-hover:text-[#E3F245] transition-colors">{proj.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed relative z-10 text-lg">{proj.desc}</p>
                </div>
                
                <div className="mt-8 relative z-10 flex items-center gap-3">
                  <span className="text-white font-medium group-hover:text-[#E3F245] transition-colors">View Project</span>
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="group-hover:translate-x-2 transition-transform duration-300 text-[#E3F245]"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </motion.svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
