import React, { useState } from "react";
import './Parameters.css';
import Tooltip from "../Tooltip/Tooltip";
import axios from "axios";
import 'font-awesome/css/font-awesome.min.css';
import diceImage from '../../images/dice.png';
import bugImage from '../../images/bug.png';
import Socials from "../Socials/Socials";

export default function Parameters({ showSpotify, showRestart }) {

    const [error , setError] = useState(false);

    //tempo

    const [tempo, setTempo] = useState(120);
    const [isTempoRandom, setIsTempoRandom] = useState(false);

    const handleTempoChange = (e) => {
        const newTempo = e.target.value;
        setTempo(newTempo);
        setResults(prevResults => ({ ...prevResults, tempo: newTempo }));
        setHasChanged(true);
    };
      
    const randomizeTempo = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/random-tempo');
        setTempo(response.data.tempo);
        setResults(prevResults => ({ ...prevResults, tempo: response.data.tempo }));
    } catch (error) {
        console.error("Error fetching random tempo:", error);
        setError(`Failed to fetch data: ${error.message}`);
    }
    };
    
    const handleRandomTempoButtonClick = () => {
        setIsTempoRandom(prevState => !prevState);
        if (!isTempoRandom) randomizeTempo();
        setHasChanged(true);
    };
      

    //key
    const [key, setKey] = useState("A");
    const [nsf, setNsf] = useState("");
    const [isKeyRandom, setIsKeyRandom] = useState(false);

    const handleKeyChange = (e) => {
        const newKey = e.target.value;
        setKey(newKey);
        setNsf("");
        setResults(prevResults => ({ ...prevResults, key: newKey + nsf }));
        setHasChanged(true);
    };

    const handleNsfChange = (e) => {
        const newNsf = e.target.value;
        setNsf(newNsf);
        setResults(prevResults => ({ ...prevResults, key: key + newNsf }));
        setHasChanged(true);
    };


    const handleRandomKeyButtonClick = () => {
        setIsKeyRandom(prevState => !prevState);

        if (!isKeyRandom) randomizeKey();
        setHasChanged(true);
    };



    const randomizeKey = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/random-key');
            setKey(response.data.key);
            setNsf(response.data.nsf);
            setResults(prevResults => ({ ...prevResults, key: response.data.key }));
        } catch (error) {
            console.error("Error fetching random tempo:", error);
            setError(`Failed to fetch data: ${error.message}`);
        }
    };



    //mode
    const [mode, setMode] = useState("Major");
    const [isModeRandom, setIsModeRandom] = useState(false);

    const handleModeChange = (e) => {
        const newMode = e.target.value;
        setMode(e.target.value);
        setResults(prevResults => ({ ...prevResults, mode: newMode }));
        setHasChanged(true);
    };


    const handleRandomModeButtonClick = () => {
        setIsModeRandom(prevState => !prevState);

        if (!isModeRandom) randomizeMode();
        setHasChanged(true);
    };

    const randomizeMode = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/random-mode');
            setMode(response.data.mode);
            setResults(prevResults => ({ ...prevResults, mode: response.data.mode }));
        } catch (error) {
            console.error("Error fetching random tempo:", error);
            setError(`Failed to fetch data: ${error.message}`);
        }
    };

    //time signature

    const [timeSignature, setTimeSignature] = useState("4/4");
    const [isTimeSignatureRandom, setIsTimeSignatureRandom] = useState(false);


    const handleTimeSignatureChange = (e) => {
        const newTimeSignature = e.target.value;
        setTimeSignature(newTimeSignature);
        setResults(prevResults => ({ ...prevResults, timeSignature: newTimeSignature}));
        setHasChanged(true);
    };



    const handleRandomTimeSignatureButtonClick = () => {
        setIsTimeSignatureRandom(prevState => !prevState);

    if (!isTimeSignatureRandom) randomizeTimeSignature();
        setHasChanged(true);
    };



    const randomizeTimeSignature = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/random-time-signature');
            setTimeSignature(response.data.timeSignature);
            setResults(prevResults => ({ ...prevResults, timeSignature: response.data.time_signature }));
        } catch (error) {
            console.error("Error fetching random time signature:", error);
            setError(`Failed to fetch data: ${error.message}`);
        }
    };

    //chord progression

    const [chordProgression, setChordProgression] = useState("");
    const [shouldRandomizeChordProgression, setShouldRandomizeChordProgression] = useState(false);


    const randomizeChordProgression = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/random-chord-progression?mode=${mode}`);
            setChordProgression(response.data.progression);
            setResults(prevResults => ({ ...prevResults, chordProgression: response.data.progression }));
        } catch (error) {
            console.error("Error fetching random progression:", error);
            setError(`Failed to fetch data: ${error.message}`);
        }
    };

    //randomize all

    const handleRandomizeAllButtonClick = () => {
        setIsTempoRandom(true);
        setIsModeRandom(true);
        setIsKeyRandom(true);
        setIsTimeSignatureRandom(true);
        randomizeTempo();
        randomizeMode();
        randomizeKey();
        randomizeTimeSignature();
        setShouldRandomizeChordProgression(true);
        setHasChanged(true);
    }
//
//    useEffect(() => {
//        if (shouldRandomizeChordProgression) {
//          randomizeChordProgression();
//          setShouldRandomizeChordProgression(false);
//        }
//      }, [shouldRandomizeChordProgression, mode]); // Depend on both the flag and the mami state

      //results

    const [results, setResults] = useState({
        tempo: 120,
        mami: 'Major',
        key: 'A',
        timeSignature: '4/4'
    });
    
    
    const [hasChanged, setHasChanged] = useState(false);
    
    const [showResults, setShowResults] = useState(false);
    
    const generateResults = async () => {
        await randomizeChordProgression();
        setShowResults(true);
    };




    return (
        <div>
            <div>

                <div className="row" id="tempo">
                    <div className="lefty">
                    <label>
                        Tempo: {tempo}
                    </label>
                    <Tooltip text="Tempo is the speed of the music. It is measured in beats per minute (BPM).">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                    </Tooltip>
                </div>
                    <div className="centering">
                        <div>40</div>&nbsp;
                        <input type= "range" min="40" max= "200" className="tempoSlider" value={tempo} onChange={(handleTempoChange)} disabled={isTempoRandom}/>
                        &nbsp;<div>200</div>
                    </div>
                    <div className="righty">
                        <label>
                            <input type="checkbox" checked={isTempoRandom} onChange={handleRandomTempoButtonClick} /> Random
                        </label>
                    </div>
                </div>

                <br />

                <div className="row" id="mode">
                    <div className="lefty">
                        <label>
                        <input type="radio"  value="Major" label="Major" onChange={handleModeChange} disabled={isModeRandom} name ="mode"/> Major
                        </label>
                        <label>
                        <input type="radio" value="Minor" label="Minor" onChange={handleModeChange} disabled={isModeRandom} name ="mode"/> Minor
                        </label>
                        <Tooltip text="This refers to the tonality of the music. Major keys tend to sound bright and cheerful, while minor keys tend to sound darker and sadder.">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                        </Tooltip>
                    </div>
                    <div className="centering" />
                    <div className='righty'>
                        <label>
                        <input type="checkbox" checked={isModeRandom} onChange={handleRandomModeButtonClick} /> Random
                        </label>
                    </div>
                </div>

                <br />

                <div className="row" id="key">
                    <div className="lefty">            
                        <label>
                            <select value={key} onChange={handleKeyChange} disabled={isKeyRandom} name="letter">
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                            </select>
                            <select onChange={handleNsfChange} disabled={isKeyRandom} >
                                <option value=" "> </option>
                                <option value="b">b</option>
                                <option value="#">#</option>
                            </select>
                        </label>
                        <Tooltip text="The key of a piece of music determines the scale that the music is based on. It is denoted by a letter and a modifier (e.g., A# or Bb).">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                        </Tooltip>
                    </div>
                    <div className="centering"></div>
                    <div className="righty">
                        <label>
                            <input type="checkbox" checked={isKeyRandom} onChange={handleRandomKeyButtonClick} /> Random
                        </label>
                    </div>
                </div>
                
                <br />

                <div className='row' id='timesig'>
                    <div className='lefty'>
                        <label>          
                        <select value={timeSignature} onChange={handleTimeSignatureChange} disabled={isTimeSignatureRandom}>
                            <option value="4/4">4/4</option>
                            <option value="3/4">3/4</option>
                            <option value="5/4">5/4</option>
                            <option value="6/8">6/8</option>
                            <option value="7/8">7/8</option>
                        </select>
                        </label>
                        <Tooltip text="The time signature defines how the beats are grouped in a measure. For example, a 4/4 time signature means there are 4 beats in a measure, and each beat is a quarter note.">
                        <i className="fa fa-info-circle" aria-hidden="true"></i>
                        </Tooltip>
                    </div>
                    <div className="centering" />
                    <div className='righty'>
                        <label>
                        <input type="checkbox" checked={isTimeSignatureRandom} onChange={handleRandomTimeSignatureButtonClick} /> Random
                        </label>
                    </div>
                </div>

                <br />

                <div className="row" id ="chord-progression">
                    <div className="lefty">Chord Progression</div>
                    <div className="centering"></div>
                    <div className="righty">
                    <label>
                        <input type="checkbox" checked={isTimeSignatureRandom} onChange={handleRandomTimeSignatureButtonClick} /> Random
                    </label>
                    </div>
                </div>

                <br />

                <div className="row" id="go-squad">
                    <div className="lefty">
                        {hasChanged && <button onClick={generateResults} className="icon">
                            Generate
                        </button>}
                    </div>
                    <div className="centering" />
                    <div className="righty">
                    <a href="https://forms.gle/o4hrQc3SCUDwnh3Q6" target='.blank' rel='noopener noreferrer'>
                        <button>
                            <img src={bugImage} alt="Report Bug" className='icon' />
                        </button>
                    </a>
                    <button onClick={handleRandomizeAllButtonClick} ><img src={diceImage} alt="Randomize All" className="icon" /></button>
                    </div>
                </div>

                <br />

                <Socials />
                
            </div>
        </div>
    );
}