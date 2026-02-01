'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LogoAnimationProps {
  onAnimationComplete?: () => void;
}

const LogoAnimation: React.FC<LogoAnimationProps> = ({ onAnimationComplete }) => {
  const [show, setShow] = useState(true);

  const pinkPrimary = '#f4538a';
  const pinkShade = '#c13d60';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => onAnimationComplete?.(), 800);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="flex items-center justify-center relative w-full max-w-6xl px-4">
            {/* HEART */}
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: [1, 1, 5],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 2,
                times: [0, 0.4, 1],
                ease: "easeIn",
                delay: 1
              }}
              className="z-10 flex-shrink-0"
            >
              <svg
                viewBox="0 0 500 520"
                className="w-64 md:w-[420px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* MAIN HEART OUTLINE */}
                <motion.path
                  d="M 215 430 L 40 250 L 165 130 L 265 223 M 230 223 L 335 130 L 460 250 L 285 430"
                  stroke={pinkPrimary}
                  strokeWidth="50"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  filter="url(#glow)"
                />

                {/* LEFT INNER FOLD LINE */}
                <motion.path
                  d="M 182 146 L 265 223"
                  stroke={pinkShade}
                  strokeWidth="50"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}
                  filter="url(#glow)"
                />

                {/* RIGHT INNER FOLD LINE */}
                <motion.path
                  d="M 318 145 L 230 223"
                  stroke={pinkShade}
                  strokeWidth="50"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}
                  filter="url(#glow)"
                />

                {/* BOTTOM DIAMOND */}
                <motion.path
                  d="M 250 420 L 290 460 L 250 500 L 210 460 Z"
                  fill={pinkPrimary}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3, type: 'spring', stiffness: 180 }}
                  filter="url(#glow)"
                />

                {/* GLOW FILTER */}
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoAnimation;
