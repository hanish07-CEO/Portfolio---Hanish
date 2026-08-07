import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Camera, Check, RefreshCw, Link as LinkIcon, ShieldCheck, UserCheck } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { HANISH_AVATAR_SVG } from '../data/svgAssets';

interface HanishProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBadges?: boolean;
  className?: string;
}

export const HanishProfileAvatar: React.FC<HanishProfileAvatarProps> = ({
  size = 'lg',
  showBadges = true,
  className = ''
}) => {
  const [currentPhoto, setCurrentPhoto] = useState<string>(() => {
    return localStorage.getItem('hanish_custom_photo') || personalData.avatarUrl || HANISH_AVATAR_SVG;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('hanish_custom_photo');
      if (saved) setCurrentPhoto(saved);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      localStorage.setItem('hanish_custom_photo', inputUrl.trim());
      setCurrentPhoto(inputUrl.trim());
      setCopiedSuccess(true);
      setTimeout(() => {
        setCopiedSuccess(false);
        setIsModalOpen(false);
      }, 1000);
    }
  };

  const handleResetDefault = () => {
    localStorage.removeItem('hanish_custom_photo');
    setCurrentPhoto(HANISH_AVATAR_SVG);
    setInputUrl('');
    setIsModalOpen(false);
  };

  // Dimension mapping
  const sizeClasses = {
    sm: 'w-12 h-12 rounded-xl',
    md: 'w-20 h-20 sm:w-24 sm:h-24 rounded-2xl',
    lg: 'w-28 h-28 sm:w-36 sm:h-36 rounded-2xl',
    xl: 'w-36 h-36 sm:w-44 sm:h-44 rounded-3xl'
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Animated Outer Glowing Aura Ring */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.03, 1]
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-emerald-400 opacity-60 blur-md pointer-events-none"
      />

      {/* Main Avatar Container */}
      <div className={`relative group ${sizeClasses[size]} bg-slate-950 p-[2.5px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-indigo-500/20`}>
        <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden relative flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            src={currentPhoto}
            alt={personalData.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={() => {
              // Fallback to SVG if custom URL breaks
              setCurrentPhoto(HANISH_AVATAR_SVG);
            }}
          />

          {/* Glossy Overlay Sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-900/10 pointer-events-none" />

          {/* Quick Edit Photo Button Overlay */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-1.5 right-1.5 p-1.5 rounded-lg bg-slate-950/90 text-indigo-300 hover:text-white border border-indigo-500/40 opacity-90 group-hover:opacity-100 transition-all shadow-md flex items-center gap-1 text-[10px] font-mono"
            title="Update or Paste My Photo URL"
          >
            <Camera className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Photo</span>
          </button>
        </div>

        {/* Online Pulse Indicator */}
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 relative" />
        </div>
      </div>

      {/* Floating Badges for lg/xl sizes */}
      {showBadges && (size === 'lg' || size === 'xl') && (
        <>
          {/* Badge Left */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -left-12 top-2 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/95 border border-indigo-500/40 text-[10px] font-mono text-indigo-300 shadow-xl backdrop-blur-md"
          >
            <ShieldCheck className="w-3 h-3 text-indigo-400" />
            <span>IIIT Surat '29</span>
          </motion.div>

          {/* Badge Right */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -right-12 bottom-8 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900/95 border border-emerald-500/40 text-[10px] font-mono text-emerald-300 shadow-xl backdrop-blur-md"
          >
            <UserCheck className="w-3 h-3 text-emerald-400" />
            <span>UniSell Founder</span>
          </motion.div>
        </>
      )}

      {/* Photo Update Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Update Profile Photo</h4>
                    <p className="text-xs text-slate-400">Paste your photo link (LinkedIn, Drive, GitHub, Imgur)</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white text-sm"
                >
                  ✕
                </button>
              </div>

              {/* Preview Thumbnail */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-950 border border-slate-800">
                <img
                  src={inputUrl || currentPhoto}
                  alt="Preview"
                  className="w-16 h-16 rounded-xl object-cover border border-indigo-500/30"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = HANISH_AVATAR_SVG;
                  }}
                />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-white">Current Active Photo</p>
                  <p className="text-slate-400 text-[11px]">
                    {currentPhoto.startsWith('data:') ? 'Custom Tech Portrait Vector Avatar' : 'Custom Image URL'}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSaveUrl} className="space-y-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Photo URL (Image Address):
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="https://i.imgur.com/... or https://github.com/..."
                      className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs text-white placeholder-slate-500 outline-none transition-colors"
                    />
                    <LinkIcon className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleResetDefault}
                    className="px-3 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 border border-slate-700"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Reset Tech Avatar</span>
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-indigo-600/30"
                  >
                    {copiedSuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Saved!</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Apply Photo</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
