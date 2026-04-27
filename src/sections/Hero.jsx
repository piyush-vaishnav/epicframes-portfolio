import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Add spring physics to the scroll progress for buttery smooth parallax
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 25, mass: 0.1 });

  const textY = useTransform(smoothScroll, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(smoothScroll, [0, 0.8], [1, 0]);
  const bgScale = useTransform(smoothScroll, [0, 1], [1, 3]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Glow */}
      <motion.div style={{ scale: bgScale }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></motion.div>

      <motion.h1 style={{ y: textY, opacity }} className="text-5xl md:text-7xl font-black tracking-tight mb-6 px-4">
        EPIC<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">FRAMES</span>
      </motion.h1>
      
      <motion.p style={{ y: textY, opacity }} className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 px-4">
        Hi, I'm Piyush Vaishnav, a Mumbai-based video editor. I turn your raw footage into cinematic stories.
      </motion.p>

      <motion.div style={{ y: textY, opacity }} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
        <a href="#portfolio" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
          VIEW MY WORK
        </a>
        <a href="#contact" className="w-full sm:w-auto border border-zinc-700 hover:border-zinc-500 text-white px-8 py-4 rounded-lg font-bold transition-all">
          GET IN TOUCH
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;