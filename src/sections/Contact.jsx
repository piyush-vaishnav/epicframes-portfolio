import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    // Construct the WhatsApp message
    const message = `Hello! My name is ${formData.name}. %0AEmail: ${formData.email} %0APhone: ${formData.phone} %0AProject Details: ${formData.details}`;
    const whatsappUrl = `https://wa.me/919970771646?text=${message}`; // Replace with your number
    window.open(whatsappUrl, '_blank');
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.2"]
  });
  
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const y = useTransform(smoothScroll, [0, 1], [150, 0]);
  const opacity = useTransform(smoothScroll, [0, 1], [0, 1]);
  const scale = useTransform(smoothScroll, [0, 1], [0.8, 1]);

  return (
    <section id="contact" ref={ref} className="min-h-screen py-24 px-6 text-center overflow-hidden flex flex-col justify-center w-full">
      <motion.div style={{ opacity, y, scale }} className="max-w-3xl mx-auto w-full">
        
        {!isFormOpen ? (
          /* Initial State: The Big Button */
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 30 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-8">READY TO START?</h2>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-white text-black text-lg md:text-xl font-bold px-8 py-4 md:px-12 md:py-6 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-xl"
            >
              SAY HELLO
            </button>
          </motion.div>
        ) : (
          /* Active State: The Form */
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-white/10 text-left"
          >
            <button 
              onClick={() => setIsFormOpen(false)}
              className="text-zinc-500 hover:text-white mb-6 flex items-center gap-2 transition-colors"
            >
              ← Back
            </button>
            <h2 className="text-3xl font-black mb-8">PROJECT DETAILS</h2>
            
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="bg-zinc-800 border border-white/5 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  className="bg-zinc-800 border border-white/5 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-zinc-800 border border-white/5 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <textarea 
                placeholder="Tell me about your project..." 
                rows="4"
                className="w-full bg-zinc-800 border border-white/5 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                onChange={(e) => setFormData({...formData, details: e.target.value})}
              ></textarea>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all"
              >
                SEND VIA WHATSAPP
              </button>
            </form>
          </motion.div>
        )}

      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false, margin: "-50px" }} 
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }} 
        className="mt-16 flex justify-center gap-8 text-zinc-500 font-medium"
      >
        <a href="https://www.instagram.com/epicframes.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
        {/* Replace '#' with your actual links later */}
      </motion.div>
    </section>
  );
};

export default Contact;