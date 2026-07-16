import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData, workflowData, statsData } from '../data/futureSolveData';

// Import generated UI mockup assets
import rankcodaImg from '../assets/rankcoda_mockup.png';
import darbiImg from '../assets/darbi_mockup.png';
import cloudImg from '../assets/cloud_mockup.png';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const statsList = [
    { value: statsData.yearsActive, label: 'Years Active', color: 'text-cyan-400' },
    { value: statsData.projectsDelivered, label: 'Projects Delivered', color: 'text-indigo-400' },
    { value: statsData.clientSatisfaction, label: 'Client Satisfaction', color: 'text-cyan-400' }
  ];

  // Carousel slides data for services offered
  const heroSlides = [
    {
      title: "Automated Scalability",
      description: "Intelligent systems that learn from your data to predict and resolve operational bottlenecks before they occur.",
      icon: "psychology",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvr31DvJVyNhGsiLgrcQRc2tzWYl7FkoOA5kvsRHr6kLH7mkS1Nr6ACTW3E70-gNFeHBJvhfvJ4hdHl5SIGxunf4MXdDolEJynT7-AhF0WNjAYrVMlxS3DtJCw7LZLIy3TjlKPmpxjQSROqII8REucS3Vdiyy1L377n9Sl8V7X1I0R72ix3zomhN5vK4OsrIZFlZHKqiMKEelmBFi8-aYeGvKVqWWZewvbk2kEn3ADgUiCxO9BgU0vxA",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
    {
      title: "Web Platform Engineering",
      description: "We engineer high-fidelity web portals, management systems, and high-speed dashboard applications to scale business.",
      icon: "desktop_windows",
      image: rankcodaImg,
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    },
    {
      title: "Mobile App Development",
      description: "Sleek and high-performance native iOS and Android mobile apps equipped with offline-first capabilities.",
      icon: "devices",
      image: darbiImg,
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Secure migrations establishing high-availability microservices, CI/CD pipelines, and auto-scaling architectures.",
      icon: "cloud_queue",
      image: cloudImg,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[850px] flex items-center justify-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-24">
        {/* Atmospheric Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-[#051424]"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-container-max flex flex-col md:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse"></span>
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] font-medium">We build the digital future.</span>
            </div>
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 text-white animate-fade-in-up animation-delay-100">
              Solving Tomorrow's <br className="hidden sm:inline"/>
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Challenges</span> Today
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10 animate-fade-in-up animation-delay-200">
              A premier software development agency specializing in scaling high-performance web systems, robust native mobile apps, and cutting-edge AI integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-300">
              <Link to="/services" className="btn-cyber-glow text-white font-bold px-8 py-4 text-sm tracking-wide">
                <span>Explore Services</span>
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
              <Link to="/portfolio" className="bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-355 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] text-center text-sm tracking-wide">
                Explore Case Studies
              </Link>
            </div>
          </div>
          
          {/* Right Content (Interactive Carousel Card) */}
          <div className="w-full md:w-1/2 relative animate-fade-in-up animation-delay-400">
            <div className="relative w-full min-h-[490px] max-w-[450px] mx-auto md:max-w-none animate-float flex flex-col">
              {/* Radial Blur Backing */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 rounded-[2rem] blur-3xl z-0 pointer-events-none"></div>
              
              <div className="relative glass-card rounded-[2rem] p-4 border border-slate-800/80 bg-slate-900/40 hover:border-slate-700/60 transition-all duration-500 z-10 overflow-hidden flex flex-col justify-between flex-grow">
                {/* SVG border glow outline for card */}
                <svg className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="cyan-indigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" pathLength="100" className="fill-none svg-glow-rect" rx="31" />
                </svg>
                
                {/* Active Slide Rendering Container */}
                <div key={currentSlide} className="animate-fade-in flex flex-col flex-grow justify-between">
                  <div>
                    {/* Slide Image */}
                    <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] mb-4">
                      <img 
                        className="w-full h-full object-cover transition-transform duration-700" 
                        alt={heroSlides[currentSlide].title} 
                        src={heroSlides[currentSlide].image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                    </div>
                    
                    {/* Slide Information */}
                    <div className="p-4 text-left pb-10">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 transition-colors ${heroSlides[currentSlide].badgeColor}`}>
                        <span className="material-symbols-outlined text-2xl">{heroSlides[currentSlide].icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{heroSlides[currentSlide].title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{heroSlides[currentSlide].description}</p>
                    </div>
                  </div>
                </div>

                {/* Manual Navigation Dots Overlay */}
                <div className="absolute bottom-6 right-8 z-20 flex gap-2">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx 
                          ? "bg-cyan-400 w-6 shadow-[0_0_6px_#22d3ee]" 
                          : "bg-slate-700 hover:bg-slate-500"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof: Trusted By */}
      <section className="py-16 bg-slate-900/20 border-y border-white/5 overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-12 animate-fade-in">Empowering Industry Leaders Globally</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 hover:opacity-80 transition-all duration-500">
            <span className="text-2xl font-extrabold tracking-wider text-white flex items-center gap-2 font-sans"><span className="material-symbols-outlined text-cyan-400">rocket_launch</span> NEXUS</span>
            <span className="text-2xl font-extrabold tracking-wider text-white flex items-center gap-2 font-sans"><span className="material-symbols-outlined text-cyan-400">shield</span> ARMOR</span>
            <span className="text-2xl font-extrabold tracking-wider text-white flex items-center gap-2 font-sans"><span className="material-symbols-outlined text-cyan-400">token</span> VERTEX</span>
            <span className="text-2xl font-extrabold tracking-wider text-white flex items-center gap-2 font-sans"><span className="material-symbols-outlined text-cyan-400">data_object</span> SYNAPSE</span>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Architecting Your Legacy</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">We partner with startups and SMEs, solving real-world operational bottlenecks with scalable platforms.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const colors = {
              indigo: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/25',
              cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/25',
              purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/25',
              emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:bg-emerald-500/25',
            };

            return (
              <div 
                key={service.id} 
                className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between h-full animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* SVG border glow outline for card */}
                <svg className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="cyan-indigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" pathLength="100" className="fill-none svg-glow-rect" rx="15" />
                </svg>

                <div>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 border transition-colors ${colors[service.color]}`}>
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4 tracking-wide text-left">{service.title.split(' for ')[0]}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 text-left">{service.description.substring(0, 95)}...</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-800">
                  {service.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="bg-slate-950/80 text-slate-400 px-2 py-0.5 rounded text-xs font-mono">{tech}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How We Solve & Stats Section */}
      <section className="py-24 bg-slate-900/10 border-t border-slate-900 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 text-left animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">High-Fidelity Software Delivery</h2>
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              Future Solve was founded to bridge the gap between creative visual designs and high-performance, robust software execution. We treat every line of code as core infrastructure, ensuring safety, modular clean setups, and clear system scaling pathways.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Whether bootstrapping a Web platform for global ranking optimization, building an AI-powered Electronic Medical Record assistant, or launching scalable ride-sharing services on native devices—our engineers build with focus and dedication.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 gap-6 w-full">
            {statsList.map((stat, idx) => (
              <div 
                key={stat.label} 
                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* SVG border glow outline for card */}
                <svg className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="cyan-indigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" pathLength="100" className="fill-none svg-glow-rect" rx="15" />
                </svg>

                <span className={`text-4xl font-extrabold mb-2 font-mono ${stat.color}`}>{stat.value}</span>
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 max-w-container-max mx-auto border-t border-slate-900/60">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Our Development <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Workflow</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">Our agency combines technical rigor, robust interface architecture, and clear communication.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {workflowData.map((w, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-xl border border-slate-800/85 bg-slate-900/10 hover:border-slate-700/60 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* SVG border glow outline for card */}
              <svg className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cyan-indigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" pathLength="100" className="fill-none svg-glow-rect" rx="11" />
              </svg>

              <div className={`text-3xl font-extrabold mb-4 font-mono ${w.color}`}>{w.phase}</div>
              <h4 className="text-lg font-bold text-white mb-2 tracking-wide">{w.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{w.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 max-w-container-max mx-auto">
        <div className="bg-gradient-to-br from-indigo-950 via-slate-950 to-cyan-950 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden border border-slate-800 shadow-2xl animate-fade-in">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Ready to build the future of your product?</h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Whether you need to scale a high-performance web platform, launch a native mobile app, or automate your workflows with custom AI systems, our engineers are ready to build your solution.
            </p>
            <Link to="/contact" className="inline-flex btn-cyber-glow text-white px-10 py-5 text-base font-bold text-center">
              <span>Book a Free Strategy Consultation</span>
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
      </section>
    </main>
  );
}
