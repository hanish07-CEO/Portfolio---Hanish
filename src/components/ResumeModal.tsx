import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Check, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import { personalData, experienceData, educationData, projectsData, skillCategories, achievementsData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto print:border-0 print:shadow-none print:rounded-none print:bg-white text-slate-100 print:text-black"
        >
          {/* Modal Header Bar (Hidden in Print) */}
          <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs font-mono text-slate-400 ml-2">Hanish_Musini_Resume.pdf</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body Content */}
          <div className="p-6 sm:p-10 space-y-8 bg-slate-900 print:bg-white print:p-8 print:text-black">
            
            {/* Header / Contact Info */}
            <div className="border-b border-slate-800 print:border-black/20 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">{personalData.name}</h1>
                <p className="text-indigo-400 print:text-indigo-800 font-semibold text-sm mt-1">{personalData.title}</p>
              </div>

              <div className="text-xs text-slate-300 print:text-black space-y-1 font-mono text-center sm:text-right">
                <p className="flex items-center gap-1.5 justify-center sm:justify-end">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalData.email}</span>
                </p>
                <p className="flex items-center gap-1.5 justify-center sm:justify-end">
                  <Phone className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalData.phone}</span>
                </p>
                <p className="flex items-center gap-1.5 justify-center sm:justify-end">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalData.location}</span>
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold font-mono text-indigo-400 print:text-indigo-900 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800 print:border-black/20 pb-1">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 print:text-black leading-relaxed">
                {personalData.bio}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold font-mono text-indigo-400 print:text-indigo-900 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800 print:border-black/20 pb-1">
                EDUCATION
              </h2>
              <div className="space-y-3">
                {educationData.map((edu) => (
                  <div key={edu.id} className="flex justify-between items-start text-xs sm:text-sm">
                    <div>
                      <h3 className="font-bold text-white print:text-black">{edu.institution}</h3>
                      <p className="text-slate-300 print:text-slate-800 font-medium">{edu.degree}</p>
                    </div>
                    <span className="font-mono text-indigo-300 print:text-indigo-900 text-xs shrink-0">{edu.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold font-mono text-indigo-400 print:text-indigo-900 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800 print:border-black/20 pb-1">
                EXPERIENCE
              </h2>
              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex justify-between items-start text-xs sm:text-sm">
                      <div>
                        <h3 className="font-bold text-white print:text-black">{exp.role} <span className="text-indigo-400 print:text-indigo-800">| {exp.company}</span></h3>
                        <p className="text-xs text-slate-400 print:text-slate-700">{exp.location}</p>
                      </div>
                      <span className="font-mono text-indigo-300 print:text-indigo-900 text-xs shrink-0">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 print:text-black space-y-1 pl-1">
                      {exp.description.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold font-mono text-indigo-400 print:text-indigo-900 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800 print:border-black/20 pb-1">
                PROJECTS
              </h2>
              <div className="space-y-3">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <h3 className="font-bold text-white print:text-black">{proj.title}</h3>
                      <span className="text-xs font-mono text-purple-400 print:text-purple-800">{proj.role}</span>
                    </div>
                    <p className="text-xs text-slate-300 print:text-black">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold font-mono text-indigo-400 print:text-indigo-900 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800 print:border-black/20 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="text-xs text-slate-300 print:text-black space-y-1">
                <p><strong>Languages:</strong> C++, Python, Java, SQL, JavaScript</p>
                <p><strong>Web & DBMS:</strong> React.js, Express, HTML5, CSS3, Tailwind CSS, MySQL, DBMS Architecture</p>
                <p><strong>AI & Analytics:</strong> Data Preprocessing, Machine Learning, Pandas, Matplotlib, Data Visualization</p>
                <p><strong>Tools & Concepts:</strong> Git, GitHub, VS Code, Android Studio, Render, Data Structures & Algorithms, OOP</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold font-mono text-indigo-400 print:text-indigo-900 uppercase tracking-widest flex items-center gap-2 border-b border-slate-800 print:border-black/20 pb-1">
                LEADERSHIP & ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-black space-y-1">
                {achievementsData.map((ach) => (
                  <li key={ach.id}>
                    <strong>{ach.title}:</strong> {ach.description}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
