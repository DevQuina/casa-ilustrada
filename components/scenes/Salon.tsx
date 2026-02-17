
import React from 'react';
import { motion } from 'framer-motion';
import { SCENES } from '../../constants';
import { Hotspot } from '../Hotspot';

interface SceneProps {
  onNavigate: (id: string) => void;
}

export const Salon: React.FC<SceneProps> = ({ onNavigate }) => {
  const config = SCENES.salon;
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative h-full w-full">
        <motion.img 
          src={config.image} 
          alt={config.name} 
          className="h-full w-full object-contain"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0">
          {config.hotspots.map((hotspot) => (
            <Hotspot key={hotspot.id} data={hotspot} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </div>
  );
};
