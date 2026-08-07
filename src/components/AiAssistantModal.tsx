import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, Bot, User, Loader2, Lightbulb } from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Hello! I am Hanish's AI Assistant. Ask me anything about Hanish Musini's experience, skills, projects (like UniSell), or achievements!"
    }
  ]);

  const sampleQuestions = [
    "Tell me about Hanish's AI internship at DecodeLabs",
    "What tech stack powers the UniSell platform?",
    "What is Hanish's background at IIIT Surat?",
    "Tell me about KANAD S.H.I.E.L.D. Hackathon"
  ];

  const handleSend = async (questionText?: string) => {
    const query = questionText || input;
    if (!query.trim()) return;

    const userMsg: Message = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    if (!questionText) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: query }),
      });
      const data = await res.json();
      const aiReply = data.reply || "Hanish is a 2nd-year B.Tech CSE student at IIIT Surat, founder of UniSell, and former AI & Data Analytics Intern.";
      setMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: "Hanish Musini is a B.Tech CSE student at IIIT Surat, Founder of UniSell, AI Engineer Intern @ DecodeLabs, and Data Analytics Intern @ iStudio. Feel free to contact him at hanish070328@gmail.com!"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-xl glass-panel rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col h-[580px]"
        >
          {/* Header */}
          <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-tight">Hanish's AI Assistant</h3>
                <p className="text-xs text-slate-400">Ask questions about skills, experience & projects</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-xs text-purple-400 font-mono">
                <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                <span>AI Assistant thinking...</span>
              </div>
            )}
          </div>

          {/* Suggested Prompts */}
          <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            {sampleQuestions.map((sq, i) => (
              <button
                key={i}
                onClick={() => handleSend(sq)}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900 text-slate-300 hover:text-white border border-slate-800 whitespace-nowrap hover:border-purple-500/40 transition-colors shrink-0"
              >
                {sq}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about Hanish Musini..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white disabled:opacity-50 transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
