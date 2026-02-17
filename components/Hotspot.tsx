
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { HotspotData } from '../types';

interface HotspotProps {
  data: HotspotData;
  onNavigate?: (sceneId: string) => void;
}

export const Hotspot: React.FC<HotspotProps> = ({ data, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (data.targetSceneId && onNavigate) {
      onNavigate(data.targetSceneId);
    }
  };

  const isRightSide = data.x > 50;
  const isBottomSide = data.y > 60;

  return (
    <div
      className="absolute z-50"
      style={{ left: `${data.x}%`, top: `${data.y}%`, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={() => window.innerWidth >= 1024 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth >= 1024 && setIsOpen(false)}
      onClick={handleClick}
    >
      <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 cursor-pointer group">
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute inset-0 rounded-full bg-stone-900"
        />
        <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-stone-900/95 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-stone-900">
          <Plus size={16} md:size={18} strokeWidth={2.5} />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && window.innerWidth >= 1024 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: isBottomSide ? 5 : -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`absolute z-[100] p-4 text-xs leading-relaxed backdrop-blur-2xl border bg-[#E6E2DD]/95 border-stone-300/50 text-stone-800 shadow-2xl rounded-lg pointer-events-none w-56 
              ${isBottomSide ? 'bottom-full mb-3' : 'top-full mt-3'} 
              ${isRightSide ? 'right-0' : 'left-0'}
            `}
          >
            <h4 className="font-serif uppercase tracking-[0.2em] mb-1.5 border-b border-stone-400/10 pb-1.5 text-stone-900 font-bold">
              {data.label}
            </h4>
            <p className="font-sans font-light text-stone-500 mb-2">{data.description}</p>
            <div className="flex items-center gap-2 text-[8px] uppercase tracking-widest font-bold text-stone-400">
                <span>Acceso Directo</span>
                <div className="w-4 h-[1px] bg-stone-400/30" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
