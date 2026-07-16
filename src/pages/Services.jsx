import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/futureSolveData';

export default function Services() {
  return (
    <main className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Animation Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-glow"></div>
      
      <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        {/* Header Section */}
        <header className="max-w-3xl mb-20 text-left animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Our Services</h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We partner with small-to-medium businesses (SMEs) and growing startups, solving real-world operational bottlenecks with modern technological ideas and scalable platforms.
          </p>
        </header>
        
        {/* Services Grid: Bento Style (Optimized for Mobile/Tablet/Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {servicesData.map((service, idx) => {
            const colors = {
              indigo: {
                iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
                glow: 'bg-indigo-500/5 group-hover:bg-indigo-500/10',
                colSpan: 'col-span-12 lg:col-span-8'
              },
              cyan: {
                iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
                glow: 'bg-cyan-500/5 group-hover:bg-cyan-500/10',
                colSpan: 'col-span-12 lg:col-span-4'
              },
              purple: {
                iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
                glow: 'bg-purple-500/5 group-hover:bg-purple-500/10',
                colSpan: 'col-span-12 lg:col-span-4'
              },
              emerald: {
                iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
                glow: 'bg-emerald-500/5 group-hover:bg-emerald-500/10',
                colSpan: 'col-span-12 lg:col-span-8'
              }
            };

            const config = colors[service.color];

            return (
              <div 
                key={service.id} 
                className={`${config.colSpan} glass-card p-10 rounded-xl relative overflow-hidden group flex flex-col justify-between animate-fade-in-up`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* SVG border glow outline for card */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="cyan-indigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <rect className="w-full h-full fill-none svg-glow-rect" rx="12" />
                </svg>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 border ${config.iconBg}`}>
                    <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-slate-400 mb-8 text-sm sm:text-base leading-relaxed">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                      {service.technologies.map(tech => (
                        <span key={tech} className="bg-slate-950/80 border border-slate-850/80 text-slate-400 px-3 py-1 rounded-lg text-xs font-medium font-mono">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`absolute -right-16 -bottom-16 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-colors ${config.glow}`}></div>
              </div>
            );
          })}
        </div>
        
        {/* Upgraded Visual Break / Image Section */}
        <section className="mt-32 mb-16 animate-fade-in animation-delay-300">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden glass-card border border-white/5 hover:border-white/10 transition-all duration-300">
            {/* SVG border glow outline for card */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="cyan-indigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
              <rect className="w-full h-full fill-none svg-glow-rect" rx="16" />
            </svg>

            {/* High-fidelity dark blend overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#051424] via-[#051424]/90 to-transparent z-10"></div>
            <img 
              className="w-full h-full object-cover opacity-60 scale-105" 
              alt="Futuristic laboratory environment" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfC7byJlzj6mP20LtP47e3tH1BZWui64rzy-SLW2VbkMwDHBSaiBc9L8O6xB4-8NbReIwU46zjCdNT_p0b2PGasbdBVV_gxCRXA7b2BDCPwM2OUY8T79EF_siWv3UOp-2ax1WTxxAIax-IBMihBXCObBmBwdltuY61XHTRmUKTf2FTTQIp6bzliWohsw-SoYexCbGjHpOkTTRRdiASGlG_vejlenbnF0sEDIs5oS25MwnMpTxxw7In2w"
            />
            <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
              <div className="max-w-lg text-left">
                {/* Glowing Pill Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="text-[10px] font-bold tracking-wider text-cyan-400 uppercase font-mono">System Orchestration</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-wide">Innovation Integrated</h3>
                <p className="text-slate-400 mb-6 text-sm sm:text-base leading-relaxed">
                  We don't just build software; we build the future infrastructure of your organization. Let's discuss your next breakthrough.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex btn-cyber-glow text-white px-8 py-3.5 text-sm font-bold tracking-wide text-center"
                >
                  <span>Schedule a Consult</span>
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="cyan-indigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                    <rect className="w-full h-full fill-none svg-glow-rect" rx="12" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
