import { useState } from 'react'
import './App.css';
import SpotifyModal from './Components/Modal/SpotifyModal';
import CustomModal from './Components/Modal/CustomModal';
import RestartModal from './Components/Modal/RestartModal';
import ProgressModal from './Components/Modal/ProgressModal';
//import ProgressModal from './Components/Modal/ProgressModal.jsx';


function App() {
  const [currentModal, setCurrentModal] = useState('spotify')
  const [showRestartModal, setShowRestartModal] = useState(false);


  return (
    <>
            {currentModal === "spotify" && <SpotifyModal showCustom={() => setCurrentModal("custom")} showRestart={() => setShowRestartModal(true)} />}
            {currentModal === "custom" && <CustomModal showSpotify={() => setCurrentModal("spotify")} showRestart={() => setShowRestartModal(true)} />}
            {showRestartModal && <RestartModal confirmRestart={() => { setCurrentModal("spotify"); setShowRestartModal(false); }} cancel={() => setShowRestartModal(false)} />}
    </>
  );
}

export default App;
