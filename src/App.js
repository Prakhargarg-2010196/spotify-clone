import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import PlayerList from './components/PlayerList';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='player-container'>
        <div className='side-bar'>
          <Sidebar />
        </div>
        <div className='player-playlist'>
          <PlayerList />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
