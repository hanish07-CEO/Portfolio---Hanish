import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, ExternalLink, Github, Sparkles, Filter, X, Check, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Full Stack', 'AI & ML', 'Data Analytics'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafted Projects & <span className="text-gradient">Innovations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Real-world applications built for SMEs, machine learning models, and data analytics dashboards.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/25 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-indigo-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-slate-800/90 flex flex-col justify-between group"
              >
                {/* Image Cover Header */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/90 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                    {project.category}
                  </span>

                  {project.id === 'unisell' && (
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live on Render
                    </span>
                  )}

                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40 backdrop-blur-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-purple-400 mt-1">{project.subtitle}</p>
                    <p className="text-xs sm:text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex items-center justify-between gap-2 border-t border-slate-800/80">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Details</span>
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 transition-colors"
                        title="Open Live Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-2xl glass-panel rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header Banner Image */}
              <div className="relative -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 h-56 sm:h-64 overflow-hidden bg-slate-900 mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-6 sm:left-8 right-6 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/90 text-indigo-300 border border-indigo-500/30 backdrop-blur-md uppercase">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono text-purple-300 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-purple-500/30">
                    {selectedProject.role}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-sm text-purple-400 mt-1">{selectedProject.subtitle}</p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.description}</p>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Accomplishments</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-200 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/25"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 text-slate-200 hover:text-white border border-slate-800 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
