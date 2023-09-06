import React, { useState } from "react";
import "./toggle.css";

export default function Toggle({ isSpotify, toggle }) {
    const [isChecked, setIsChecked] = useState(isSpotify);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        toggle();
    };

    return (
        <>
            <label className="toggle">
                <input type="checkbox" checked={isChecked} onChange={handleToggle}></input>
                <span className="slider" />
            </label>
        </>
    );
}
