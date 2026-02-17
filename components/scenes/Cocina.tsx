
import React from 'react';
import { motion } from 'framer-motion';
import { SCENES } from '../../constants';
import { Hotspot } from '../Hotspot';

interface SceneProps {
  onNavigate: (id: string) => void;
}

export const Cocina: React.FC<SceneProps> = ({ onNavigate }) => {
  const config = SCENES.cocina;
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative h-full w-full">
        <motion.img 
          src={config.image} 
          alt={config.name} 
          className="h-full w-full object-contain"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2 }}
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
