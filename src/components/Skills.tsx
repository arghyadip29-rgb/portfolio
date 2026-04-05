"use client";

import { motion } from "framer-motion";
import { 
  FaPython, FaAws, FaChartBar 
} from "react-icons/fa";
import { 
  SiMysql, SiPostgresql, SiMongodb, SiApachespark, SiApachekafka, 
  SiApacheairflow, SiDbt, SiGooglecloud, SiJavascript 
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <SiMysql /> }, // Using MySQL icon as generic SQL representation
        { name: "JavaScript", icon: <SiJavascript /> }
      ]
    },
    {
      title: "Tools & Frameworks",
      skills: [
        { name: "Power BI", icon: <FaChartBar /> },
        { name: "Apache Spark", icon: <SiApachespark /> },
        { name: "Apache Kafka", icon: <SiApachekafka /> },
        { name: "Apache Airflow", icon: <SiApacheairflow /> },
        { name: "dbt", icon: <SiDbt /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "Platforms",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "GCP", icon: <SiGooglecloud /> }
      ]
    }
  ];

  return (
    <section className="bg-[#121212] py-32 px-6 md:px-20 font-sans relative z-20 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-24 text-center tracking-tight"
        >
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3F245] to-[#A0D468]">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-[#E3F245]">{cat.title}</h3>
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="flex flex-col items-center justify-center gap-2 bg-black/40 px-4 py-4 rounded-2xl border border-white/5 hover:border-[#E3F245]/50 hover:text-[#E3F245] transition-all w-28 group"
                  >
                    <div className="text-3xl text-gray-300 group-hover:text-[#E3F245] transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white text-center font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
