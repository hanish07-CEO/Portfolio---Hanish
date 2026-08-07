import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AiAssistantModal } from './components/AiAssistantModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenAiAssistant={() => setAiAssistantOpen(true)}
        />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <AiAssistantModal
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
      />
    </div>
  );
}
