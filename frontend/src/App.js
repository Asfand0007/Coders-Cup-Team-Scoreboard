import './App.css';
import React, { useState } from "react";
import HouseViewPage from './pages/HouseView';
import HouseStatsPage from './pages/HouseStatsPage';
import PageSwitcher from './components/PageSwitcher';
import Credits from './components/Credits';

function App() {
  const [currentView, setCurrentView] = useState('house');

  const toggleView = () => {
    setCurrentView(currentView === 'house' ? 'stats' : 'house');
  };

  const renderCurrentView = () => {
    switch(currentView) {
      case 'house':
        return <HouseViewPage />;
      case 'stats':
        return <HouseStatsPage />;
      default:
        return <HouseViewPage />;
    }
  };

  return (
    <>
      <PageSwitcher 
        currentView={currentView} 
        onSwitch={toggleView} 
      />
      {renderCurrentView()}
      <div className="relative">
        <div className="absolute bottom-0 right-0 mb-4 mr-4">
          <Credits />
        </div>
      </div>
    </>
  );
}

export default App;
