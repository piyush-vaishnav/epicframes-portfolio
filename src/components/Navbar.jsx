import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/70 backdrop-blur-lg border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-tighter">
          EPIC<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">FRAMES</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-bold text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
          <a href="#portfolio" className="hover:text-white transition-colors">WORK</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </div>
        <a href="#contact" className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors">
          LET'S TALK
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;