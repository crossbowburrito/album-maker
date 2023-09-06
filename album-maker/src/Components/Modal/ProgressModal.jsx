import React, { useState } from "react";
import "./Modal.css";

export default function RestartModal() {
    const [isVisible, setIsVisible] = useState(true);

    const confirmRestart = () => {
        // Refresh the page
        window.location.reload();
    }

    const cancel = () => {
        // Close the modal
        setIsVisible(false);
    }

    if (!isVisible) return null;

    
    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h2>Restart</h2>
                <p>Are you sure you want to restart?</p>
                <button onClick={confirmRestart} className="btn-modal">Yes</button>
                <button onClick={cancel} className="btn-modal">No</button>
            </div>
        </div>
    );
}
