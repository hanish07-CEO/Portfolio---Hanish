import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  // Springs for smooth fluid movement
  const cursorX = useSpring(0, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 350 });
  const dotX = useSpring(0, { damping: 45, stiffness: 800 });
  const dotY = useSpring(0, { damping: 45, stiffness: 800 });

  useEffect(() => {
    // Only enable on desktop / pointer-fine devices
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor]');
        if (interactiveEl) {
          setIsHovered(true);
          const customText = interactiveEl.getAttribute('data-cursor');
          setHoverText(customText || null);
        } else {
          setIsHovered(false);
          setHoverText(null);
        }
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Outer Fluid Trail Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.35 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        className={`w-8 h-8 rounded-full border transition-colors duration-200 flex items-center justify-center pointer-events-none ${
          isHovered
            ? 'border-indigo-400/80 bg-indigo-500/10 shadow-[0_0_12px_rgba(129,140,248,0.3)]'
            : 'border-indigo-500/30 bg-indigo-500/5 shadow-[0_0_8px_rgba(99,102,241,0.15)]'
        }`}
      >
        {hoverText && (
          <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-indigo-300 animate-pulse">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Inner Precision Glow Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 1.6 : isHovered ? 0.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 shadow-[0_0_10px_#818cf8]"
      />
    </div>
  );
};
