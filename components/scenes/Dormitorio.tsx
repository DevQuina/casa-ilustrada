
import React from 'react';
import { motion } from 'framer-motion';
import { SCENES } from '../../constants';
import { Hotspot } from '../Hotspot';

interface SceneProps {
  onNavigate: (id: string) => void;
}

export const Dormitorio: React.FC<SceneProps> = ({ onNavigate }) => {
  const config = SCENES.dormitorio;
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative h-full w-full">
        <motion.img 
          src={config.image} 
          alt={config.name} 
          className="h-full w-full object-contain"
          initial={{ opacity: 0, filter: "brightness(0)" }}
          animate={{ opacity: 1, filter: "brightness(1)" }}
          transition={{ duration: 1.5 }}
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
