import React, { useState, useRef, useEffect } from 'react';
import { statsData } from '../data/futureSolveData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: 'Full-Stack Web Development',
    message: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dropdownRef = useRef(null);

  const servicesList = [
    "Full-Stack Web Development",
    "Mobile App Development",
    "AI & Machine Learning",
    "Cloud Orchestration"
  ];

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const selectService = (val) => {
    setFormData(prev => ({
      ...prev,
      service: val
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data asynchronously to FormSubmit endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${statsData.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Company: formData.company,
          Email: formData.email,
          Service: formData.service,
          Message: formData.message,
          _subject: `⚡ New Project scope Inquiry - ${formData.company}`,
          _captcha: "false" // Bypasses Google reCAPTCHA so visitors have zero verification steps
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form inputs on success
        setFormData({
          name: '',
          company: '',
          email: '',
          service: 'Full-Stack Web Development',
          message: ''
        });

        // Hide success banner after 4 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);
      } else {
        alert("Something went wrong. Please check inputs or contact support directly.");
      }
    } catch (err) {
      console.error(err);
      alert("Could not connect to the form server. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-32 pb-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 max-w-container-max mx-auto animate-fade-in-up">
      {/* Hero Section */}
      <div className="mb-16 text-center md:text-left max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
          Let's solve the <span className="text-cyan-400">future</span> together.
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Ready to scale your next product? Send us an inquiry and our system architects will get back to you within 24 hours.
        </p>
      </div>
      
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form Section */}
        <div className="lg:col-span-7 glass-card p-6 md:p-10 rounded-xl ambient-glow animate-fade-in-up animation-delay-100">
          <h3 className="text-xl font-bold text-white mb-6 text-left tracking-wide font-sans">Project Scope Inquiry</h3>
          <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2 text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500" htmlFor="name">Contact Name</label>
                <input 
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full font-sans text-sm"
                />
              </div>
              <div className="flex flex-col space-y-2 text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500" htmlFor="company">Company Name</label>
                <input 
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Future Solve Client Inc."
                  required
                  className="w-full font-sans text-sm"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2 text-left">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500" htmlFor="email">Business Email</label>
                <input 
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@futuresolve.com"
                  required
                  className="w-full font-sans text-sm"
                />
              </div>
              
              {/* Premium Custom React Select Dropdown */}
              <div className="flex flex-col space-y-2 text-left" ref={dropdownRef}>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Required Service</label>
                <div className="relative">
                  <button 
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full flex justify-between items-center bg-[#010f1f]/80 text-[#d4e4fa] border rounded-xl p-4 transition-all duration-300 text-sm font-sans ${
                      isDropdownOpen ? 'border-[#7bd0ff] ring-1 ring-[#7bd0ff]' : 'border-white/10'
                    }`}
                  >
                    <span>{formData.service}</span>
                    <span className={`material-symbols-outlined transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                      keyboard_arrow_down
                    </span>
                  </button>
                  
                  {isDropdownOpen && (
                    <div 
                      className="absolute left-0 w-full mt-2 bg-[#051424]/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-md z-50 overflow-hidden py-1"
                      style={{ WebkitBackdropFilter: 'blur(16px)' }}
                    >
                      {servicesList.map(val => (
                        <div 
                          key={val}
                          onClick={() => selectService(val)}
                          className={`px-4 py-3 text-sm text-[#d4e4fa] hover:bg-gradient-to-r hover:from-indigo-500/20 hover:to-cyan-500/20 hover:text-white cursor-pointer transition-colors ${
                            formData.service === val ? 'bg-indigo-500/20 text-white' : ''
                          }`}
                        >
                          {val}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 text-left">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500" htmlFor="message">Project Objectives</label>
              <textarea 
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Provide details about your project scope, features, expected platform scaling..."
                required
                rows="5"
                className="w-full font-sans text-sm resize-none"
              />
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-cyber-glow text-white py-4 text-lg font-bold mt-4 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}</span>
              <svg className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cyan-indigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" pathLength="100" className="fill-none svg-glow-rect" rx="11" />
              </svg>
            </button>
            
            {isSubmitted && (
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm text-center font-semibold mt-4">
                Thank you! Your project inquiry has been logged. Our system architect will connect shortly.
              </div>
            )}
          </form>
        </div>
        
        {/* Contact Info & Map Sidebar */}
        <div className="lg:col-span-5 space-y-8 animate-fade-in-up animation-delay-200">
          {/* Contact Details */}
          <div className="glass-card p-6 md:p-8 rounded-xl space-y-8">
            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4 text-left">Corporate Info</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-left">
                <div className="bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-lg flex items-center justify-center text-cyan-400">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1 font-mono">OFFICE LOCATION</p>
                  <p className="text-sm font-semibold text-slate-350">{statsData.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-left">
                <div className="bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-lg flex items-center justify-center text-cyan-400">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1 font-mono">EMAIL SUPPORT</p>
                  <a href={`mailto:${statsData.email}`} className="text-sm font-semibold text-slate-350 hover:text-cyan-400 transition-colors cursor-pointer">{statsData.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 text-left">
                <div className="bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-lg flex items-center justify-center text-cyan-400">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1 font-mono">GLOBAL HOTLINE</p>
                  <p className="text-sm font-semibold text-slate-350">{statsData.phone}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stylized Map Placeholder */}
          <div className="relative h-[280px] rounded-xl overflow-hidden glass-card animate-fade-in-up animation-delay-300">
            <div className="absolute inset-0 z-0 bg-slate-900" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-QqIYz_zDM1XJwSI7HLIpf23Z8ZB5n4KJWE0yeV20jiBtFCTiuZVtGwd3c6NfkhSXsOTEKUJak0uIATPmDnCcEM7YLLIcs8NVGOfon1lDBxoU1AJn8Vz1amgxGwoyKEnmiXbJ0GcEzZUsPLXAI1ShleYjhlisfUChX-sMN-_ssHsnn32bIkb1MPBjZdlizrzGM0QghcFGjEhSMwLL6FaDQWvgONkvA8OO0BtFWp8_GWqVoJiypbQevw')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            {/* Map Overlay UI */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-xs text-slate-300">Global Headquarters ({statsData.location})</span>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <button className="bg-slate-900/80 backdrop-blur-md p-2 rounded-lg border border-white/10 hover:bg-slate-800 transition-colors" aria-label="Fullscreen Map">
                <span className="material-symbols-outlined text-white">fullscreen</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
