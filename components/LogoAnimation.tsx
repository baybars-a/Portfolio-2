'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const LogoAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const heartScale = useTransform(smoothProgress, [0, 0.3], [1.5, 0.45]);
  const textOpacity = useTransform(smoothProgress, [0.5, 0.7], [0, 1]);
  const textX = useTransform(smoothProgress, [0.5, 0.75], [100, 0]);

  const pinkPrimary = '#f4538a';
  const pinkShade = '#c13d60';

  return (
    <div ref={containerRef} className="h-[300vh] relative bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="flex items-center justify-center relative w-full max-w-6xl px-4">

          {/* HEART */}
          <motion.div
            style={{ scale: heartScale }}
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
                transition={{ duration: 1.5, ease: 'easeInOut' }}
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
                transition={{ delay: 0.9, duration: 0.4, ease: 'easeOut' }}
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
                transition={{ delay: 0.9, duration: 0.4, ease: 'easeOut' }}
                filter="url(#glow)"
              />

              {/* BOTTOM DIAMOND */}
              <motion.path
                d="M 250 420 L 290 460 L 250 500 L 210 460 Z"
                fill={pinkPrimary}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4, type: 'spring', stiffness: 180 }}
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

          {/* TEXT */}
          <motion.div
            style={{
              opacity: textOpacity,
              x: textX,
              display: useTransform(smoothProgress, (p) =>
                p > 0.4 ? 'block' : 'none'
              ),
            }}
            className="ml-12 text-left"
          >
            {/* <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-[#f4538a] leading-[0.9] tracking-tighter uppercase italic">
              CODE LIKE A
              <br />
              <span className="text-white not-italic">GIRL</span>
            </h1>
            <p className="text-neutral-500 mt-6 text-lg md:text-2xl font-light tracking-[0.4em] uppercase">
              Developer & Engineering Lead
            </p> */}
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
            style={{ opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]) }}
          >
            <p className="text-neutral-500 text-[11px] uppercase tracking-[0.4em] mb-4">
              Keep Scrolling
            </p>
            <motion.div
              animate={{ height: [40, 80, 40], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-px bg-gradient-to-b from-[#f4538a] to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoAnimation;
