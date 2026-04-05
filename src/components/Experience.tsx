"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, Sparkles } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI-ML Virtual Intern",
      organization: "Google Developers - Eduskills",
      icon: <Sparkles className="w-6 h-6 text-[#E3F245]" />,
      points: [
        "Completed tasks using TensorFlow (basics) and prompt engineering.",
        "Documented solutions and improved knowledge base resources."
      ]
    },
    {
      title: "Campus Ambassador",
      organization: "MAANGler",
      icon: <Briefcase className="w-6 h-6 text-[#A0D468]" />,
      points: [
        "Built and engaged a student community for courses and internships."
      ]
    }
  ];

  const achievement = {
    title: "Finalist, Smart India Hackathon 2025",
    sub: "Hardware Edition",
    icon: <Trophy className="w-8 h-8 text-[#E3F245] mb-4" />,
    desc: "Qualified for the Grand Finale of India's biggest hackathon."
  };

  return (
    <section className="bg-[#121212] py-32 px-6 md:px-20 font-sans relative z-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-24 text-center tracking-tight"
        >
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3F245] to-[#A0D468]">Experience</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Experience Timeline */}
          <div className="flex-1 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Line (desktop hidden usually or adapted) */}
                <div className="md:hidden absolute left-0 top-2 bottom-[-48px] w-px bg-white/10 last:bottom-0"></div>
                <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#E3F245]"></div>

                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors shadow-2xl relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <p className="text-gray-400 text-lg font-medium">{exp.organization}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="text-[#E3F245] mt-1.5 min-w-[6px] h-1.5 w-1.5 rounded-full bg-[#E3F245]"></span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Achievements Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/3 flex flex-col"
          >
            <div className="bg-gradient-to-br from-[#E3F245]/10 to-transparent border border-[#E3F245]/20 rounded-3xl p-8 flex-1 flex flex-col justify-center items-center text-center">
              {achievement.icon}
              <h3 className="text-3xl font-bold mb-2 text-white">{achievement.title}</h3>
              <p className="text-[#E3F245] text-lg font-medium mb-6">{achievement.sub}</p>
              <p className="text-gray-300 leading-relaxed max-w-sm">
                {achievement.desc}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
