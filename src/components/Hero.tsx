import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Github, Linkedin, Mail, MapPin, Sparkles, Phone, Download, ShieldCheck, Briefcase } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { HanishProfileAvatar } from './HanishProfileAvatar';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAiAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAiAssistant }) => {
  const roles = [
    "AI Engineer Intern @ DecodeLabs",
    "Data Analytics Intern @ iStudio",
    "Founder & Lead @ UniSell",
    "B.Tech CSE Student @ IIIT Surat"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-medium text-indigo-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalData.status}</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">IIIT Surat '29</span>
            </div>

            {/* Name Heading */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
                Hi, I'm <span className="text-gradient">{personalData.name}</span>
              </h1>
              
              {/* Dynamic Role Ticker */}
              <div className="h-10 mt-3 flex items-center overflow-hidden">
                <motion.p
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg sm:text-2xl font-semibold text-slate-300 font-mono flex items-center gap-2"
                >
                  <span className="text-indigo-400">&gt;</span>
                  <span>{roles[currentRoleIndex]}</span>
                </motion.p>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {personalData.bio}
            </p>

            {/* Key Facts / Location Chips */}
            <div className="flex flex-wrap gap-3 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                <span>Data Analytics @ iStudio | AI @ DecodeLabs</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>KANAD S.H.I.E.L.D. Finalist</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold glass-panel border border-slate-700/80 text-slate-200 hover:text-white hover:border-indigo-500/50 transition-all hover:bg-slate-800/80"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Resume CV</span>
              </button>

              <button
                onClick={onOpenAiAssistant}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 transition-all"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Ask AI</span>
              </button>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                  title="Email Hanish"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalData.phone}`}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
                  title="Phone Contact"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Card / Visual Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-40 animate-pulse" />

              {/* Main Card */}
              <div className="relative glass-panel rounded-2xl p-6 border border-slate-800/90 shadow-2xl space-y-6">
                
                {/* Header Profile Frame with Photo */}
                <div className="flex items-center gap-4">
                  <HanishProfileAvatar size="md" showBadges={false} className="shrink-0" />

                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-300 mb-1">
                      <span>CSE @ IIIT Surat</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-white">{personalData.name}</h3>
                    <p className="text-xs text-slate-300 mt-0.5 font-medium">AI Engineer & Founder</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-indigo-400 shrink-0" />
                      <span>Hyderabad & Surat, India</span>
                    </p>
                  </div>
                </div>

                {/* Metric Badges Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 flex flex-col">
                    <span className="text-2xl font-extrabold text-indigo-400">2+</span>
                    <span className="text-xs text-slate-300 font-medium">Internships Completed</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">DecodeLabs & iStudio</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 flex flex-col">
                    <span className="text-2xl font-extrabold text-purple-400">1</span>
                    <span className="text-xs text-slate-300 font-medium">SME Platform Founded</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">UniSell E-Commerce</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 flex flex-col">
                    <span className="text-2xl font-extrabold text-pink-400">Finalist</span>
                    <span className="text-xs text-slate-300 font-medium">KANAD S.H.I.E.L.D.</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">National Hackathon '26</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/90 flex flex-col">
                    <span className="text-2xl font-extrabold text-emerald-400">DSA</span>
                    <span className="text-xs text-slate-300 font-medium">Certified Developer</span>
                    <span className="text-[10px] text-slate-500 mt-0.5">C++, Python, OOP</span>
                  </div>
                </div>

                {/* Tech Pill Cluster */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span>CORE TECH STACK</span>
                    <span className="text-indigo-400">5+ Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["C++", "Python", "React", "SQL", "DBMS", "Pandas", "Express", "Tailwind"].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800 hover:border-indigo-500/40 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
