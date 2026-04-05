"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      title: "SQL Certification",
      issuer: "HackerRank",
      icon: <BadgeCheck className="w-6 h-6 text-[#E3F245]" />
    },
    {
      title: "Get Started with AI Agent Development on Azure",
      issuer: "Microsoft",
      icon: <Award className="w-6 h-6 text-[#45b7f2]" />
    },
    {
      title: "Python Project Bootcamp",
      issuer: "LetsUpgrade",
      icon: <BadgeCheck className="w-6 h-6 text-[#A0D468]" />
    },
    {
      title: "Critical Thinking in AI Era",
      issuer: "HP",
      icon: <Award className="w-6 h-6 text-purple-400" />
    }
  ];

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
          Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3F245] to-[#A0D468]">Certifications</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-default shadow-lg hover:shadow-[0_0_30px_rgba(227,242,69,0.05)]"
            >
              <div className="p-4 bg-black/40 rounded-xl border border-white/5 group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 leading-snug group-hover:text-[#E3F245] transition-colors">{cert.title}</h3>
                <p className="text-gray-400 font-medium">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
