
import React from 'react';
import { motion } from 'framer-motion';
import { SCENES } from '../../constants';
import { Hotspot } from '../Hotspot';

interface SceneProps {
  onNavigate: (id: string) => void;
}

export const Bano: React.FC<SceneProps> = ({ onNavigate }) => {
  const config = SCENES.baño;
  if (!config) return null;

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative h-full w-full">
        <motion.img 
          src={config.image} 
          alt={config.name} 
          className="h-full w-full object-contain"
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
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
