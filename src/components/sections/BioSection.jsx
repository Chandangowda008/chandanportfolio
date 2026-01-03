import React from 'react';

const BioSection = () => {
  return (
    <div className="space-y-4">
      {/* Title Card */}
      <div className="pixel-card animate-slideInDown">
        <h2 className="text-retro-lightest text-xl mb-4 text-glow">
          → ABOUT ME
        </h2>
        <div className="h-1 bg-retro-lightest mb-4"></div>
        
        <div className="space-y-4 text-retro-lightest text-xs leading-relaxed">
          <p>
            Hello! I'm <span className="text-retro-lightest font-bold text-glow">CHANDAN K</span>,
            a passionate Software Developer Intern specializing in full-stack web development.
          </p>
          
          <p>
            I build modern web applications using the MERN stack, with expertise in React,
            Node.js, and cloud technologies. My focus is on creating efficient, scalable
            solutions that solve real-world problems.
          </p>
          
          <p>
            Currently working on exciting projects involving CI/CD pipelines, AWS, and Azure
            cloud services. I love automating workflows and building user-friendly interfaces.
          </p>
        </div>
      </div>

      {/* Stats Card */}
      <div className="pixel-card animate-slideInUp">
        <h3 className="text-retro-lightest text-sm mb-4">
          ★ DEVELOPER STATS
        </h3>
        <div className="grid grid-cols-2 gap-4 text-retro-lightest text-[10px]">
          <div className="bg-retro-bg border-2 border-retro-lighter p-3">
            <p className="mb-1">ROLE:</p>
            <p className="text-retro-lightest">Software Dev Intern</p>
          </div>
          <div className="bg-retro-bg border-2 border-retro-lighter p-3">
            <p className="mb-1">COMPANY:</p>
            <p className="text-retro-lightest">Aulosa</p>
          </div>
          <div className="bg-retro-bg border-2 border-retro-lighter p-3">
            <p className="mb-1">FOCUS:</p>
            <p className="text-retro-lightest">Full-Stack Dev</p>
          </div>
          <div className="bg-retro-bg border-2 border-retro-lighter p-3">
            <p className="mb-1">STATUS:</p>
            <p className="text-green-400 animate-pulse">● ACTIVE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioSection;
