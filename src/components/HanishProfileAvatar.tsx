import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Camera, Check, RefreshCw, Link as LinkIcon, 
  ShieldCheck, UserCheck, Upload, Image as ImageIcon, 
  Palette, Sliders, X, Zap, CircleDot 
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { 
  HANISH_AVATAR_SVG, 
  HANISH_AVATAR_CYBER_SVG, 
  HANISH_AVATAR_EXECUTIVE_SVG 
} from '../data/svgAssets';

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

  const [ringTheme, setRingTheme] = useState<string>(() => {
    return localStorage.getItem('hanish_avatar_theme') || 'cosmic';
  });

  const [statusBadge, setStatusBadge] = useState<string>(() => {
    return localStorage.getItem('hanish_avatar_status') || 'Active Profile';
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'upload' | 'preset' | 'url' | 'customize'>('upload');
  const [inputUrl, setInputUrl] = useState('');
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      const savedPhoto = localStorage.getItem('hanish_custom_photo');
      const savedTheme = localStorage.getItem('hanish_avatar_theme');
      const savedStatus = localStorage.getItem('hanish_avatar_status');
      if (savedPhoto) setCurrentPhoto(savedPhoto);
      if (savedTheme) setRingTheme(savedTheme);
      if (savedStatus) setStatusBadge(savedStatus);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size too large. Please select an image under 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          localStorage.setItem('hanish_custom_photo', result);
          setCurrentPhoto(result);
          setCopiedSuccess(true);
          setTimeout(() => {
            setCopiedSuccess(false);
            setIsModalOpen(false);
          }, 800);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      localStorage.setItem('hanish_custom_photo', inputUrl.trim());
      setCurrentPhoto(inputUrl.trim());
      setCopiedSuccess(true);
      setTimeout(() => {
        setCopiedSuccess(false);
        setIsModalOpen(false);
      }, 800);
    }
  };

  const handleSelectPreset = (svgData: string) => {
    localStorage.setItem('hanish_custom_photo', svgData);
    setCurrentPhoto(svgData);
    setCopiedSuccess(true);
    setTimeout(() => {
      setCopiedSuccess(false);
      setIsModalOpen(false);
    }, 600);
  };

  const handleSetTheme = (themeKey: string) => {
    setRingTheme(themeKey);
    localStorage.setItem('hanish_avatar_theme', themeKey);
  };

  const handleSetStatus = (statusText: string) => {
    setStatusBadge(statusText);
    localStorage.setItem('hanish_avatar_status', statusText);
  };

  const handleResetDefault = () => {
    localStorage.removeItem('hanish_custom_photo');
    localStorage.removeItem('hanish_avatar_theme');
    localStorage.removeItem('hanish_avatar_status');
    setCurrentPhoto(HANISH_AVATAR_SVG);
    setRingTheme('cosmic');
    setStatusBadge('Active Profile');
    setInputUrl('');
    setIsModalOpen(false);
  };

  // Ring Theme Gradient Mapping
  const ringGradients: Record<string, { bg: string; border: string; glow: string }> = {
    cosmic: {
      bg: 'from-indigo-500 via-purple-500 via-pink-500 to-emerald-400',
      border: 'from-indigo-500 via-purple-500 to-pink-500',
      glow: 'shadow-indigo-500/30'
    },
    cyber: {
      bg: 'from-emerald-400 via-teal-500 to-cyan-400',
      border: 'from-emerald-400 via-teal-500 to-cyan-400',
      glow: 'shadow-emerald-500/30'
    },
    gold: {
      bg: 'from-amber-400 via-yellow-500 to-amber-600',
      border: 'from-amber-400 via-yellow-500 to-amber-600',
      glow: 'shadow-amber-500/30'
    },
    violet: {
      bg: 'from-violet-500 via-fuchsia-500 to-rose-500',
      border: 'from-violet-500 via-fuchsia-500 to-rose-500',
      glow: 'shadow-violet-500/30'
    }
  };

  const activeGradients = ringGradients[ringTheme] || ringGradients.cosmic;

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
          scale: [1, 1.04, 1]
        }}
        transition={{
          rotate: { duration: 16, repeat: Infinity, ease: 'linear' },
          scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
        className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${activeGradients.bg} opacity-65 blur-md pointer-events-none`}
      />

      {/* Main Avatar Container */}
      <div className={`relative group ${sizeClasses[size]} bg-slate-950 p-[2.5px] bg-gradient-to-tr ${activeGradients.border} shadow-2xl ${activeGradients.glow}`}>
        <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden relative flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            src={currentPhoto}
            alt={personalData.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={() => {
              setCurrentPhoto(HANISH_AVATAR_SVG);
            }}
          />

          {/* Glossy Overlay Sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-900/10 pointer-events-none" />

          {/* Quick Customize Camera Button Overlay */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute bottom-1.5 right-1.5 p-1.5 rounded-lg bg-slate-950/90 text-indigo-300 hover:text-white border border-indigo-500/40 opacity-90 group-hover:opacity-100 transition-all shadow-md flex items-center gap-1 text-[10px] font-mono cursor-pointer"
            title="Edit Photo or Avatar Style"
          >
            <Camera className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden sm:inline">Edit Avatar</span>
          </button>
        </div>

        {/* Live Status Pulse Indicator */}
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-lg" title={statusBadge}>
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

      {/* Photo Update & Avatar Studio Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-5"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-white">Avatar & Photo Studio</h4>
                    <p className="text-xs text-slate-400">Upload your personal photo or select preset developer avatars</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Active Avatar Preview Box */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950 border border-slate-800/90 shadow-inner">
                <div className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden border-2 border-indigo-500/50 p-0.5 bg-slate-900">
                  <img
                    src={currentPhoto}
                    alt="Current Avatar"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">{personalData.name}</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                      {statusBadge}
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    {currentPhoto.startsWith('data:image/svg')
                      ? 'Tech Vector Preset Active'
                      : currentPhoto.startsWith('data:image')
                      ? 'Custom Uploaded Photo Active'
                      : 'Custom Web Image Active'}
                  </p>
                </div>
              </div>

              {/* Mode Selection Navigation Tabs */}
              <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveTab('upload')}
                  className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'upload' ? 'bg-indigo-600 text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('preset')}
                  className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'preset' ? 'bg-indigo-600 text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Presets</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('url')}
                  className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'url' ? 'bg-indigo-600 text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LinkIcon className="w-3.5 h-3.5" />
                  <span>Image URL</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('customize')}
                  className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    activeTab === 'customize' ? 'bg-indigo-600 text-white font-semibold shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Style</span>
                </button>
              </div>

              {/* Tab Contents */}
              <div className="space-y-4">
                {/* Tab 1: Upload File */}
                {activeTab === 'upload' && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-300">
                      Upload your high-resolution profile photo from your device:
                    </p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-700 hover:border-indigo-500 bg-slate-950 hover:bg-slate-900/60 transition-all rounded-2xl p-6 text-center cursor-pointer space-y-2 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform mx-auto flex items-center justify-center border border-indigo-500/20">
                        <Upload className="w-6 h-6" />
                      </div>
                      <p className="text-xs font-semibold text-white">Click to upload photo file</p>
                      <p className="text-[11px] text-slate-400">PNG, JPG, WEBP up to 5MB</p>
                    </div>
                  </div>
                )}

                {/* Tab 2: Vector Presets */}
                {activeTab === 'preset' && (
                  <div className="space-y-3">
                    <p className="text-xs text-slate-300">Choose a high-definition vector style:</p>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => handleSelectPreset(HANISH_AVATAR_SVG)}
                        className="p-2 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500 transition-all text-center space-y-1.5 group"
                      >
                        <img src={HANISH_AVATAR_SVG} alt="Studio Preset" className="w-16 h-16 mx-auto rounded-xl object-cover" />
                        <span className="block text-[11px] font-semibold text-white">Tech Studio</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleSelectPreset(HANISH_AVATAR_CYBER_SVG)}
                        className="p-2 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500 transition-all text-center space-y-1.5 group"
                      >
                        <img src={HANISH_AVATAR_CYBER_SVG} alt="Cyber Preset" className="w-16 h-16 mx-auto rounded-xl object-cover" />
                        <span className="block text-[11px] font-semibold text-white">Cyber Matrix</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleSelectPreset(HANISH_AVATAR_EXECUTIVE_SVG)}
                        className="p-2 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500 transition-all text-center space-y-1.5 group"
                      >
                        <img src={HANISH_AVATAR_EXECUTIVE_SVG} alt="Executive Preset" className="w-16 h-16 mx-auto rounded-xl object-cover" />
                        <span className="block text-[11px] font-semibold text-white">Executive Founder</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 3: Image URL */}
                {activeTab === 'url' && (
                  <form onSubmit={handleSaveUrl} className="space-y-3">
                    <p className="text-xs text-slate-300">Paste your image URL (LinkedIn, GitHub, Drive, Imgur):</p>
                    <div className="relative">
                      <input
                        type="url"
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        placeholder="https://i.imgur.com/... or https://github.com/..."
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl text-xs text-white placeholder-slate-500 outline-none transition-colors"
                      />
                      <LinkIcon className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/30"
                    >
                      {copiedSuccess ? <Check className="w-4 h-4 text-emerald-300" /> : <Sparkles className="w-4 h-4" />}
                      <span>Apply Image URL</span>
                    </button>
                  </form>
                )}

                {/* Tab 4: Ring Theme & Status Customizer */}
                {activeTab === 'customize' && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="block font-semibold text-slate-300 mb-2">Glow Ring Aura Theme:</span>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { id: 'cosmic', name: 'Cosmic Spectrum', color: 'bg-gradient-to-r from-indigo-500 to-pink-500' },
                          { id: 'cyber', name: 'Cyber Emerald', color: 'bg-gradient-to-r from-emerald-400 to-teal-500' },
                          { id: 'gold', name: 'Royal Gold', color: 'bg-gradient-to-r from-amber-400 to-amber-600' },
                          { id: 'violet', name: 'Electric Violet', color: 'bg-gradient-to-r from-violet-500 to-fuchsia-500' },
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleSetTheme(item.id)}
                            className={`p-2 rounded-xl border flex items-center gap-2 transition-all ${
                              ringTheme === item.id ? 'border-indigo-500 bg-slate-950 text-white' : 'border-slate-800 bg-slate-950/60 text-slate-400'
                            }`}
                          >
                            <span className={`w-3.5 h-3.5 rounded-full ${item.color}`} />
                            <span className="text-[11px] font-medium">{item.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="block font-semibold text-slate-300 mb-2">Status Indicator Text:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'Active Profile',
                          'IIIT Surat \'29',
                          'UniSell Founder',
                          'Open for Internships',
                          'Coding AI Models'
                        ].map((txt) => (
                          <button
                            key={txt}
                            type="button"
                            onClick={() => handleSetStatus(txt)}
                            className={`px-2.5 py-1 rounded-lg border text-[11px] transition-all ${
                              statusBadge === txt ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300' : 'border-slate-800 bg-slate-950 text-slate-400'
                            }`}
                          >
                            {txt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={handleResetDefault}
                  className="px-3 py-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white text-xs font-medium flex items-center gap-1.5 border border-slate-800 hover:border-slate-700"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Reset Default</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
