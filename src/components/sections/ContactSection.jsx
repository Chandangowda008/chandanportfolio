import React from 'react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: '📧',
      label: 'EMAIL',
      value: 'chandankiri8@gmail.com',
      action: 'mailto:chandankiri8@gmail.com'
    },
    {
      icon: '💼',
      label: 'LINKEDIN',
      value: '/in/chandan-k-6737912b1',
      action: 'https://www.linkedin.com/in/chandan-k-6737912b1/'
    },
    {
      icon: '🐱',
      label: 'GITHUB',
      value: '/Chandangowda008',
      action: 'https://github.com/Chandangowda008'
    },
    {
      icon: '📞',
      label: 'PHONE',
      value: '+91 9380748844',
      action: 'tel:+919380748844'
    }
  ];

  const handleDownloadResume = () => {
    // Download resume from public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Chandan_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Title */}
      <div className="pixel-card">
        <h2 className="text-retro-lightest text-base sm:text-xl lg:text-2xl mb-2 text-glow">
          → CONTACT
        </h2>
        <div className="h-1 bg-retro-lightest"></div>
      </div>

      {/* Introduction */}
      <div className="pixel-card animate-slideInUp">
        <h3 className="text-retro-lightest text-xs sm:text-sm lg:text-base mb-3">
          🎮 LET'S CONNECT!
        </h3>
        <p className="text-retro-lightest text-[10px] sm:text-xs leading-relaxed mb-4">
          I'm currently looking for new opportunities as a Full-Stack Developer.
          Feel free to reach out if you want to discuss projects, job opportunities,
          or just want to connect!
        </p>
        <div className="bg-retro-bg border-2 border-green-400 p-2 sm:p-3">
          <p className="text-green-400 text-[10px] sm:text-xs animate-pulse">
            ● Available for hire • Open to remote work
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {contactMethods.map((contact, idx) => (
          <a
            key={idx}
            href={contact.action}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-card hover:bg-retro-lighter transition-colors animate-slideInUp cursor-pointer"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="flex items-center gap-3">
              <div className="text-xl sm:text-2xl">
                {contact.icon}
              </div>
              <div className="flex-1">
                <p className="text-retro-lightest text-[8px] sm:text-[10px] mb-1">
                  {contact.label}
                </p>
                <p className="text-retro-lightest text-[10px] sm:text-xs break-all">
                  {contact.value}
                </p>
              </div>
              <span className="text-retro-lightest text-xs sm:text-sm">→</span>
            </div>
          </a>
        ))}
      </div>

      {/* Resume Download */}
      <div className="pixel-card bg-retro-lightest text-center">
        <button
          onClick={handleDownloadResume}
          className="w-full pixel-button text-[10px] py-4"
        >
          <span className="text-lg mr-2">📄</span>
          DOWNLOAD RESUME
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
