import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const testimonials = [
  {
    quote: "Piyush completely elevated our wedding films. His attention to detail and ability to capture emotion through his edits is unmatched.",
    client: "Whatknot Films and photography",
    role: "Production House"
  },
  {
    quote: "Working with EpicFrames has been a game changer for our wedding films. Clean cuts, seamless storytelling, and always delivered on time.",
    client: "KB Studio Productions",
    role: "Production House"
  },
  {
    quote: "His wedding edits are so fast paced yet emotional. Every film feels cinematic and keeps couples engaged from start to finish.",
    client: "Get in Frames",
    role: "Content Creator"
  },
  {
    quote: "Piyush brought a sharp, modern edge to our fashion and corporate projects. His edits are clean, stylish, and perfectly aligned with brand aesthetics.",
    client: "Clicksy Studio",
    role: "FASHION & CORPORATE STUDIO"
  }
];

const Testimonials = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.2"] });
  
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const opacity = useTransform(smoothScroll, [0, 1], [0, 1]);
  const y = useTransform(smoothScroll, [0, 1], [100, 0]);

  return (
    <section id="testimonials" ref={ref} className="min-h-screen py-24 px-6 bg-zinc-900/50 overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2 style={{ opacity, y }} className="text-4xl font-black mb-16 text-center uppercase tracking-tighter">
          Client <span className="text-blue-500">Reviews</span>
        </motion.h2>

        {/* Infinite Scrolling Marquee Container */}
        <div 
          className="relative flex w-full overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 pr-8 w-max"
          >
            {[...testimonials, ...testimonials].map((test, index) => (
              <div 
                key={index}
                className="w-[350px] md:w-[450px] p-8 bg-zinc-950 border border-white/5 rounded-3xl flex flex-col justify-between flex-shrink-0 hover:border-white/10 transition-colors"
              >
                <p className="text-zinc-300 italic mb-8 leading-relaxed">"{test.quote}"</p>
                <div>
                  <div className="font-bold text-white text-lg">{test.client}</div>
                  <div className="text-sm text-blue-500 uppercase tracking-widest mt-1">{test.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;