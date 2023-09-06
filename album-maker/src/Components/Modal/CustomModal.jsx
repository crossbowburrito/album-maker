import React, { useState } from "react";
import "./Modal.css";
import Toggle from "../Toggle/toggle";
import Parameters from "../ParametersApp/Parameters";



export default function CustomModal({ showSpotify, showRestart }) {


    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">

                <>
                <button onClick={showRestart} className="top-buttons" id="back-btn-modal"><img src="#"></img></button>
                <Toggle className="top-buttons" id="toggle-modal" isSpotify={true} toggle={showSpotify} />
                </>

                <br />

                <>
                <h2>Custom Modal</h2>

                <br />
                
                <p>You can customize, or randomize, your own parameters to make the chorus.</p>
                </>

                <br /><br />

                <Parameters />
                
            </div>
        </div>
    );
}