"use client";

import { motion } from "framer-motion";

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

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:hello@example.com"
          className="bg-[#E3F245] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c2ce38] transition-colors shadow-[0_0_20px_rgba(227,242,69,0.3)]"
        >
          hello@johndoe.com
        </motion.a>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
