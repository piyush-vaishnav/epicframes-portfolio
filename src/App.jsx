import React from 'react';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative scroll-smooth overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="py-10 border-t border-white/5 text-center text-zinc-600 text-sm">
        © {new Date().getFullYear()} EpicFrames.
      </footer>
    </div>
  )
}

export default App;