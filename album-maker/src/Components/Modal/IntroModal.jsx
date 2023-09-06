import React, { useState } from "react";
import "./Modal.css";
import SpotifyModal from "./SpotifyModal";
import CustomModal from "./CustomModal";

export default function IntroModal() {

    const [showIntroModal, setShowIntroModal] = useState(true);
    const [showSpotifyModal, setShowSpotifyModal] = useState(false);
    const [showCustomModal, setShowCustomModal] = useState(false);

    const handleSpotifyClick = () => {
        setShowIntroModal(false);
        setShowSpotifyModal(true);
    };

    const handleCustomClick = () => {
        setShowIntroModal(false);
        setShowCustomModal(true);
    }

    return (
        <>
        {showIntroModal && (
        <div className="modal">
            
            <div className="overlay"></div>
            
            <div className="modal-content">
                <h2>Chorus Generator</h2>
                <p>You can choose to base your output on a Spotify playlist, artist, album or song. Or you can customize, or randomize, your own parameters to make the chorus.</p>
                <button onClick={handleSpotifyClick} className="btn-modal">Spotify</button>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button onClick={handleCustomClick} className="btn-modal">Custom</button>

            </div>

        </div>
        )}

        {showSpotifyModal && <SpotifyModal />}
        {showCustomModal && <CustomModal />}
        </>
    );

}
