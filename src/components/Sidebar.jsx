import React from 'react';
import { play8BitSound } from '../utils/soundEffects';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'bio', label: 'BIO', icon: '👤' },
    { id: 'skills', label: 'SKILLS', icon: '⚡' },
    { id: 'projects', label: 'PROJECTS', icon: '🎮' },
    { id: 'experience', label: 'EXPERIENCE', icon: '💼' },
    { id: 'achievements', label: 'WINS', icon: '🏆' },
    { id: 'contact', label: 'CONTACT', icon: '📧' },
  ];

  return (
    <div className="w-full md:w-64 bg-retro-light border-2 sm:border-4 border-retro-lightest shadow-pixel-lg flex-shrink-0">
      {/* Header */}
      <div className="bg-retro-lightest border-b-2 sm:border-b-4 border-retro-text p-3 sm:p-4 text-center">
        <h1 className="text-retro-text text-[10px] sm:text-xs break-words">
          CHANDAN K
        </h1>
        <p className="text-retro-text text-[8px] mt-1 sm:mt-2">
          DEV PORTFOLIO
        </p>
      </div>

      {/* Menu Items */}
      <div className="p-2 grid grid-cols-2 md:grid-cols-1 gap-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveSection(item.id);
              play8BitSound();
            }}
            className={`w-full text-left p-2 sm:p-3 border-2 sm:border-4 transition-all duration-100 text-[8px] sm:text-xs touch-manipulation
              ${
                activeSection === item.id
                  ? 'bg-retro-lightest text-retro-text border-retro-text shadow-none translate-x-0.5 translate-y-0.5 sm:translate-x-1 sm:translate-y-1'
                  : 'bg-retro-lighter text-retro-text border-retro-text shadow-pixel hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 sm:hover:translate-x-1 sm:hover:translate-y-1 active:shadow-none active:translate-x-0.5 active:translate-y-0.5'
              }
            `}
          >
            <span className="mr-1 sm:mr-2 text-xs sm:text-base">{item.icon}</span>
            <span className="hidden xs:inline sm:inline">{item.label}</span>
            <span className="inline xs:hidden sm:hidden">{item.label.substring(0, 3)}</span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="p-2 sm:p-4 mt-2 sm:mt-4">
        <div className="bg-retro-lightest border-2 sm:border-4 border-retro-text p-2 text-center">
          <p className="text-retro-text text-[8px]">
            LEVEL 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
