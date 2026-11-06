import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assests/logo.png';
import './SplashScreen.css';

export default function SplashScreen({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if user has already seen splash screen in this session to avoid annoyance on every page reload/navigation,
    // but default can be shown on first load.
    const hasSeenSplash = sessionStorage.getItem('dhakshinya_splash_seen');
    if (hasSeenSplash) {
      setShow(false);
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('dhakshinya_splash_seen', 'true');
      if (onComplete) onComplete();
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setShow(false);
    sessionStorage.setItem('dhakshinya_splash_seen', 'true');
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="splash-overlay"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05, 
            filter: 'blur(10px)',
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } 
          }}
        >
          {/* Subtle Ambient Background Aura */}
          <div className="splash-aura-glow" />
          <div className="splash-particle-ring" />

          <button className="splash-skip-btn" onClick={handleSkip} aria-label="Skip intro">
            Skip ✕
          </button>

          <div className="splash-center-content">
            {/* Glowing Logo Halo Container */}
            <motion.div
              className="splash-logo-container"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ 
                scale: [0.85, 1.02, 1], 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
              }}
            >
              <div className="splash-logo-halo" />
              <img
                src={logoImg}
                alt="Dhakshinya Tours & Travels"
                className="splash-logo-image"
              />
            </motion.div>

            {/* Shimmering Gold Accent Line */}
            <motion.div
              className="splash-divider-bar"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1, 
                opacity: 1,
                transition: { delay: 0.4, duration: 0.8, ease: 'easeOut' }
              }}
            />

            {/* Tagline / Welcome Text */}
            <motion.div
              className="splash-text-block"
              initial={{ opacity: 0, y: 15 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.6, duration: 0.7, ease: 'easeOut' }
              }}
            >
              <span className="splash-tagline-eyebrow">
                ✦ SACRED JOURNEYS & PREMIUM FLEET ✦
              </span>
              <p className="splash-welcome-title">
                Tirupati&apos;s Most Trusted Travel Companion
              </p>
            </motion.div>

            {/* Elegant Loading Progress Bar */}
            <div className="splash-progress-track">
              <motion.div
                className="splash-progress-indicator"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.1, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

