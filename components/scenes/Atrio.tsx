
import React from 'react';
import { motion } from 'framer-motion';
import { SCENES } from '../../constants';
import { Hotspot } from '../Hotspot';
import { ViewState } from '../../types';

interface SceneProps {
  onNavigate: (id: string) => void;
  viewState: ViewState;
}

export const Atrio: React.FC<SceneProps> = ({ onNavigate, viewState }) => {
  const config = SCENES.atrio;
  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-visible">
      <div className="relative h-full w-full max-w-full flex items-center justify-center">
        <motion.img 
          src={config.image} 
          alt={config.name} 
          className="h-full w-full object-contain brightness-105 pointer-events-none p-2 md:p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div 
          className="absolute inset-0"
          animate={{ opacity: viewState === ViewState.ZOOMED ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.8 }} 
        >
          <div className={`w-full h-full relative ${viewState === ViewState.ZOOMED ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {config.hotspots.map((hotspot) => (
              <Hotspot key={hotspot.id} data={hotspot} onNavigate={onNavigate} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
