
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { SCENES } from './constants';
import { ViewState, SceneConfig } from './types';
import { NarrativePanel } from './components/NarrativePanel';
import { Controls } from './components/Controls';
import { Intro } from './components/Intro';
import { EditorialArticle } from './components/EditorialArticle';

// Importación de escenas modulares
import { Atrio } from './components/scenes/Atrio';
import { Salon } from './components/scenes/Salon';
import { Cocina } from './components/scenes/Cocina';
import { Dormitorio } from './components/scenes/Dormitorio';
import { Terraza } from './components/scenes/Terraza';
import { Bano } from './components/scenes/Bano';

const SCENE_COMPONENTS: Record<string, React.FC<any>> = {
  atrio: Atrio,
  salon: Salon,
  cocina: Cocina,
  dormitorio: Dormitorio,
  terraza: Terraza,
  baño: Bano,
};

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [viewState, setViewState] = useState<ViewState>(ViewState.OVERVIEW);
  const [currentScene, setCurrentScene] = useState<SceneConfig>(SCENES.atrio);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [currentScene.id]);

  const handleStart = () => {
    setShowIntro(false);
    setShowVideo(true);
  };

  const handleEnterFromVideo = () => {
    setShowVideo(false);
    setViewState(ViewState.ZOOMED);
  };

  const handleZoom = () => setViewState(ViewState.ZOOMED);
  
  const handleReset = () => {
    if (currentScene.id !== 'atrio') {
      setCurrentScene(SCENES.atrio);
      setViewState(ViewState.ZOOMED);
    } else {
      setShowVideo(true);
    }
  };

  const handleNavigate = (sceneId: string) => {
    if (SCENES[sceneId]) {
      setCurrentScene(SCENES[sceneId]);
      setViewState(ViewState.ZOOMED);
    }
  };

  const ActiveScene = SCENE_COMPONENTS[currentScene.id] || Atrio;
  const isAtrio = currentScene.id === 'atrio';

  return (
    <div className="relative w-full h-[100dvh] bg-[#E6E2DD] overflow-hidden">
      
      <AnimatePresence mode="wait">
        {showIntro && <Intro key="intro" onStart={handleStart} />}
      </AnimatePresence>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            key="video-transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[60] bg-black flex items-center justify-center"
          >
            <video autoPlay muted playsInline loop className="w-full h-full object-cover opacity-90">
                <source src="https://res.cloudinary.com/drhrrhrvp/video/upload/vidu-video-3085314697633751_xbdovk.mp4" type="video/mp4" />
            </video>
            <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={handleEnterFromVideo}
                className="absolute z-10 flex flex-col items-center cursor-pointer"
            >
                <span className="font-serif text-5xl md:text-6xl italic text-white mb-4">Entrar</span>
                <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/50 border-b border-white/20">Haga clic para acceder</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div 
        ref={scrollContainerRef}
        className="w-full h-full overflow-y-auto hide-scrollbar scroll-smooth bg-[#E6E2DD]"
      >
        <div className={`relative w-full ${!isAtrio ? 'min-h-[200vh]' : 'h-full'}`}>
            
            <div className="w-full h-full flex flex-col md:flex-row bg-[#E6E2DD]">
                
                {/* Columna Visual (Imagen) */}
                <div className={`relative w-full overflow-hidden flex items-center justify-center bg-[#E6E2DD]
                    ${isAtrio ? 'h-[40vh] md:h-full md:w-[45%]' : 'h-[40vh] md:h-screen md:w-[45%] md:sticky md:top-0'}
                `}>
                    <motion.div
                        animate={{ 
                            scale: isAtrio ? (viewState === ViewState.ZOOMED ? 0.95 : 0.8) : 1,
                        }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} 
                        className="relative w-full h-full flex items-center justify-center p-4 md:p-8 lg:p-12"
                    >
                        <AnimatePresence mode="wait">
                            <ActiveScene 
                                key={currentScene.id} 
                                onNavigate={handleNavigate} 
                                viewState={viewState}
                            />
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Columna Editorial (Texto) */}
                <div className={`relative w-full flex flex-col items-start justify-center bg-[#E6E2DD]
                    ${isAtrio ? 'h-[60vh] md:h-full md:w-[55%]' : 'min-h-[60vh] md:min-h-screen md:w-[55%]'}
                `}>
                    <div className="w-full px-6 sm:px-10 md:px-12 lg:px-20 py-6 md:py-0">
                        <NarrativePanel 
                            currentScene={currentScene} 
                            isVisible={viewState === ViewState.ZOOMED}
                            scrollYProgress={scrollYProgress}
                        />
                    </div>
                </div>
            </div>

            {!isAtrio && (
                <div className="w-full relative z-20">
                    <EditorialArticle scene={currentScene} />
                </div>
            )}
        </div>
      </div>

      {!showIntro && !showVideo && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Controls 
                viewState={viewState}
                onZoom={handleZoom}
                onReset={handleReset}
            />
        </motion.div>
      )}
    </div>
  );
};

export default App;
