import React, { useState, useEffect, useRef } from 'react';
import { play8BitSound, RetroMusicPlayer } from '../utils/soundEffects';

const LandingPage = ({ onEnter }) => {
  const [isEntering, setIsEntering] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const musicPlayerRef = useRef(null);

  useEffect(() => {
    // Start F.I.R.E. inspired music when component mounts
    const musicPlayer = new RetroMusicPlayer();
    musicPlayerRef.current = musicPlayer;
    musicPlayer.start();
    setMusicPlaying(true);

    return () => {
      // Stop music when component unmounts
      if (musicPlayerRef.current) {
        musicPlayerRef.current.stop();
      }
    };
  }, []);

  const handleEnter = () => {
    play8BitSound();
    // Stop background music when entering
    if (musicPlayerRef.current) {
      musicPlayerRef.current.stop();
    }
    setIsEntering(true);
    setTimeout(() => {
      onEnter();
    }, 500);
  };

  const toggleMusic = () => {
    if (musicPlayerRef.current) {
      if (musicPlaying) {
        musicPlayerRef.current.stop();
        setMusicPlaying(false);
      } else {
        musicPlayerRef.current.start();
        setMusicPlaying(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-retro-bg flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-4 h-full">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="border border-retro-lightest"></div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className={`text-center z-10 transition-all duration-500 ${isEntering ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        {/* Pixel Art Character */}
        <div className="mb-8 text-6xl md:text-8xl animate-bounce">
          <div className="text-center leading-tight">
            <div>👾</div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="pixel-card mb-8 animate-slideInDown">
          <h1 className="text-retro-lightest text-2xl md:text-3xl mb-4 text-glow">
            WELCOME PLAYER
          </h1>
          <div className="h-1 bg-retro-lightest mx-auto mb-4 w-32"></div>
          <p className="text-retro-lightest text-xs md:text-sm mb-4">
            GET READY TO EXPLORE
          </p>
          <p className="text-retro-lighter text-[10px]">
            CHANDAN K PORTFOLIO
          </p>
        </div>

        {/* Start Button */}
        <button
          onClick={handleEnter}
          className="pixel-button bg-retro-lightest text-retro-text text-sm md:text-base py-4 px-8 mb-8 hover:scale-110 transition-transform"
        >
          ▶ START ADVENTURE
        </button>

        {/* Loading dots animation */}
        <div className="flex justify-center gap-2 text-retro-lightest">
          <span className="animate-pulse">●</span>
          <span className="animate-pulse delay-100">●</span>
          <span className="animate-pulse delay-200">●</span>
        </div>

        {/* Footer text */}
        <p className="text-retro-lighter text-[8px] mt-8">
          PRESS START TO BEGIN
        </p>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-10 left-10 text-4xl opacity-20 animate-pulse">⚡</div>
      <div className="absolute bottom-10 right-10 text-4xl opacity-20 animate-pulse delay-300">🎮</div>
      <div className="absolute top-1/3 right-5 text-3xl opacity-10 animate-bounce">▲</div>
      <div className="absolute bottom-1/3 left-5 text-3xl opacity-10 animate-bounce delay-200">▼</div>

      {/* Music Toggle - Bottom Right */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-20 pixel-button bg-retro-lighter text-retro-text text-xs py-2 px-4 hover:scale-105 transition-transform"
      >
        {musicPlaying ? 'MUSIC ON' : 'MUSIC OFF'}
      </button>
    </div>
  );
};

export default LandingPage;
