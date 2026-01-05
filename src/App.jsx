import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import LandingPage from './components/LandingPage';

function App() {
  const [activeSection, setActiveSection] = useState('bio');
  const [hasEntered, setHasEntered] = useState(false);

  const handleReturnToLanding = () => {
    setHasEntered(false);
    setActiveSection('bio'); // Reset to default section
  };

  if (!hasEntered) {
    return <LandingPage onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div className="min-h-screen bg-retro-bg flex flex-col lg:flex-row lg:items-center lg:justify-center p-2 sm:p-4 lg:p-6">
      <div className="w-full max-w-7xl h-auto lg:h-[90vh] flex flex-col lg:flex-row gap-2 sm:gap-4">
        {/* Sidebar Navigation */}
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          onReturnToLanding={handleReturnToLanding}
        />
        
        {/* Main Content Panel */}
        <MainPanel activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;
