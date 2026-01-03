import React from 'react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: 'Full-Stack Mastery',
      description: 'Successfully built and deployed multiple MERN stack applications',
      icon: '🏆',
      points: 500
    },
    {
      title: 'Cloud Warrior',
      description: 'Implemented AWS and Azure solutions for production applications',
      icon: '☁️',
      points: 400
    },
    {
      title: 'CI/CD Expert',
      description: 'Automated deployment pipelines reducing deployment time by 70%',
      icon: '⚙️',
      points: 450
    },
    {
      title: 'Problem Solver',
      description: 'Consistently solve complex algorithmic challenges',
      icon: '🧩',
      points: 350
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '10+', color: 'text-green-400' },
    { label: 'Technologies Mastered', value: '15+', color: 'text-blue-400' },
    { label: 'Code Commits', value: '500+', color: 'text-yellow-400' },
    { label: 'Problems Solved', value: '100+', color: 'text-purple-400' }
  ];

  return (
    <div className="space-y-4">
      {/* Title */}
      <div className="pixel-card">
        <h2 className="text-retro-lightest text-xl mb-2 text-glow">
          → ACHIEVEMENTS
        </h2>
        <div className="h-1 bg-retro-lightest"></div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, idx) => (
          <div 
            key={idx}
            className="pixel-card text-center animate-slideInUp"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <p className={`text-2xl font-bold ${stat.color} mb-1`}>
              {stat.value}
            </p>
            <p className="text-retro-lightest text-[8px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Achievements List */}
      <div className="space-y-3">
        {achievements.map((achievement, idx) => (
          <div 
            key={idx}
            className="pixel-card animate-slideInUp"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="text-3xl flex-shrink-0">
                {achievement.icon}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-retro-lightest text-sm">
                    {achievement.title}
                  </h3>
                  <span className="text-yellow-400 text-[10px] bg-retro-bg border-2 border-yellow-400 px-2 py-1">
                    +{achievement.points} XP
                  </span>
                </div>
                <p className="text-retro-lightest text-[10px] leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="pixel-card bg-retro-bg border-retro-lighter">
        <h3 className="text-retro-lightest text-sm mb-3">
          📜 CERTIFICATIONS & LEARNING
        </h3>
        <div className="space-y-2">
          {[
            'Full-Stack Web Development',
            'Cloud Architecture Basics',
            'Agile Development Practices',
            'React Advanced Patterns'
          ].map((cert, idx) => (
            <div 
              key={idx}
              className="bg-retro-light border-2 border-retro-lighter p-2 text-retro-lightest text-[10px] flex items-center justify-between"
            >
              <span>• {cert}</span>
              <span className="text-green-400">✓</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
