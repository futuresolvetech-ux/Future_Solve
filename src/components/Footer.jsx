import React from 'react';
import { Link } from 'react-router-dom';
import { statsData } from '../data/futureSolveData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full border-t border-white/5 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-16 w-full max-w-container-max mx-auto">
        <div className="md:col-span-1 text-left">
          <div className="flex flex-col text-left mb-4">
            <span className="text-xl font-extrabold tracking-wider text-white block leading-none">FUTURE SOLVE</span>
            <span className="text-[9px] font-bold tracking-[0.25em] text-cyan-400 mt-1.5 uppercase font-mono">Software Solutions</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            High-fidelity software engineering agency specialized in deploying scalable web architectures, native mobile platforms, and customized machine learning integrations.
          </p>
          <div className="flex gap-4">
            <a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#" aria-label="Website">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#" aria-label="Link">
              <span className="material-symbols-outlined">link</span>
            </a>
            <a className="text-slate-400 hover:text-cyan-400 transition-colors" href="#" aria-label="Groups">
              <span className="material-symbols-outlined">groups</span>
            </a>
          </div>
        </div>
        
        <div className="text-left">
          <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h5>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link className="hover:text-cyan-400 transition-colors" to="/">About Us</Link></li>
            <li><Link className="hover:text-cyan-400 transition-colors" to="/portfolio">Case Studies</Link></li>
            <li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
          </ul>
        </div>
        
        <div className="text-left">
          <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Resources</h5>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a className="hover:text-cyan-400 transition-colors" href="#">Documentation</a></li>
            <li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-cyan-400 transition-colors" href="#">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className="text-left">
          <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Connect</h5>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-cyan-400 text-lg">mail</span>
              <a href={`mailto:${statsData.email}`} className="hover:text-cyan-400 transition-colors">{statsData.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-cyan-400 text-lg">call</span> 
              <span>{statsData.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-cyan-400 text-lg">location_on</span> 
              <span>{statsData.location}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/5 py-8 text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Future Solve. All rights reserved.</p>
      </div>
    </footer>
  );
}
