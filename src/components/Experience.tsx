import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Internships & <span className="text-gradient">Leadership Roles</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Hands-on professional experience across data analytics, artificial intelligence, and startup platform architecture.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Center Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20 z-10 hidden sm:flex font-bold text-xs">
                    {item.logoText}
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] glass-panel rounded-2xl p-6 border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 shadow-xl ${
                    isEven ? 'sm:mr-auto' : 'sm:ml-auto'
                  }`}>
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-1.5">
                          {item.type}
                        </span>
                        <h3 className="text-xl font-bold text-white leading-tight">{item.role}</h3>
                        <p className="text-sm font-medium text-purple-400 mt-0.5">{item.company}</p>
                      </div>

                      <div className="flex flex-col text-right text-xs text-slate-400">
                        <span className="flex items-center gap-1 font-mono text-indigo-300">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          {item.period}
                        </span>
                        <span className="flex items-center justify-end gap-1 text-slate-500 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 my-4">
                      {item.description.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Pills */}
                    <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
