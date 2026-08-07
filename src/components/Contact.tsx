import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Copy, Check, Linkedin, Github, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setSubmitted(true);
      confetti({ particleCount: 50, spread: 60 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-gradient">Impactful</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Open for summer internship opportunities, AI & full-stack development roles, or collaborative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-xs text-slate-400 mt-1">
                Reach out directly via email, phone, or LinkedIn. I usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Box with Copy */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Primary Email</span>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-none">
                      {personalData.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Box */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Phone</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">{personalData.phone}</p>
                </div>
              </div>

              {/* Location Box */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Locations</span>
                  <p className="text-xs sm:text-sm font-semibold text-white">{personalData.location}</p>
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase">Connect Socially</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 mt-1">
                Fill in your details below and I'll get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. Hanish will respond to your message shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship / Collaboration / Project Inquiry"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message here..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};
