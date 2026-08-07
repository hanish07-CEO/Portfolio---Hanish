import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Store, Rocket, CheckCircle2, Trophy } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck: ShieldCheck,
    Store: Store,
    Rocket: Rocket,
    Award: Award,
  };

  return (
    <section id="leadership" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-indigo-400" />
            <span>Honors & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Leadership & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Recognized national hackathon finalist, startup founder, and active campus entrepreneurship leader.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item, index) => {
            const Icon = iconMap[item.iconName] || Award;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-slate-800/90 flex items-start gap-5"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 text-indigo-300 border border-indigo-500/30 shrink-0">
                  <Icon className="w-8 h-8" />
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                      {item.tag}
                    </span>
                    {item.period && (
                      <span className="text-xs font-mono text-slate-500">{item.period}</span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-purple-400">{item.organization}</p>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
