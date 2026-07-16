import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/futureSolveData';

// Import generated project mockups from assets
import rankcodaImg from '../assets/rankcoda_mockup.png';
import maieEmrImg from '../assets/maie_emr_mockup.png';
import jobsolvImg from '../assets/jobsolv_mockup.png';
import putitforsaleImg from '../assets/putitforsale_mockup.png';
import darbiImg from '../assets/darbi_mockup.png';
import rahaldriveImg from '../assets/rahaldrive_mockup.png';
import sidekickImg from '../assets/sidekick_mockup.png';

// Map project ID to imported asset
const projectImages = {
  1: rankcodaImg,
  2: maieEmrImg,
  3: jobsolvImg,
  4: putitforsaleImg,
  5: darbiImg,
  6: rahaldriveImg,
  7: sidekickImg
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const categories = ['all', 'Web Platform', 'Healthcare AI', 'HR Technology', 'E-commerce', 'Mobile App'];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  // JobSolv is our top featured customer story (id: 3)
  const featuredStory = projectsData.find(p => p.id === 3) || projectsData[0];

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
    <main className="relative pt-32">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10 bg-glow"></div>

      {/* Hero Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-16 pb-8 text-center max-w-4xl mx-auto animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-mono font-bold">Customer Stories</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent tracking-tight">
          See how companies build and scale with Future Solve
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          Read real-world case studies detailing how we architect high-performance web platforms, automate operations using AI, and deploy native systems.
        </p>
      </section>

      {/* Featured Customer Story Banner (CometChat Style) */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 max-w-container-max mx-auto mb-20 animate-fade-in-up animation-delay-100">
        <div className="glass-card rounded-[2rem] p-8 md:p-12 border border-slate-800 bg-slate-900/20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
          {/* Subtle grid visual helper */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          {/* Content side */}
          <div className="w-full lg:w-3/5 text-left z-10">
            {/* Top Metric Indicator */}
            <div className="text-cyan-400 text-3xl sm:text-4xl font-extrabold font-mono mb-4 tracking-tight flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">trending_up</span>
              <span>{featuredStory.metric}</span>
            </div>
            
            {/* Featured Badge & Client Title */}
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider font-mono">Featured Case Study</span>
              <span className="text-slate-400 text-sm font-bold tracking-wide font-sans">{featuredStory.title}</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6 leading-tight tracking-wide">
              {featuredStory.headline}
            </h2>

            {/* Snippet summary */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              {featuredStory.longDescription.substring(0, 185)}...
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredStory.technologies.map(tech => (
                <span key={tech} className="bg-slate-950/80 border border-slate-850/80 text-slate-400 px-3 py-1 rounded-lg text-xs font-medium font-mono">{tech}</span>
              ))}
            </div>

            {/* Action button */}
            <button 
              onClick={() => openModal(featuredStory)}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-indigo-500/15"
            >
              <span>Read Case Study</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* Visual side */}
          <div className="w-full lg:w-2/5 relative z-10">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden glass-card border border-white/5 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
              <img 
                className="w-full h-full object-cover opacity-80" 
                alt="Workspace and tech metrics" 
                src={projectImages[featuredStory.id]}
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                <p className="text-xs font-bold text-cyan-400 tracking-widest uppercase font-mono mb-1">Impact Result</p>
                <h4 className="text-xl font-extrabold text-white">{featuredStory.impact.split(',')[0]}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Responsive Category Filters */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 max-w-container-max mx-auto text-center mb-12" id="projects">
        
        {/* Mobile Dropdown */}
        <div className="relative md:hidden max-w-xs mx-auto mb-8" ref={dropdownRef}>
          <button 
            type="button" 
            onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
            className={`w-full flex justify-between items-center bg-[#010f1f]/80 text-[#d4e4fa] border rounded-xl p-4 text-sm font-semibold transition-all duration-300 focus:border-[#7bd0ff] focus:ring-1 focus:ring-[#7bd0ff] ${
              isFilterDropdownOpen ? 'border-[#7bd0ff] ring-1 ring-[#7bd0ff]' : 'border-white/10'
            }`}
          >
            <span>Filter: {activeFilter === 'all' ? 'All Stories' : activeFilter}</span>
            <span className={`material-symbols-outlined transition-transform duration-300 ${isFilterDropdownOpen ? 'rotate-180' : ''}`}>
              keyboard_arrow_down
            </span>
          </button>
          
          {isFilterDropdownOpen && (
            <div 
              className="absolute left-0 w-full mt-2 bg-[#051424]/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md z-30 overflow-hidden py-1"
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
                  {cat === 'all' ? 'All Stories' : cat}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Buttons row */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 animate-fade-in-up" id="category-filters">
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
                {cat === 'all' ? 'All Stories' : cat}
              </button>
            );
          })}
        </div>

        {/* Customer Stories Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-24">
          {filteredProjects.map((p, idx) => {
            return (
              <div 
                key={p.id} 
                className="glass-card border border-slate-800/80 bg-slate-900/10 hover:border-slate-700/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full shadow-2xl group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Metric Header Panel with Project Mockup Image */}
                <div className="relative overflow-hidden h-48 bg-slate-950 border-b border-slate-800/60 flex flex-col items-start justify-end p-6 group/header">
                  {/* Background Image */}
                  <img 
                    src={projectImages[p.id]} 
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-500 ease-out"
                  />
                  {/* Grid Overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
                  
                  {/* Glowing Metric Tag overlay */}
                  <div className="relative z-20 flex flex-col items-start">
                    <span className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 rounded-lg text-xs font-extrabold font-mono flex items-center gap-1.5 mb-2 shadow-lg backdrop-blur-md">
                      <span className="material-symbols-outlined text-[10px]">trending_up</span>
                      <span>{p.metric}</span>
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider font-mono uppercase">{p.title}</span>
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow text-left justify-between">
                  <div>
                    {/* Category Pill Tag */}
                    <div className="mb-4">
                      <span className="inline-block bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2.5 py-1 rounded-full text-[10px] font-semibold">{p.category}</span>
                    </div>
                    
                    {/* Headline */}
                    <h3 className="text-base font-bold text-white mb-3 tracking-wide group-hover:text-cyan-300 transition-colors leading-snug">
                      {p.headline}
                    </h3>
                    
                    {/* Summary paragraph */}
                    <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3 font-sans">
                      {p.description}
                    </p>
                  </div>
                  
                  <div>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/60">
                      {p.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="bg-slate-950/80 border border-slate-850/80 text-slate-400 px-2.5 py-1 rounded-lg text-[10px] font-medium font-mono">{tech}</span>
                      ))}
                      {p.technologies.length > 3 && (
                        <span className="bg-slate-950/80 border border-slate-850/80 text-slate-400 px-2.5 py-1 rounded-lg text-[10px] font-medium font-mono">+{p.technologies.length - 3}</span>
                      )}
                    </div>
                    
                    {/* Action link */}
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => openModal(p)}
                        className="text-cyan-400 hover:text-cyan-300 font-bold text-xs tracking-wide transition-colors flex items-center gap-1"
                      >
                        <span>Read Case Study</span>
                        <span className="material-symbols-outlined text-xs font-bold">arrow_forward</span>
                      </button>
                      
                      {p.link !== '#' && (
                        <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Visit Website">
                          <span className="material-symbols-outlined text-lg">launch</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-20 max-w-container-max mx-auto">
        <div className="glass-card rounded-[32px] p-8 md:p-20 text-center relative overflow-hidden animate-fade-in">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 bg-glow rounded-full blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-white animate-fade-in-up">Have a project you want to scale?</h2>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-base sm:text-lg animate-fade-in-up animation-delay-100">
              Partner with Future Solve to architect the software platforms and AI systems that will define your tomorrow.
            </p>
            <Link className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white px-10 py-5 rounded-xl font-bold inline-flex items-center gap-3 text-lg transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20 animate-pulse-glow" to="/contact">
              Consult with an Expert
              <span className="material-symbols-outlined text-sm">launch</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[9999] bg-slate-950/90 flex items-center justify-center p-4 backdrop-blur-md transition-all duration-300" style={{ WebkitBackdropFilter: 'blur(16px)' }} onClick={closeModal}>
          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative scroll-touch-inertia" onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <button onClick={closeModal} className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all z-30 animate-pulse-glow" aria-label="Close details">
              <span className="material-symbols-outlined font-light">close</span>
            </button>
            
            {/* Modal Header with Project Mockup Image */}
            <div className="relative overflow-hidden p-8 md:p-10 border-b border-slate-800/60 text-left min-h-[240px] flex items-end">
              {/* Background Image */}
              <img 
                src={projectImages[selectedProject.id]} 
                alt={selectedProject.title}
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
              
              <div className="relative z-20">
                {/* Metric Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-4 text-cyan-400 text-sm font-bold font-mono backdrop-blur-md">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span>
                  <span>{selectedProject.metric}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide mb-3 leading-tight">
                  {selectedProject.headline}
                </h3>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider font-mono">
                  Client Partner: {selectedProject.title} ({selectedProject.category})
                </p>
              </div>
            </div>
            
            {/* Modal Case Study Body */}
            <div className="p-8 md:p-10 text-left space-y-8">
              
              {/* Challenge */}
              <div>
                <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 font-mono flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-indigo-400">report_problem</span>
                  <span>The Challenge</span>
                </h4>
                <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-sans">{selectedProject.challenge}</p>
              </div>
              
              {/* Solution */}
              <div>
                <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-2 font-mono flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-cyan-400">terminal</span>
                  <span>The Solution</span>
                </h4>
                <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-sans">{selectedProject.solution}</p>
              </div>
              
              {/* Impact */}
              <div className="p-5 rounded-xl border border-emerald-500/10 bg-emerald-500/5">
                <h4 className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2 font-mono flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-emerald-400">check_circle</span>
                  <span>Business Impact</span>
                </h4>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans font-medium">{selectedProject.impact}</p>
              </div>

              {/* Infrastructure Stack */}
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3 font-mono">Technologies Deployed</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="bg-slate-900 border border-slate-800 text-indigo-300 px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono">{tech}</span>
                  ))}
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-4 pt-4 border-t border-slate-800/60">
                {selectedProject.link !== '#' && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="flex-1 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg shadow-indigo-500/10">
                    <span className="material-symbols-outlined text-sm">launch</span>
                    <span>Visit Live Platform</span>
                  </a>
                )}
                <button onClick={closeModal} className="flex-1 py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all duration-300 text-sm">Close Case Study</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
