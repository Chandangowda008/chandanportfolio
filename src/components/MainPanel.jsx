import React from 'react';
import BioSection from './sections/BioSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import AchievementsSection from './sections/AchievementsSection';
import ContactSection from './sections/ContactSection';

const MainPanel = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'bio':
        return <BioSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'achievements':
        return <AchievementsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <BioSection />;
    }
  };

  return (
    <div className="flex-1 bg-retro-light border-2 sm:border-4 border-retro-lightest shadow-pixel-lg overflow-hidden min-h-[70vh] lg:min-h-0">
      {/* Screen Frame */}
      <div className="h-full flex flex-col">
        {/* CRT Screen Effect Header */}
        <div className="bg-retro-bg border-b-2 sm:border-b-4 border-retro-lightest p-2 sm:p-3 flex items-center justify-between">
          <div className="flex gap-1 sm:gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 border border-retro-text sm:border-2"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500 border border-retro-text sm:border-2"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 border border-retro-text sm:border-2"></div>
          </div>
          <div className="text-retro-lightest text-[8px] sm:text-[10px] animate-pulse">
            ● REC
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6 bg-retro-bg">
          <div className="animate-fadeIn">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
