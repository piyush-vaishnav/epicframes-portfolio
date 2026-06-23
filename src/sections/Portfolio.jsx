import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';

const projects = [
  // Reels
  { id: 1, title: "Reel Edit 01", category: "Reel", thumbnail: "https://img.youtube.com/vi/6YZgIqrrjms/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/6YZgIqrrjms" },
  { id: 2, title: "Reel Edit 02", category: "Reel", thumbnail: "https://img.youtube.com/vi/h-tJnBS3SJs/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/h-tJnBS3SJs" },
  { id: 3, title: "Reel Edit 03", category: "Reel", thumbnail: "https://img.youtube.com/vi/t91KJTmRZnU/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/t91KJTmRZnU" },
  { id: 4, title: "Shorts Edit 01", category: "Reel", thumbnail: "https://img.youtube.com/vi/faBUZo3UMFI/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/faBUZo3UMFI" },
  { id: 5, title: "Reel Edit 04", category: "Reel", thumbnail: "https://img.youtube.com/vi/MhYkC7PzCnU/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/MhYkC7PzCnU" },
  { id: 6, title: "Reel Edit 05", category: "Reel", thumbnail: "https://img.youtube.com/vi/z877-f3tMek/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/z877-f3tMek" },
  { id: 7, title: "Reel Edit 06", category: "Reel", thumbnail: "https://img.youtube.com/vi/Q7fvx7Qkmjk/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/Q7fvx7Qkmjk" },
  { id: 8, title: "Shorts Edit 02", category: "Reel", thumbnail: "https://img.youtube.com/vi/y7tlg0ikmu4/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/y7tlg0ikmu4" },
  { id: 9, title: "Shorts Edit 03", category: "Reel", thumbnail: "https://img.youtube.com/vi/z0J3A8ByeB0/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/z0J3A8ByeB0" },
  { id: 10, title: "Reel Edit 07", category: "Reel", thumbnail: "https://img.youtube.com/vi/_BtQGngNTzI/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/_BtQGngNTzI" },
  // Wedding Teaser
  { id: 11, title: "Wedding Teaser 01", category: "Wedding Teaser", thumbnail: "https://img.youtube.com/vi/3YVZxddz534/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/3YVZxddz534" },
  { id: 12, title: "Wedding Teaser 02", category: "Wedding Teaser", thumbnail: "https://img.youtube.com/vi/S_uoKdzLj3M/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/S_uoKdzLj3M" },
  // Wedding Highlight
  { id: 20, title: "Wedding Highlight", category: "Wedding Highlight", thumbnail: "https://img.youtube.com/vi/H-lhK3XQgE4/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/H-lhK3XQgE4" },
  // Wedding Film
  { id: 13, title: "Wedding Film", category: "Wedding Film", thumbnail: "https://img.youtube.com/vi/dWRXBo5goO4/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/dWRXBo5goO4" },
  // Pre-Wedding
  { id: 14, title: "Pre-Wedding 01", category: "Pre-Wedding", thumbnail: "https://img.youtube.com/vi/FlaA2vrZLR8/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/FlaA2vrZLR8" },
  { id: 15, title: "Pre-Wedding 02", category: "Pre-Wedding", thumbnail: "https://img.youtube.com/vi/i5F1EcJHwpI/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/i5F1EcJHwpI" },
  // Fashion
  { id: 16, title: "Fashion Edit 01", category: "Fashion", thumbnail: "https://img.youtube.com/vi/t-ENxjGEV38/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/t-ENxjGEV38" },
  { id: 17, title: "Fashion Edit 02", category: "Fashion", thumbnail: "https://img.youtube.com/vi/CS-5aq1zE78/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/CS-5aq1zE78" },
  { id: 18, title: "Fashion Edit 03", category: "Fashion", thumbnail: "https://img.youtube.com/vi/8qfP3SmNUdc/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/8qfP3SmNUdc" },
  { id: 19, title: "Fashion Edit 04", category: "Fashion", thumbnail: "https://img.youtube.com/vi/cY5eWXp5I9Q/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/cY5eWXp5I9Q" },
  // Real Estate
  { id: 21, title: "Real Estate Video 03", category: "Real Estate", thumbnail: "https://img.youtube.com/vi/DgKo3XhgpO8/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/DgKo3XhgpO8" },
  { id: 22, title: "Real Estate Video 04", category: "Real Estate", thumbnail: "https://img.youtube.com/vi/nceHbqpQ790/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/nceHbqpQ790" },
  { id: 23, title: "Real Estate Video 05", category: "Real Estate", thumbnail: "https://img.youtube.com/vi/RUk6t1kP4-E/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/RUk6t1kP4-E" },
  { id: 24, title: "Real Estate Video 06", category: "Real Estate", thumbnail: "https://img.youtube.com/vi/M1-N2ra1cb0/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/M1-N2ra1cb0" },
  // E-Commerce
  { id: 25, title: "E-Commerce Video 01", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/gqqqMtYcKC4/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/gqqqMtYcKC4" },
  { id: 26, title: "E-Commerce Video 02", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/SVfogORMcxY/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/SVfogORMcxY" },
  { id: 27, title: "E-Commerce Video 03", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/NoeyWNZnXSY/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/NoeyWNZnXSY" },
  { id: 28, title: "E-Commerce Video 04", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/fXIoZujRlo4/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/fXIoZujRlo4" },
  { id: 29, title: "E-Commerce Video 05", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/r5sPKkT2_x8/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/r5sPKkT2_x8" },
  { id: 30, title: "E-Commerce Video 06", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/hglH1cXnh50/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/hglH1cXnh50" },
  { id: 31, title: "E-Commerce Video 07", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/r4zCOsQynJA/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/r4zCOsQynJA" },
  { id: 32, title: "E-Commerce Video 08", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/XsI1W8TtZQc/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/XsI1W8TtZQc" },
  { id: 33, title: "E-Commerce Video 09", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/VWEauKdTxBA/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/VWEauKdTxBA" },
  { id: 34, title: "E-Commerce Video 10", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/PxgNSrhDmd4/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/PxgNSrhDmd4" },
  { id: 35, title: "E-Commerce Video 11", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/sMT2fa70Wy4/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/sMT2fa70Wy4" },
  { id: 36, title: "E-Commerce Video 12", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/zuIaxuJ2EAw/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/zuIaxuJ2EAw" },
  { id: 37, title: "E-Commerce Video 13", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/V3iUZGvmbIc/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/V3iUZGvmbIc" },
  { id: 38, title: "E-Commerce Video 14", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/NNAcy-SWwhM/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/NNAcy-SWwhM" },
  { id: 39, title: "E-Commerce Video 15", category: "E-Commerce", thumbnail: "https://img.youtube.com/vi/DPr-JvzF4-c/hqdefault.jpg", videoUrl: "https://www.youtube.com/embed/DPr-JvzF4-c" }
];

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"]
  });
  
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const headerOpacity = useTransform(smoothScroll, [0, 1], [0, 1]);
  const headerY = useTransform(smoothScroll, [0, 1], [100, 0]);

  const categories = ["All", "Reel", "Wedding Teaser", "Wedding Highlight", "Wedding Film", "Pre-Wedding", "Fashion", "E-Commerce", "Real Estate"];

  // The logic: filter the list based on the active state.
  // If "All" is selected, show only up to 2 projects from each category.
  const filteredProjects = activeFilter === "All" 
    ? projects.filter((() => {
        const counts = {};
        return (p) => {
          counts[p.category] = (counts[p.category] || 0) + 1;
          return counts[p.category] <= 2; // Change this to 1 if you strictly want 1 per category
        };
      })())
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" ref={ref} className="min-h-screen py-24 px-6 max-w-7xl mx-auto flex flex-col justify-center w-full">
      <motion.h2 style={{ opacity: headerOpacity, y: headerY }} className="text-4xl font-black mb-8">
        SELECTED WORK
      </motion.h2>

      {/* Filter Bar */}
      <motion.div style={{ opacity: headerOpacity, y: headerY }} className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
              activeFilter === cat 
              ? "bg-blue-600 border-blue-600 text-white" 
              : "border-zinc-800 text-zinc-500 hover:border-zinc-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: (index % 3) * 0.15, duration: 0.8, type: "spring", bounce: 0.3 }}>
            <VideoCard 
              {...project}
              onClick={() => setSelectedVideo(project.videoUrl)} 
            />
          </motion.div>
        ))}
      </div>

      <VideoModal 
        isOpen={!!selectedVideo} 
        videoUrl={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
    </section>
  );
};

export default Portfolio;