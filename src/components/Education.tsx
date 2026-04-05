"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ScrollText } from "lucide-react";

export default function Education() {
  const education = [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "MAKAUT University",
      duration: "August 2023 - August 2027",
      icon: <GraduationCap className="w-8 h-8 text-[#E3F245]" />,
      details: [
        "Relevant Coursework: Data Structures, Web Development, Databases, Software Engineering."
      ]
    },
    {
      title: "Higher Secondary Education",
      institution: "Sri Aurobindo Vidyamandir (WBBSE)",
      duration: "Year: 2022",
      icon: <BookOpen className="w-7 h-7 text-[#A0D468]" />,
      details: [
        "Score: 82%"
      ]
    },
    {
      title: "Secondary Education",
      institution: "Sri Aurobindo Vidyamandir (WBCHSE)",
      duration: "Year: 2020",
      icon: <ScrollText className="w-7 h-7 text-gray-300" />,
      details: [
        "Score: 80.28%"
      ]
    }
  ];

  return (
    <section className="bg-[#121212] py-32 px-6 md:px-20 font-sans relative z-20 text-white border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-24 text-center tracking-tight"
        >
          Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3F245] to-[#A0D468]">Journey</span>
        </motion.h2>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-10 space-y-16">
          {education.map((edu, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-4"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[45px] md:-left-[53px] top-0 p-2 bg-[#121212] border-2 border-white/10 rounded-full z-10 hidden md:block">
                <div className="p-2 bg-white/5 rounded-full">
                  {edu.icon}
                </div>
              </div>

              <div className="absolute -left-[41px] top-6 w-4 h-4 bg-[#E3F245] rounded-full z-10 md:hidden border-4 border-[#121212]"></div>

              <div className="bg-white/[0.02] hover:bg-white/[0.05] transition-colors border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{edu.title}</h3>
                    <p className="text-xl text-[#E3F245] font-medium">{edu.institution}</p>
                  </div>
                  <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-black/50 text-gray-300 whitespace-nowrap text-sm font-medium w-fit">
                    {edu.duration}
                  </div>
                </div>

                <div className="mt-4 text-gray-400 space-y-2">
                  {edu.details.map((detail, i) => (
                    <p key={i} className="leading-relaxed">{detail}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
