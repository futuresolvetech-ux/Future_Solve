import React, { useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function App() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const handleMouseMove = (e) => {
      // Offset by 225px to center the 450px wide/high circle exactly on the cursor
      spotlight.style.transform = `translate3d(${e.clientX - 225}px, ${e.clientY - 225}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative bg-[#051424] overflow-x-hidden">
      {/* Global Animated Background Container */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Slowly crawling space grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid-drift"></div>
        {/* Soft, breathing colored ambient blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-indigo-500/10 rounded-full blur-[130px] animate-blob-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[65vw] h-[65vw] bg-cyan-500/15 rounded-full blur-[150px] animate-blob-float-delayed"></div>
        <div className="absolute top-[40%] right-[10%] w-[40vw] h-[40vw] bg-emerald-500/5 rounded-full blur-[110px] animate-blob-float-alt"></div>
        
        {/* High-fidelity cursor spotlight tracker */}
        <div ref={spotlightRef} className="cursor-spotlight"></div>
      </div>

      {/* Main Website Content positioned above background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}
