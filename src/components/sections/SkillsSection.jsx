import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'FRONTEND',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design'],
      color: 'text-blue-400'
    },
    {
      category: 'BACKEND',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
      color: 'text-green-400'
    },
    {
      category: 'DATABASE',
      skills: ['MongoDB', 'MySQL', 'Database Design'],
      color: 'text-yellow-400'
    },
    {
      category: 'CLOUD & DEVOPS',
      skills: ['AWS', 'Azure', 'CI/CD', 'Git/GitHub', 'Docker'],
      color: 'text-purple-400'
    },
    {
      category: 'TOOLS',
      skills: ['VS Code', 'Postman', 'Linux', 'Agile/Scrum'],
      color: 'text-red-400'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Title */}
      <div className="pixel-card">
        <h2 className="text-retro-lightest text-base sm:text-xl lg:text-2xl mb-2 text-glow">
          → SKILL TREE
        </h2>
        <div className="h-1 bg-retro-lightest"></div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx} 
            className="pixel-card animate-slideInUp"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <h3 className={`text-xs sm:text-sm lg:text-base mb-3 ${category.color} flex items-center gap-2`}>
              <span>▶</span> {category.category}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill, skillIdx) => (
                <div 
                  key={skillIdx}
                  className="bg-retro-bg border-2 border-retro-lighter p-2 sm:p-3 text-retro-lightest text-[10px] sm:text-xs hover:border-retro-lightest transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span>• {skill}</span>
                    <span className="text-green-400">✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Learning Section */}
      <div className="pixel-card bg-retro-bg border-retro-lighter">
        <h3 className="text-retro-lightest text-xs sm:text-sm lg:text-base mb-3">
          📚 CURRENTLY LEARNING
        </h3>
        <div className="flex flex-wrap gap-2">
          {['TypeScript', 'Next.js', 'GraphQL', 'Kubernetes'].map((item, idx) => (
            <span 
              key={idx}
              className="bg-retro-light border-2 border-retro-lightest px-2 sm:px-3 py-1 sm:py-2 text-[10px] sm:text-xs text-retro-lightest animate-pulse"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
