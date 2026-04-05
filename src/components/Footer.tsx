"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white py-20 px-6 md:px-20 font-sans relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s connect.</h2>
          <p className="text-gray-400 text-lg max-w-sm">
            Always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:arghyadip29@gmail.com"
            className="flex justify-center items-center gap-2 bg-[#E3F245] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c2ce38] transition-colors shadow-[0_0_20px_rgba(227,242,69,0.3)]"
          >
            arghyadip29@gmail.com
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+919432270118"
            className="flex justify-center items-center gap-2 bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
          >
            <Phone size={20} />
            +91 9432270118
          </motion.a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Arghyadip Sett. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/arghyadip-sett-268142265" target="_blank" rel="noopener noreferrer" className="hover:text-[#E3F245] transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/arghyadip29-rgb" target="_blank" rel="noopener noreferrer" className="hover:text-[#E3F245] transition-colors">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
