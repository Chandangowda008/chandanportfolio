import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainPanel from './components/MainPanel';
import LandingPage from './components/LandingPage';

function App() {
  const [activeSection, setActiveSection] = useState('bio');
  const [hasEntered, setHasEntered] = useState(false);

  if (!hasEntered) {
    return <LandingPage onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div className="min-h-screen bg-retro-bg flex flex-col md:flex-row md:items-center md:justify-center p-2 sm:p-4">
      <div className="w-full max-w-7xl h-auto md:h-[90vh] flex flex-col gap-2 sm:gap-4">
        {/* Sidebar Navigation */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Main Content Panel */}
        <MainPanel activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;
