import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import oba from '../assets/images/oba-white.png';


const IntroLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Progress counter over ~2.6s, then trigger exit
  // Simulated "heavy loading" progress — with stutters and pauses
  useEffect(() => {
    // Each entry: [targetPercent, durationMs]
    // The bar races, then stutters, then races again — like real loading
    const stages = [
      [12, 150],   // Quick initial jump
      [18, 400],   // Slow crawl
      [26, 200],   // Small burst
      [28, 500],   // STUCK — feels heavy
      [29, 300],   // Barely moving
      [42, 250],   // Sudden burst
      [54, 180],   // Quick jump
      [56, 600],   // LONG STUCK — most tense moment
      [57, 400],   // Barely creeping
      [58, 300],   // Still stuck
      [74, 200],   // Big burst
      [82, 150],   // Rapid
      [84, 350],   // Small pause
      [96, 200],   // Nearly there
      [100, 180],  // Finish
    ];

    let currentStage = 0;
    let startTime = Date.now();
    let startProgress = 0;
    let rafId;
    let isCancelled = false;

    const animate = () => {
      if (isCancelled) return;

      const [target, duration] = stages[currentStage];
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Ease-out for smoother feel per stage
      const eased = 1 - Math.pow(1 - t, 2);
      const value = startProgress + (target - startProgress) * eased;

      setProgress(value);

      if (t >= 1) {
        // Move to next stage
        startProgress = target;
        startTime = Date.now();
        currentStage++;

        if (currentStage >= stages.length) {
          // All stages complete — trigger exit after a beat
          setTimeout(() => setIsExiting(true), 250);
          return;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(rafId);
    };
  }, []);

  // After exit animation completes, call onComplete
  useEffect(() => {
    if (isExiting) {
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 700); // match the exit animation duration
      return () => clearTimeout(exitTimer);
    }
  }, [isExiting, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#660033] flex flex-col items-center justify-center overflow-hidden"
        >
          
          {/* Subtle Background Geometry */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute -top-40 -right-40 w-[600px] h-[600px] border-[60px] border-white rounded-full"
            ></motion.div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
              className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border-[50px] border-[#D4AF37] rounded-full"
            ></motion.div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center px-6 max-w-xl w-full">
            
            {/* Logo */}
            <motion.img
              src={oba}
              alt="Jeilani OBA"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="h-42 md:h-42 lg:h-42 w-auto object-contain mb-10"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs text-center mb-12"
            >
              One School · One Community · One Legacy
            </motion.p>

            {/* Progress Bar */}
            <div className="w-full max-w-xs">
              <div className="relative h-[2px] bg-white/15 overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#D4AF37]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.05, ease: 'linear' }}
                />
              </div>

              {/* Percentage */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-medium">
                  Loading
                </span>
                <span className="text-[#D4AF37] text-xs font-bold tracking-widest tabular-nums">
                  {Math.round(progress).toString().padStart(3, '0')}%
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-0 right-0 text-center"
          >
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase">
              R/Jeilani Central College · Balangoda
            </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;