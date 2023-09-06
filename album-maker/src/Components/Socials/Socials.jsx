import React, { useState } from "react";
import "../Modal/Modal.css";

export default function Socials({ show, children }) {

    return (
        <div className='socials-container'>

                    <hr />

                    <div className='centering2'>
                        Follow my socials!
                    </div>

                    <div className='centering2'>
                        <i className="fa fa-instagram fa-2x" aria-hidden="true" onClick={() => window.open('https://www.instagram.com/celsiaband')}></i>
                        &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-spotify fa-2x" aria-hidden="true" onClick={() => window.open('https://open.spotify.com/artist/6i6bTH79bnqSciILNX2eqi?si=AMNHHiP-SXyLhfjGtfJtgw')}></i>
                        &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-apple fa-2x" aria-hidden="true" onClick={() => window.open('https://music.apple.com/no/artist/celsia/1675114764')}></i>
                        &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-youtube-play fa-2x" aria-hidden="true" onClick={() => window.open('https://youtube.com/@HighAltarProductions?si=4gDlS4oqjMLwUDFN')}></i>
                        &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-soundcloud fa-2x" aria-hidden="true" onClick={() => window.open('https://soundcloud.com/bird-reaper-537514324')}></i>
                        {/*  <i className="fa fa-window-maximize fa-2x" aria-hidden="true" onClick={() => window.open('https://highaltar.')}></i>*/}
                    </div>
                    <div className='centering2'>
                        High Altar Productions
                    </div>
                </div>
    );
}