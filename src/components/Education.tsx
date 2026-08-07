import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Strong foundational computer science studies at IIIT Surat complemented by high academic achievement.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-indigo-300 flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                    <Calendar className="w-3 h-3 text-indigo-400" />
                    {item.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">{item.institution}</h3>
                  <p className="text-sm font-semibold text-purple-400 mt-1">{item.degree}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </p>
                </div>

                {item.highlights && (
                  <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>DEGREE STATUS</span>
                <span className="text-emerald-400 font-semibold">Active & Enrolled</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
