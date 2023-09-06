import React, { useState } from "react";
import "./Modal.css";
import Toggle from "../Toggle/toggle";


export default function CustomModal({ showSpotify, showRestart }) {
    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <button onClick={showRestart} className="top-buttons" id="back-btn-modal"><img src="#"></img></button>
                <button onClick={showSpotify} className="top-buttons" id="toggle-modal"><Toggle /></button>
                <h2>Custom Modal</h2>
                <p>You can customize, or randomize, your own parameters to make the chorus.</p>
            </div>
        </div>
    );
}