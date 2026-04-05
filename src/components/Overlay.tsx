"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll();

  // Section 1 (0% - 20%): "My Name. Creative Developer."
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const scale1 = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  // Section 2 (20% - 50%): "I build digital experiences."
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.5], [100, -100]);

  // Section 3 (50% - 80%): "Bridging design and engineering."
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.9], [100, -100]);

  return (
    <div className="absolute inset-0 pointer-events-none text-white z-10 flex flex-col items-center justify-center font-sans h-screen overflow-hidden">
      
      {/* Section 1 - Center */}
      <motion.div 
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute flex flex-col items-center text-center px-4"
      >
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-4 drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          ARGHYADIP SETT
        </h1>
        <p className="text-xl md:text-3xl font-light text-[#E3F245] drop-shadow-lg tracking-wide mb-8">
          CSE Undergraduate | Aspiring Data Engineer
        </p>
        <a 
          href="/resume.pdf" 
          download
          className="px-6 py-3 rounded-full border border-[#E3F245] text-[#E3F245] hover:bg-[#E3F245] hover:text-black transition-colors font-medium cursor-pointer pointer-events-auto"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Section 2 - Left Aligned */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute left-[8%] md:left-[15%] text-left pr-4"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 max-w-2xl leading-tight drop-shadow-2xl">
          I build <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3F245] to-[#A0D468]">data-driven solutions.</span>
        </h2>
        <div className="w-32 h-1.5 bg-[#E3F245] mb-8 rounded drop-shadow-[0_0_10px_rgba(227,242,69,0.5)]"></div>
        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-lg leading-relaxed drop-shadow-md">
          Focusing on data engineering, machine learning, and scalable web applications.
        </p>
      </motion.div>

      {/* Section 3 - Right Aligned */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute right-[8%] md:right-[15%] text-right pl-4"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 max-w-2xl ml-auto leading-tight drop-shadow-2xl">
          Bridging <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#E3F245] to-[#45b7f2]">logic & performance.</span>
        </h2>
        <div className="w-32 h-1.5 bg-[#E3F245] mb-8 ml-auto rounded drop-shadow-[0_0_10px_rgba(227,242,69,0.5)]"></div>
        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-lg ml-auto leading-relaxed drop-shadow-md">
          Fusing analytical problem-solving with deep technical knowledge.
        </p>
      </motion.div>

    </div>
  );
}
