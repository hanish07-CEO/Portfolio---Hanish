import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Code, Cpu, Database, Wrench, BookOpen, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const iconsMap: Record<string, React.ElementType> = {
    "Programming Languages": Code,
    "Web & Database Technologies": Database,
    "AI, Data Analytics & Libraries": Cpu,
    "Tools & Development": Wrench,
    "Core Computer Science Concepts": BookOpen,
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            A comprehensive overview of programming languages, frameworks, data analytics tools, and core computer science competencies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {skillCategories.map((cat, idx) => {
            const Icon = iconsMap[cat.category] || Terminal;
            const isActive = activeCategoryIndex === idx;

            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/25'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-indigo-500/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Progress Bars */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800/90 shadow-2xl">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-indigo-400">#</span>
              <span>{skillCategories[activeCategoryIndex].category}</span>
            </h3>
            <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              {skillCategories[activeCategoryIndex].skills.length} Core Skills
            </span>
          </div>

          <div className="space-y-6">
            {skillCategories[activeCategoryIndex].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-200 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400" />
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-indigo-400">{skill.level}% Proficiency</span>
                </div>

                <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
