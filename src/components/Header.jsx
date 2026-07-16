import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
    if (!isMobileOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <>
      {/* Top Navigation Bar with fluid mobile-first padding & dynamic glass transition */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#051424]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl h-20' 
            : 'bg-transparent border-b border-transparent h-24'
        }`}
        style={{ WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none' }}
      >
        <nav className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 h-full w-full max-w-container-max mx-auto">
          <div className="flex flex-col text-left">
            <Link to="/" onClick={closeMobileMenu} className="text-xl font-extrabold tracking-wider text-white hover:text-cyan-400 transition-colors leading-none">
              FUTURE SOLVE
            </Link>
            <span className="text-[9px] font-bold tracking-[0.25em] text-cyan-400 mt-1.5 uppercase font-mono">Software Solutions</span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1 text-sm transition-all" 
                  : "text-slate-400 hover:text-white font-medium transition-colors text-sm"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive 
                  ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1 text-sm transition-all" 
                  : "text-slate-400 hover:text-white font-medium transition-colors text-sm"
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                isActive 
                  ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1 text-sm transition-all" 
                  : "text-slate-400 hover:text-white font-medium transition-colors text-sm"
              }
            >
              Portfolio
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive 
                  ? "text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1 text-sm transition-all" 
                  : "text-slate-400 hover:text-white font-medium transition-colors text-sm"
              }
            >
              Contact
            </NavLink>
          </div>
          
          {/* Header CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden sm:inline-flex btn-cyber-glow text-[#d4e4fa] hover:text-white px-5 py-2.5 text-sm font-bold">
              <span>Get Started</span>
              <svg className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cyan-indigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" pathLength="100" className="fill-none svg-glow-rect" rx="11" />
              </svg>
            </Link>
            <button onClick={toggleMobileMenu} className="md:hidden text-white hover:text-cyan-400 transition-colors focus:outline-none flex items-center justify-center p-2 rounded-xl border border-white/5 bg-white/5" aria-label="Toggle Menu">
              <span className="material-symbols-outlined text-2xl">{isMobileOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer with direct iOS Safari backdrop-filter support */}
      <div 
        className={`fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-lg md:hidden transition-all duration-300 transform ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ WebkitBackdropFilter: 'blur(16px)' }}
      >
        <div className="flex flex-col h-full p-6 scroll-touch-inertia overflow-y-auto">
          <div className="flex justify-between items-center mb-12">
            <div className="flex flex-col text-left">
              <span className="text-xl font-extrabold tracking-wider text-white">FUTURE SOLVE</span>
              <span className="text-[9px] font-bold tracking-[0.25em] text-cyan-400 mt-1.5 uppercase font-mono">Software Solutions</span>
            </div>
            <button onClick={toggleMobileMenu} className="text-white hover:text-cyan-400 transition-colors focus:outline-none" aria-label="Close Menu">
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-xl">
            <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-cyan-400 font-bold" : "text-slate-355 font-medium hover:text-cyan-400"}>Home</NavLink>
            <NavLink to="/services" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-cyan-400 font-bold" : "text-slate-355 font-medium hover:text-cyan-400"}>Services</NavLink>
            <NavLink to="/portfolio" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-cyan-400 font-bold" : "text-slate-355 font-medium hover:text-cyan-400"}>Portfolio</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "text-cyan-400 font-bold" : "text-slate-355 font-medium hover:text-cyan-400"}>Contact</NavLink>
          </nav>
          <div className="mt-auto pt-12">
            <Link to="/contact" onClick={closeMobileMenu} className="block w-full text-center btn-cyber-glow text-white py-4 font-bold">
              <span>Get Started</span>
              <svg className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cyan-indigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" pathLength="100" className="fill-none svg-glow-rect" rx="11" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
