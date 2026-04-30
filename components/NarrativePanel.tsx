
import React from 'react';
import { motion, AnimatePresence, MotionValue, useTransform } from 'framer-motion';
import { SceneConfig } from '../types';

interface NarrativeContentProps {
  currentScene: SceneConfig;
  isAtrio: boolean;
  className?: string;
}

export const NarrativeContent: React.FC<NarrativeContentProps> = ({ currentScene, isAtrio, className = "" }) => {
  return (
    <div className={`w-full max-w-lg ${className}`}>
        <AnimatePresence mode="wait">
            <motion.div
                key={currentScene.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start"
            >
                <div className="mb-3 md:mb-5">
                  <span className="font-sans text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400 block opacity-70 mb-2">
                      DIGITAL EDITORIAL EXPERIENCE
                  </span>
                  <div className="h-[1px] w-8 bg-stone-300" />
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-9xl italic text-stone-900 mb-4 md:mb-6 leading-[0.85] tracking-tighter">
                    {currentScene.name}
                </h1>
                
                <div className="max-w-[260px] sm:max-w-xs md:max-w-md mb-6 md:mb-10 border-l border-stone-300 pl-4 md:pl-6">
                  <p className="font-sans text-[9px] md:text-[11px] lg:text-[13px] leading-relaxed tracking-[0.05em] font-normal text-stone-500 uppercase italic opacity-90">
                      {currentScene.description}
                  </p>
                </div>
                
                <div className="mt-1 space-y-2 md:space-y-3">
                    <div className="flex items-center gap-3">
                        <span className="font-sans text-[9px] md:text-[10px] lg:text-[12px] tracking-[0.25em] text-stone-900 font-bold uppercase whitespace-nowrap">
                            2026 — NOELIA QUINA
                        </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 text-[6px] md:text-[8px] tracking-[0.15em] text-stone-400 font-sans uppercase font-bold opacity-60">
                        <span>EDICIÓN 2026</span>
                        <div className="hidden sm:block w-1 h-1 bg-stone-300 rounded-full" />
                        <span className="whitespace-nowrap">ARQUITECTURA DE INTROSPECCIÓN</span>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>

        <div className="mt-8 md:mt-20 flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
                <span className="text-[7px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold text-stone-900 opacity-90">
                    {isAtrio ? 'CARTOGRAFÍA DEL LUGAR' : 'DIARIO DE OBRA'}
                </span>
            </div>
            
            {!isAtrio && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-1"
                >
                    <span className="font-serif text-[8px] md:text-[10px] italic text-stone-400 lowercase opacity-60 tracking-widest">
                        desliza para leer más
                    </span>
                </motion.div>
            )}
        </div>
    </div>
  );
};

interface NarrativePanelProps {
  currentScene: SceneConfig;
  isVisible: boolean;
  scrollYProgress: MotionValue<number>;
}

export const NarrativePanel: React.FC<NarrativePanelProps> = ({ currentScene, isVisible, scrollYProgress }) => {
  const isAtrio = currentScene.id === 'atrio';

  return (
    <motion.div
      className="w-full flex justify-start"
    >
      <NarrativeContent currentScene={currentScene} isAtrio={isAtrio} />
    </motion.div>
  );
};
