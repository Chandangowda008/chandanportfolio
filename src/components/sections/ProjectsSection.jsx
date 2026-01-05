import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Exam Room Allocation System',
      tech: 'MERN Stack',
      description: 'A comprehensive web application for automating exam room and seat allocation. Features include student management, room scheduling, and automated seat assignment algorithms.',
      highlights: [
        'Built with React, Node.js, Express, MongoDB',
        'Real-time seat allocation algorithm',
        'Admin dashboard for management',
        'PDF report generation'
      ],
      status: 'COMPLETED',
      statusColor: 'text-green-400'
    },
    {
      title: 'AI-Powered Sales Chatbot',
      tech: 'AI/ML + Web',
      description: 'Intelligent chatbot for handling sales inquiries and customer support. Integrated with natural language processing to understand and respond to customer queries.',
      highlights: [
        'Natural language understanding',
        'Automated response system',
        'CRM integration',
        'Analytics dashboard'
      ],
      status: 'IN PROGRESS',
      statusColor: 'text-yellow-400'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Title */}
      <div className="pixel-card">
        <h2 className="text-retro-lightest text-base sm:text-xl lg:text-2xl mb-2 text-glow">
          → PROJECTS
        </h2>
        <div className="h-1 bg-retro-lightest"></div>
      </div>

      {/* Projects List */}
      {projects.map((project, idx) => (
        <div 
          key={idx}
          className="pixel-card animate-slideInUp"
          style={{ animationDelay: `${idx * 0.15}s` }}
        >
          {/* Project Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3 gap-2">
            <div>
              <h3 className="text-retro-lightest text-xs sm:text-sm lg:text-base mb-1">
                🎮 {project.title}
              </h3>
              <p className="text-blue-400 text-[10px] sm:text-xs">
                [{project.tech}]
              </p>
            </div>
            <span className={`text-[10px] sm:text-xs ${project.statusColor} animate-pulse whitespace-nowrap`}>
              ● {project.status}
            </span>
          </div>

          {/* Description */}
          <p className="text-retro-lightest text-[10px] sm:text-xs lg:text-sm mb-3 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="bg-retro-bg border-2 border-retro-lighter p-2 sm:p-3">
            <p className="text-retro-lightest text-[10px] sm:text-xs mb-2">KEY FEATURES:</p>
            <div className="space-y-1 sm:space-y-2">
              {project.highlights.map((highlight, hIdx) => (
                <div 
                  key={hIdx}
                  className="text-retro-lightest text-[10px] sm:text-xs flex items-start gap-2"
                >
                  <span className="text-green-400">→</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* More Projects Indicator */}
      <div className="pixel-card bg-retro-bg border-retro-lighter text-center">
        <p className="text-retro-lightest text-[10px] sm:text-xs">
          View more projects on GitHub →
        </p>
      </div>
    </div>
  );
};

export default ProjectsSection;
