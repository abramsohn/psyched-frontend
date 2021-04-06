// import React,{ Component } from 'react'
import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function Emotion(props) {
    const previusStep = 'statement'
    const nextStep = 'emotionIntensity'

    const emotions = [ 'anger', 'disgust', 'envy', 'fear', 'happiness', 'jealousy', 'love', 'sadness', 'shame', 'guilt' ]
    
    if (props.currentStep !== 'emotion') {
        return null
    }
    return (
        <>
            <div className="form-group">
                <label htmlFor="emotion">How did it make you feel?</label>
                <div className="input-group">
                        <select
                            onChange={e => props.setEmotion(e.target.value)}
                            onBlur={e => props.setEmotion(e.target.value)}
                            >
                            <option value="">Choose the closest one:</option>
                            {emotions.map( (emotion, index) => {
                                return (
                                    <option key={index} value={emotion}>{emotion}</option>
                                    )
                                })
                            }
                    </select>
                </div>
                {/* <div className="form-nav"> */}
                    <FormNavigation
                        setCurrentStep={props.setCurrentStep}
                        nextStep={nextStep}
                        previusStep={previusStep}
                    />
                {/* </div> */}
            </div>
        </>
    )
 
}

export default Emotion