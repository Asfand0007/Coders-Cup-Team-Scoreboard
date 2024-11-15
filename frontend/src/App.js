import './App.css';
import BackgroundImage from './assets/bg.png';

import Credits from './components/credits';
import ScoreTable from './components/ScoreTable';
import TopBar from './components/TopBar';

function App() {
  return (
    <>
      <div className="w-screen bg-cover h-screen grid place-items-center content-start overflow-x-scroll overflow-y-scroll" style={{ "backgroundImage": `url(${BackgroundImage})` }}>
        < TopBar />
        <ScoreTable room='23k'/>
      </div >
      <div className="relative">
        <div className="absolute bottom-0 right-0 mb-4 mr-4">
          <Credits />
        </div>
      </div>
    </>
  );
}

export default App;
