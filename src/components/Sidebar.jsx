import React from 'react';
import { play8BitSound } from '../utils/soundEffects';

const Sidebar = ({ activeSection, setActiveSection, onReturnToLanding }) => {
  const menuItems = [
    { id: 'bio', label: 'BIO', icon: '👤' },
    { id: 'skills', label: 'SKILLS', icon: '⚡' },
    { id: 'projects', label: 'PROJECTS', icon: '🎮' },
    { id: 'experience', label: 'EXPERIENCE', icon: '💼' },
    { id: 'achievements', label: 'WINS', icon: '🏆' },
    { id: 'contact', label: 'CONTACT', icon: '📧' },
  ];

  return (
    <div className="w-full lg:w-64 bg-retro-light border-2 sm:border-4 border-retro-lightest shadow-pixel-lg flex-shrink-0">
      {/* Header */}
      <div className="bg-retro-lightest border-b-2 sm:border-b-4 border-retro-text p-3 sm:p-4 text-center">
        <h1 className="text-retro-text text-xs sm:text-sm lg:text-xs break-words">
          CHANDAN K
        </h1>
        <p className="text-retro-text text-[8px] sm:text-[10px] mt-1 sm:mt-2">
          DEV PORTFOLIO
        </p>
      </div>

      {/* Menu Items */}
      <div className="p-2 sm:p-3 grid grid-cols-2 lg:grid-cols-1 gap-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              play8BitSound();
            }}
            className={`w-full text-left p-3 sm:p-3 lg:p-3 border-2 sm:border-4 transition-all duration-100 text-[10px] sm:text-xs touch-manipulation
              ${
                activeSection === item.id
                  ? 'bg-retro-lightest text-retro-text border-retro-text shadow-none translate-x-0.5 translate-y-0.5 sm:translate-x-1 sm:translate-y-1'
                  : 'bg-retro-lighter text-retro-text border-retro-text shadow-pixel hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 sm:hover:translate-x-1 sm:hover:translate-y-1 active:shadow-none active:translate-x-0.5 active:translate-y-0.5'
              }
            `}
          >
            <span className="mr-2 text-sm sm:text-base">{item.icon}</span>
            <span className="align-middle">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="p-2 sm:p-4 mt-2 sm:mt-4 space-y-2">
        <button
          onClick={() => {
            play8BitSound();
            onReturnToLanding();
          }}
          className="w-full bg-retro-bg text-retro-lightest border-2 sm:border-4 border-retro-lightest p-2 text-[10px] sm:text-xs hover:bg-retro-lighter transition-all hover:shadow-pixel active:shadow-none touch-manipulation"
        >
          ← BACK TO START
        </button>
        <div className="bg-retro-lightest border-2 sm:border-4 border-retro-text p-2 text-center">
          <p className="text-retro-text text-[8px] sm:text-[10px]">
            LEVEL 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
