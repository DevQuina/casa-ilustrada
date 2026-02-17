
import React from 'react';
import { motion } from 'framer-motion';
import { SceneConfig } from '../types';

interface EditorialArticleProps {
  scene: SceneConfig;
  className?: string;
}

export const EditorialArticle: React.FC<EditorialArticleProps> = ({ scene, className = "" }) => {
  if (!scene.article) return null;

  const detailImage = scene.image;
  const focus = scene.detailFocus || { scale: 1.5, position: "center" };

  return (
    <div className={`w-full bg-[#E6E2DD] border-t border-stone-200/50 pt-20 md:pt-40 pb-32 md:pb-60 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 xl:gap-32 items-start">
        
        {/* Left Column: Macro Vision (The Detail with Zoom) */}
        <div className="lg:col-span-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative group overflow-hidden"
          >
            <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                <motion.img 
                  src={detailImage} 
                  alt={`Detalle de ${scene.name}`} 
                  className="w-full h-full object-cover grayscale brightness-90 md:hover:grayscale-0 md:hover:brightness-100 transition-all duration-1000"
                  style={{ 
                    transform: `scale(${focus.scale})`,
                    objectPosition: focus.position 
                  }}
                  whileInView={{ scale: focus.scale * 1.05 }}
                  transition={{ duration: 12, ease: "linear" }}
                />
            </div>
            
            {/* Minimalist Overlay Label */}
            <div className="absolute top-6 md:top-8 right-[-1.2rem] md:right-[-1.5rem] rotate-90 origin-left">
                <span className="text-[8px] md:text-[9px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold text-white/50 mix-blend-difference">
                    MACRO VISIÓN — 01 / {scene.id.toUpperCase()}
                </span>
            </div>

            <div className="mt-8 md:mt-10 max-w-sm">
                <h3 className="font-serif text-xl md:text-2xl italic text-stone-900 leading-[1.2]">
                    "La arquitectura de {scene.name.toLowerCase()} se revela en sus encuentros, donde la luz se hace sólida."
                </h3>
                <div className="w-10 md:w-12 h-[1px] bg-stone-400 mt-5 md:mt-6" />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Narrative Essay */}
        <div className="lg:col-span-6 pt-4 md:pt-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] md:tracking-[0.6em] text-stone-400 mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
                <span className="w-6 md:w-8 h-[1px] bg-stone-300" />
                Ensayo sobre el espacio
            </div>
            
            <div className="font-serif text-4xl md:text-6xl text-stone-900 mb-12 md:mb-20 leading-[1.05] tracking-tight italic">
              El silencio como <br className="hidden md:block"/>elemento constructivo.
            </div>
            
            <div className="space-y-12 md:space-y-16 max-w-lg">
              {scene.article.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="font-sans text-base md:text-xl leading-relaxed text-stone-700 font-light tracking-wide">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Technical Metadata Table */}
            <div className="mt-20 md:mt-32 pt-12 md:pt-16 border-t border-stone-300/60 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-3 md:space-y-4">
                    <span className="block font-sans text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-stone-400">Materialidad</span>
                    <p className="font-serif italic text-stone-800 text-sm">Maderas nobles, lino natural y piedra grabada.</p>
                </div>
                <div className="space-y-3 md:space-y-4">
                    <span className="block font-sans text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-stone-400">Atmósfera</span>
                    <p className="font-serif italic text-stone-800 text-sm">Introspección y calma tectónica.</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Editorial Branding */}
      <div className="max-w-7xl mx-auto mt-32 md:mt-60 pt-16 md:pt-20 border-t border-stone-300 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="space-y-3 md:space-y-4">
             <span className="font-serif italic text-4xl md:text-5xl text-stone-900 block">Casa Ilustrada</span>
             <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold text-stone-400">Crónica de una Habitación • Vol. 01</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold text-stone-500">
              <div className="flex gap-2">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="w-1.5 h-1.5 rounded-full bg-stone-200" />
                 ))}
              </div>
              <span>© 2026 — NOELIA QUINA</span>
          </div>
      </div>
    </div>
  );
};
