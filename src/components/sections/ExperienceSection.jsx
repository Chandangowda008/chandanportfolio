import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Title */}
      <div className="pixel-card">
        <h2 className="text-retro-lightest text-base sm:text-xl lg:text-2xl mb-2 text-glow">
          → EXPERIENCE
        </h2>
        <div className="h-1 bg-retro-lightest"></div>
      </div>

      {/* Main Experience Card */}
      <div className="pixel-card animate-slideInUp">
        {/* Company Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
          <div>
            <h3 className="text-retro-lightest text-xs sm:text-sm lg:text-base mb-1">
              💼 Software Developer Intern
            </h3>
            <p className="text-blue-400 text-[10px] sm:text-xs">
              Aulosa
            </p>
          </div>
          <span className="text-green-400 text-[10px] sm:text-xs animate-pulse whitespace-nowrap">
            ● CURRENT
          </span>
        </div>

        {/* Responsibilities */}
        <div className="bg-retro-bg border-2 border-retro-lighter p-2 sm:p-3 mb-4">
          <p className="text-retro-lightest text-[10px] sm:text-xs mb-2">KEY RESPONSIBILITIES:</p>
          <div className="space-y-2">
            {[
              'Develop and maintain full-stack web applications using MERN stack',
              'Implement CI/CD pipelines for automated deployment',
              'Work with AWS and Azure cloud services for application hosting',
              'Collaborate with cross-functional teams in Agile environment',
              'Write clean, maintainable, and well-documented code',
              'Participate in code reviews and technical discussions'
            ].map((item, idx) => (
              <div 
                key={idx}
                className="text-retro-lightest text-[10px] sm:text-xs flex items-start gap-2"
              >
                <span className="text-green-400 flex-shrink-0">→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-retro-bg border-2 border-retro-lighter p-2 sm:p-3">
          <p className="text-retro-lightest text-[10px] sm:text-xs mb-2">TECH STACK:</p>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Azure', 'Git', 'Docker'].map((tech, idx) => (
              <span 
                key={idx}
                className="bg-retro-light border-2 border-retro-lightest px-2 py-1 text-[8px] sm:text-[10px] text-retro-lightest"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Gained */}
      <div className="pixel-card bg-retro-bg border-retro-lighter">
        <h3 className="text-retro-lightest text-xs sm:text-sm lg:text-base mb-3">
          ⚡ SKILLS GAINED
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { skill: 'Full-Stack Development', level: 85 },
            { skill: 'Cloud Services', level: 75 },
            { skill: 'CI/CD Pipelines', level: 80 },
            { skill: 'Team Collaboration', level: 90 }
          ].map((item, idx) => (
            <div key={idx} className="bg-retro-light border-2 border-retro-lighter p-2 sm:p-3">
              <p className="text-retro-lightest text-[8px] sm:text-[10px] mb-1">{item.skill}</p>
              <div className="bg-retro-bg h-2 border border-retro-lightest">
                <div 
                  className="bg-green-400 h-full transition-all duration-1000"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
