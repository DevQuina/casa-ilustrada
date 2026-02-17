
import React from 'react';
import { motion } from 'framer-motion';
import { SCENES } from '../../constants';
import { Hotspot } from '../Hotspot';

interface SceneProps {
  onNavigate: (id: string) => void;
}

export const Terraza: React.FC<SceneProps> = ({ onNavigate }) => {
  const config = SCENES.terraza;
  return (
    <div className="relative h-full w-full flex items-center justify-start overflow-hidden">
      <motion.img 
        src={config.image} 
        alt={config.name} 
        className="h-full w-full object-cover"
        style={{ objectPosition: '0% center' }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="absolute inset-0">
        {config.hotspots.map((hotspot) => (
          <Hotspot key={hotspot.id} data={hotspot} onNavigate={onNavigate} />
        ))}
      </div>
    </div>
  );
};
