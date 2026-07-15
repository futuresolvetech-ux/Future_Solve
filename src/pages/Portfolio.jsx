import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/futureSolveData';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const categories = ['all', 'Web Platform', 'Healthcare AI', 'HR Technology', 'E-commerce', 'Mobile App'];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFilterDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove('overflow-hidden');
  };

  const handleMobileFilterSelect = (cat) => {
    setActiveFilter(cat);
    setIsFilterDropdownOpen(false);
  };

  return (
    <main className="relative z-10 pt-32">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10 bg-glow"></div>

      {/* Hero Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-20 text-center max-w-4xl mx-auto animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/40 mb-6">
          <span className="material-symbols-outlined text-[16px] text-cyan-400">verified</span>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Success Stories</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent tracking-tight">
          Delivered Systems
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          A showcase of systems engineered and deployed successfully by Future Solve across multiple sectors.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/15" href="#projects">
            Explore Case Studies
            <span className="material-symbols-outlined">arrow_downward</span>
          </a>
        </div>
      </section>

      {/* Hybrid Responsive Category Filters */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 max-w-container-max mx-auto text-center mb-12" id="projects">
        
        {/* Method B: Clean Dropdown for Mobile (below md break) */}
        <div className="relative md:hidden max-w-xs mx-auto mb-8" ref={dropdownRef}>
          <button 
            type="button" 
            onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
            className={`w-full flex justify-between items-center bg-[#010f1f]/80 text-[#d4e4fa] border rounded-xl p-4 text-sm font-semibold transition-all duration-300 focus:border-[#7bd0ff] focus:ring-1 focus:ring-[#7bd0ff] ${
              isFilterDropdownOpen ? 'border-[#7bd0ff] ring-1 ring-[#7bd0ff]' : 'border-white/10'
            }`}
          >
            <span>Filter: {activeFilter === 'all' ? 'All Systems' : activeFilter}</span>
            <span className={`material-symbols-outlined transition-transform duration-300 ${isFilterDropdownOpen ? 'rotate-180' : ''}`}>
              keyboard_arrow_down
            </span>
          </button>
          
          {isFilterDropdownOpen && (
            <div 
              className="absolute left-0 w-full mt-2 bg-[#051424]/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md z-30 overflow-hidden py-1 animate-fade-in"
              style={{ WebkitBackdropFilter: 'blur(16px)' }}
            >
              {categories.map(cat => (
                <div 
                  key={cat}
                  onClick={() => handleMobileFilterSelect(cat)}
                  className={`px-4 py-3 text-sm text-[#d4e4fa] hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-cyan-500/20 hover:text-white cursor-pointer transition-colors text-left ${
                    activeFilter === cat ? 'bg-indigo-500/20 text-white font-bold' : ''
                  }`}
                >
                  {cat === 'all' ? 'All Systems' : cat}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Method A: Wrapped Buttons Row for Desktop/Tablet (above md break) */}
        <div className="hidden md:flex flex-wrap justify-center gap-3" id="category-filters">
          {categories.map(cat => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl font-medium tracking-wide transition-all duration-300 text-sm ${
                  isActive 
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/20 scale-105 border border-indigo-400/20 animate-pulse-glow" 
                    : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-md"
                }`}
              >
                {cat === 'all' ? 'All Systems' : cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-24">
          {filteredProjects.map((p, idx) => {
            return (
              <div 
                key={p.id} 
                className="glass-card border border-slate-800/80 bg-slate-900/10 hover:border-slate-700/60 hover:bg-slate-900/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full shadow-2xl group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-indigo-950 via-slate-950 to-cyan-950 bg-grid-pattern border-b border-slate-800/60 flex items-center justify-center p-6 text-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-cyan-500/15 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                  <h3 className="text-2xl font-extrabold text-white z-10 tracking-wide font-sans group-hover:scale-105 transition-transform duration-300">{p.title}</h3>
                  
                  {p.featured && (
                    <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 px-2.5 py-1 rounded-lg text-xs font-extrabold flex items-center gap-1.5 shadow-lg">
                      <span className="material-symbols-outlined text-slate-950 text-xs" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>star</span>
                      <span>Featured</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow text-left">
                  <div className="mb-3">
                    <span className="inline-block bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2.5 py-1 rounded-full text-xs font-semibold">{p.category}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-sans">{p.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {p.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="bg-slate-950/80 border border-slate-850/80 text-slate-400 px-2.5 py-1 rounded-lg text-xs font-medium font-mono">{tech}</span>
                    ))}
                    {p.technologies.length > 3 && (
                      <span className="bg-slate-950/80 border border-slate-850/80 text-slate-400 px-2.5 py-1 rounded-lg text-xs font-medium font-mono">+{p.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    {p.link !== '#' && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-md shadow-indigo-500/10 text-center">
                        <span className="material-symbols-outlined text-sm">launch</span>
                        <span>Live Preview</span>
                      </a>
                    )}
                    <button 
                      onClick={() => openModal(p)}
                      className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-slate-300 bg-slate-950/60 border border-slate-850 hover:bg-slate-800 hover:border-slate-700 transition-all duration-300 text-sm"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900/10 py-24 relative overflow-hidden border-y border-slate-900">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 max-w-container-max mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-16 text-white animate-fade-in-up">Quantifiable Global Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center animate-fade-in-up">
              <span className="text-4xl font-extrabold text-cyan-400 mb-2 font-mono">5+</span>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Years Active</span>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up animation-delay-100">
              <span className="text-4xl font-extrabold text-indigo-400 mb-2 font-mono">50+</span>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up animation-delay-200">
              <span className="text-4xl font-extrabold text-cyan-400 mb-2 font-mono">100%</span>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Client Satisfaction</span>
            </div>
            <div className="flex flex-col items-center animate-fade-in-up animation-delay-300">
              <span className="text-4xl font-extrabold text-indigo-400 mb-2 font-sans">Egypt</span>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Location Base</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-32 max-w-container-max mx-auto">
        <div className="glass-card rounded-[32px] p-8 md:p-20 text-center relative overflow-hidden animate-fade-in">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 bg-glow rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white animate-fade-in-up">Ready to start your project?</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-base sm:text-lg animate-fade-in-up animation-delay-100">
              Partner with Future Solve to engineer the solutions that will define your industry's tomorrow. Our team is ready to accelerate your transformation.
            </p>
            <Link className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white px-10 py-5 rounded-xl font-bold inline-flex items-center gap-3 text-lg transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20 animate-pulse-glow" to="/contact">
              Consult with an Expert
              <span className="material-symbols-outlined text-sm">launch</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4 backdrop-blur-md transition-all duration-300" style={{ WebkitBackdropFilter: 'blur(16px)' }} onClick={closeModal}>
          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative scroll-touch-inertia" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all z-30" aria-label="Close details">
              <span className="material-symbols-outlined font-light">close</span>
            </button>
            <div className="bg-gradient-to-br from-indigo-950 via-slate-950 to-cyan-950 bg-grid-pattern p-8 md:p-10 border-b border-slate-800/60 text-left relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
              <div className="relative z-10 pr-10">
                <span className="inline-block bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2.5 py-1 rounded-full text-xs font-semibold mb-3">{selectedProject.category}</span>
                <h3 className="text-3xl font-extrabold text-white tracking-wide mb-2">{selectedProject.title}</h3>
              </div>
            </div>
            <div className="p-8 md:p-10 text-left">
              <h4 className="text-sm font-semibold tracking-wider text-slate-500 uppercase mb-3 font-mono">System Description</h4>
              <p className="text-slate-300 text-base leading-relaxed mb-8 font-sans">{selectedProject.longDescription}</p>
              
              <h4 className="text-sm font-semibold tracking-wider text-slate-500 uppercase mb-3 font-mono">Infrastructure Stack</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.technologies.map(tech => (
                  <span key={tech} className="bg-slate-900 border border-slate-800 text-indigo-300 px-3.5 py-1.5 rounded-lg text-sm font-medium font-mono">{tech}</span>
                ))}
              </div>
              
              <div className="flex gap-4">
                {selectedProject.link !== '#' && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-sm">launch</span>
                    <span>Visit Live Platform</span>
                  </a>
                )}
                <button onClick={closeModal} className="flex-1 py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all duration-300 text-sm">Close Overview</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
