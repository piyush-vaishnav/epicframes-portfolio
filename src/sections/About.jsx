import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.2"]
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const textOpacity = useTransform(smoothScroll, [0, 1], [0, 1]);
  const textY = useTransform(smoothScroll, [0, 1], [40, 0]);

  return (
    <section id="about" ref={ref} className="min-h-screen py-24 px-6 bg-zinc-900/50 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left Side: Story */}
        <motion.div style={{ opacity: textOpacity, y: textY }}>
          <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">
            Behind the <span className="text-blue-500">Lens</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            Hi, I’m Piyush Vaishnav, a Mumbai-based video editor and the creative mind behind EpicFrames. 
            I specialize in editing across multiple genres including weddings, real estate, fashion, and corporate films. 
            My goal is simple: to transform ordinary clips into visually compelling stories that leave a lasting impact.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            With professional training from Arena Animation, I’ve developed both the technical skills and 
            creative vision needed to deliver high-quality edits. Every project I take on is approached with 
            attention to detail, storytelling focus, and a commitment to delivering work that feels premium and engaging.
          </p>
        </motion.div>

        {/* Right Side: Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Projects Completed", value: "100+" },
            { label: "Happy Clients", value: "25+" },
            { label: "Years Experience", value: "2" },
            { label: "Cups of Coffee", value: "∞" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8, type: "spring", bounce: 0.4 }}
              className="p-8 bg-zinc-900 border border-white/5 rounded-2xl text-center">
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="col-span-1 md:col-span-2 mt-12 pt-12 border-t border-white/5 text-center"
        >
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-6 font-bold">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-zinc-400 font-medium text-sm md:text-base">
            {["Whatknot", "KB Studio Productions", "Get in Frames", "Clicksy Studio", "Teeshafilms"].map((client, index, arr) => (
              <React.Fragment key={client}>
                <span className="hover:text-white transition-colors cursor-default">{client}</span>
                {index < arr.length - 1 && <span className="text-zinc-700">•</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;