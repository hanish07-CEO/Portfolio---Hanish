import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, UserCheck } from 'lucide-react';
import { personalData } from '../data/portfolioData';

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
  const currentPhoto = personalData.avatarUrl;

  // Ring Theme Gradient Mapping
  const activeGradients = {
    bg: 'from-indigo-500 via-purple-500 via-pink-500 to-emerald-400',
    border: 'from-indigo-500 via-purple-500 to-pink-500',
    glow: 'shadow-indigo-500/30'
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
          />

          {/* Glossy Overlay Sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-900/10 pointer-events-none" />
        </div>

        {/* Live Status Pulse Indicator */}
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-lg" title="Active Profile">
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
    </div>
  );
};
