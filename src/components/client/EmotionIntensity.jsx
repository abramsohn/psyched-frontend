import React, { useState, useEffect } from 'react'
import FormNavigation from './FormNavigation.jsx'

function EmotionIntensity(props) {
    const [trackColor, setTrackColor] = useState('');

    
    const previusStep = 'emotion'
    let nextStep = props.emotionIntensity <= 70 ? 'factCheck' : 'distressTolerance';

    
    useEffect(() => {
        const range = document.querySelector('#range');
        if (trackColor) {
            range.classList.remove(...range.classList);
            range.classList.add(trackColor)
        }
        // range.classList.add(trackColor)
    },[trackColor])
    // const [trackColor, setTrackColor] = useState('rgb(245, 245, 245');
    
    if (props.currentStep !== 'emotionIntensity') { return null };
    
    function handleChange(e) {
        const value = e.target.value
        let color;
        
        props.setEmotionIntensity(value);
        
        if (value >= 0 && value < 30) { color = 'green' }
        else if (value >= 30 && value < 70) { color = 'yellow' }
        else { color = 'red' }
       
        setTrackColor(color)
    }

    return (
        <div className="form-group">
            <label htmlFor="emotionIntensity">On a scale of 1-100, how strong were the emotions?</label>
            <div className="input-group">                
                <input 
                    type='range' 
                    name="emotionIntensity"
                    id='range'
                    min="0"
                    max="100"
                    step="1"
                    value={props.emotionIntensity}
                    onChange={handleChange}
                />
                {/* <div className="form-nav"> */}
                    <FormNavigation
                        setCurrentStep={props.setCurrentStep}
                        nextStep={nextStep}
                        previusStep={previusStep}
                    />
                {/* </div> */}
            </div>
        </div>
    )
}


export default EmotionIntensity