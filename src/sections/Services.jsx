import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const services = [
  { title: "Cinematic Wedding Editing", description: "Crafting emotional, story-driven wedding films with seamless transitions, music sync, and timeless storytelling.", icon: "💍" },
  { title: "Fashion Film Editing", description: "Clean, stylish edits focused on rhythm, aesthetics, and brand identity perfect for modern fashion campaigns.", icon: "✨" },
  { title: "Corporate Video Editing", description: "Professional, sharp, and engaging edits tailored for brand communication, ads, and business storytelling.", icon: "💼" },
  { title: "Social Media & Reels Editing", description: "Fast-paced, attention grabbing edits optimized for Instagram, ads, and high audience retention.", icon: "🚀" }
];

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.2"] });
  
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const opacity = useTransform(smoothScroll, [0, 1], [0, 1]);
  const y = useTransform(smoothScroll, [0, 1], [100, 0]);
  const scale = useTransform(smoothScroll, [0, 1], [0.8, 1]);

  return (
    <section id="services" ref={ref} className="min-h-screen py-24 px-6 max-w-7xl mx-auto overflow-hidden flex flex-col justify-center w-full">
      <motion.div style={{ opacity, y, scale }} className="mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter">
          My <span className="text-blue-500">Expertise</span>
        </h2>
        <p className="text-zinc-400 text-lg mt-4 max-w-2xl">
          From initial cut to final delivery, I provide end-to-end post-production services that transform raw footage into cinematic, story-driven visuals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: index * 0.15, duration: 0.8, type: "spring", bounce: 0.4 }}
            whileHover={{ y: -5 }}
            className="p-8 bg-zinc-900 border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all cursor-default"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;