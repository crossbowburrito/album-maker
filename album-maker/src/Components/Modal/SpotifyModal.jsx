import React, { useState } from "react";
import "./Modal.css";
import Toggle from "../Toggle/toggle";
import Socials from "../Socials/Socials";






export default function SpotifyModal({ showCustom, showRestart }) {

    // Step 1: Initialize a state variable
    const [spotifyLink, setSpotifyLink] = useState('');

    // Step 2: Set up an event handler
    const handleInputChange = (event) => {
        setSpotifyLink(event.target.value);
    };

    // Function to handle submission or other actions
    const handleSubmit = () => {
        console.log("Submitted Spotify Link:", spotifyLink);
    // You can now use the spotifyLink variable to make API calls or other operations
    };
    
    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">

                <>
                <button onClick={showRestart} className="top-buttons" id="back-btn-modal"><img src="#"></img></button>
                <Toggle className="top-buttons" id="toggle-modal" isSpotify={false} toggle={showCustom} />
                </>

                <br />

                <>
                <h2>Spotify Modal</h2>
                <br />
                <p>You can choose to base your output on a Spotify playlist, artist, album or song.</p>
                </>

                

                <br /><br />

                <div className="spotify-options">
                    <input 
                        type="text" 
                        className="spotify-buttons" 
                        id="input-spotify" 
                        placeholder="Paste a spotify link:"
                        value={spotifyLink}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit} className="spotify-buttons" id="submit-btn-modal">Go!</button>
                </div>

                <br /><br />

                <Socials />
                
            </div>
        </div>
    );
}
