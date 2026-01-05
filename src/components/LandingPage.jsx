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
    <div className="min-h-screen bg-retro-bg flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-10 gap-2 sm:gap-4 h-full">
          {[...Array(80)].map((_, i) => (
            <div key={i} className="border border-retro-lightest"></div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className={`text-center z-10 transition-all duration-500 max-w-2xl mx-auto px-4 ${isEntering ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        {/* Pixel Art Character */}
        <div className="mb-6 sm:mb-8 text-5xl sm:text-6xl lg:text-8xl animate-bounce">
          <div className="text-center leading-tight">
            <div>👾</div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="pixel-card mb-6 sm:mb-8 animate-slideInDown">
          <h1 className="text-retro-lightest text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-glow">
            WELCOME PLAYER
          </h1>
          <div className="h-1 bg-retro-lightest mx-auto mb-3 sm:mb-4 w-24 sm:w-32"></div>
          <p className="text-retro-lightest text-[10px] sm:text-xs lg:text-sm mb-3 sm:mb-4">
            GET READY TO EXPLORE
          </p>
          <p className="text-retro-lighter text-[8px] sm:text-[10px]">
            CHANDAN K PORTFOLIO
          </p>
        </div>

        {/* Start Button */}
        <button
          onClick={handleEnter}
          className="pixel-button bg-retro-lightest text-retro-text text-xs sm:text-sm lg:text-base py-3 sm:py-4 px-6 sm:px-8 mb-6 sm:mb-8 hover:scale-110 transition-transform"
        >
          ▶ START ADVENTURE
        </button>

        {/* Loading dots animation */}
        <div className="flex justify-center gap-2 text-retro-lightest">
          <span className="animate-pulse text-sm sm:text-base">●</span>
          <span className="animate-pulse delay-100 text-sm sm:text-base">●</span>
          <span className="animate-pulse delay-200 text-sm sm:text-base">●</span>
        </div>

        {/* Footer text */}
        <p className="text-retro-lighter text-[8px] sm:text-[10px] mt-6 sm:mt-8">
          PRESS START TO BEGIN
        </p>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-6 sm:top-10 left-6 sm:left-10 text-2xl sm:text-4xl opacity-20 animate-pulse">⚡</div>
      <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 text-2xl sm:text-4xl opacity-20 animate-pulse delay-300">🎮</div>
      <div className="absolute top-1/3 right-3 sm:right-5 text-xl sm:text-3xl opacity-10 animate-bounce">▲</div>
      <div className="absolute bottom-1/3 left-3 sm:left-5 text-xl sm:text-3xl opacity-10 animate-bounce delay-200">▼</div>

      {/* Music Toggle - Bottom Right */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-20 pixel-button bg-retro-lighter text-retro-text text-[10px] sm:text-xs py-2 px-3 sm:px-4 hover:scale-105 transition-transform"
      >
        {musicPlaying ? '♪ ON' : '♪ OFF'}
      </button>
    </div>
  );
};

export default LandingPage;
