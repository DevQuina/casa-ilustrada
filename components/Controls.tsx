
import React from 'react';
import { ArrowLeft, Maximize2 } from 'lucide-react';
import { ViewState } from '../types';

interface ControlsProps {
  viewState: ViewState;
  onZoom: () => void;
  onReset: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ 
  viewState, 
  onZoom, 
  onReset 
}) => {
  const isZoomed = viewState === ViewState.ZOOMED;
  const textColor = 'text-stone-800';
  const borderColor = 'border-stone-400/30';
  const bgColor = 'bg-stone-50/60 backdrop-blur-xl'; 

  return (
    <>
      {/* Top Left: Navigation / Back */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-[70]">
        {isZoomed ? (
          <button 
            onClick={onReset}
            className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full border ${borderColor} ${bgColor} ${textColor} transition-all duration-500 shadow-sm active:scale-95`}
          >
            <ArrowLeft size={14} strokeWidth={2.5} />
            <span className="font-sans font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[9px] md:text-[10px]">Atrás</span>
          </button>
        ) : (
          <div className="flex flex-col">
            <div className={`font-serif text-lg md:text-3xl italic ${textColor} leading-tight`}>
              Casa Ilustrada
            </div>
            <div className="h-[1px] w-5 md:w-8 bg-stone-400 mt-1.5 md:mt-2" />
          </div>
        )}
      </div>

      {/* Center Action Button (Overview Only) */}
      {!isZoomed && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none">
             <button 
                onClick={onZoom}
                className={`pointer-events-auto group relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full border border-stone-900/10 text-stone-900 transition-all duration-700 hover:scale-110 active:scale-90 shadow-2xl bg-white/10 backdrop-blur-sm`}
            >
                <div className="relative flex flex-col items-center gap-1">
                   <Maximize2 strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6" />
                   <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">
                        Explorar
                    </span>
                </div>
            </button>
        </div>
      )}
    </>
  );
};
