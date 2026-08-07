import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, Cpu, Rocket, Code2, Database, Shield, Target, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { HanishProfileAvatar } from './HanishProfileAvatar';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5 text-indigo-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Passionate Developer & <span className="text-gradient">Tech Entrepreneur</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Combining rigorous computer science fundamentals from IIIT Surat with real-world internship experience in AI & Data Analytics.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Professional Background</h3>
                    <p className="text-xs text-indigo-400 font-mono mt-0.5">Hanish Musini • IIIT Surat</p>
                  </div>
                </div>

                {/* Profile Photo Thumbnail */}
                <div className="relative shrink-0 flex items-center gap-3 bg-slate-900/90 p-1.5 pr-3.5 rounded-2xl border border-slate-800">
                  <HanishProfileAvatar size="sm" showBadges={false} />
                  <div className="text-left">
                    <span className="block text-xs font-bold text-white">Hanish Musini</span>
                    <span className="block text-[10px] text-emerald-400 font-mono">Active Profile</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalData.summary}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 text-sm text-slate-300 space-y-2">
                <p className="font-semibold text-indigo-300 flex items-center gap-2">
                  <Target className="w-4 h-4 text-indigo-400" />
                  <span>My Core Focus Areas:</span>
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-400 space-y-1.5">
                  <li><strong className="text-slate-200">Artificial Intelligence & ML:</strong> Model development, dataset preprocessing, and deployment pipelines.</li>
                  <li><strong className="text-slate-200">Data Analytics:</strong> Converting complex transactional data into actionable business intelligence.</li>
                  <li><strong className="text-slate-200">Full-Stack Platforms:</strong> Scalable e-commerce marketplaces with robust DBMS schema design.</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
              <div>
                <span className="block text-2xl font-extrabold text-indigo-400">IIIT Surat</span>
                <span className="text-xs text-slate-400">B.Tech CSE '29</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-purple-400">2 Internships</span>
                <span className="text-xs text-slate-400">AI & Data Analytics</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl font-extrabold text-pink-400">UniSell</span>
                <span className="text-xs text-slate-400">SME Marketplace</span>
              </div>
            </div>

          </motion.div>

          {/* Highlights Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* Card 1: IIIT Surat Education */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-indigo-500/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">Computer Science @ IIIT Surat</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Pursuing B.Tech CSE (Expected 2029). Strong academic foundation in Data Structures, Algorithms, DBMS, and Systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: AI & Data Analytics */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-purple-500/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">AI Engineering & Data Analytics</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Internship experience at DecodeLabs (AI) and iStudio (Data Analytics). Hands-on with machine learning pipelines and visual reports.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Entrepreneurship & UniSell */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-pink-500/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">Founder @ UniSell</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Built and deployed a full-stack e-commerce marketplace tailored for SMEs on Render. Active member of Aspiring Ruminate (E-Cell).
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
