
import React from 'react';
import { motion } from 'framer-motion';

interface IntroProps {
  onStart: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <motion.div
        className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#E6E2DD] text-stone-900"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
    >
      <div className="max-w-4xl px-6 md:px-8 text-center flex flex-col items-center">
         {/* Decorative Element top */}
         <motion.div
            initial={{ height: 0 }}
            animate={{ height: 40, md: 60 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[1px] bg-stone-300 mb-6 md:mb-8"
         />

         {/* Animated Title */}
         <div className="overflow-visible mb-2 px-4 md:px-10">
            <div className="overflow-hidden">
                 <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-4xl md:text-8xl italic tracking-tighter text-stone-900 pr-2 md:pr-4 pb-2"
                    style={{ willChange: "transform" }}
                 >
                Casa Ilustrada
                </motion.h1>
            </div>
         </div>

         {/* Animated Subtitle */}
         <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-2 md:gap-4 mb-8 md:mb-12"
         >
            <span className="h-[1px] w-4 md:w-8 bg-stone-400"></span>
            <p className="font-sans text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-stone-500">
                El Arte de Habitar
            </p>
            <span className="h-[1px] w-4 md:w-8 bg-stone-400"></span>
         </motion.div>

         {/* Description */}
         <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1 }}
             className="font-serif text-lg md:text-2xl text-stone-600 leading-relaxed mb-12 md:mb-16 max-w-lg"
         >
            "La arquitectura es el juego sabio, correcto y magnífico de los volúmenes bajo la luz."
         </motion.p>

         {/* Button */}
         <motion.button
            onClick={onStart}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 md:px-10 py-3 md:py-4 overflow-hidden rounded-sm border border-stone-800 text-stone-900 transition-colors"
         >
            <span className="relative z-10 font-sans text-[10px] md:text-xs uppercase tracking-widest font-semibold group-hover:text-[#E6E2DD] transition-colors duration-500">
                Iniciar Recorrido
            </span>
            <div className="absolute inset-0 bg-stone-900 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom ease-[0.22,1,0.36,1]"></div>
         </motion.button>
         
         {/* Footer vol info */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-6 md:bottom-8 flex flex-col items-center gap-1"
         >
            <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-widest text-stone-500">
                Volumen 01 — El Atrio
            </p>
            <p className="font-sans text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-stone-400 font-bold">
                EDICIÓN 2026 — NOELIA QUINA
            </p>
         </motion.div>
      </div>
    </motion.div>
  );
};
