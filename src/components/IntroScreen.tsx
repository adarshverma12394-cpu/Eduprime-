import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for fade out animation
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary overflow-hidden"
        >
          {/* Background with blur effect */}
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center scale-110"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop")',
              filter: 'blur(8px)'
            }}
          />
          
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-8"
              >
                <span className="text-white/40 text-xs md:text-sm font-black uppercase tracking-[0.6em]">
                  Welcome to
                </span>
              </motion.div>
              
              <div className="relative mb-8">
                <motion.h1 
                  initial={{ letterSpacing: "0.5em", opacity: 0, scale: 0.8 }}
                  animate={{ letterSpacing: "0.1em", opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.5
                  }}
                  className="text-7xl md:text-[12rem] font-display font-black text-white leading-none uppercase italic relative z-10"
                >
                  EDUPRIME
                </motion.h1>
                
                {/* Light Sweep Effect */}
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "200%" }}
                  transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                <h2 className="text-accent text-2xl md:text-5xl font-display font-black uppercase italic tracking-tighter mb-4 text-glow">
                  Coaching & Higher School
                </h2>
                <div className="w-24 h-1 bg-accent/30 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full bg-accent"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
