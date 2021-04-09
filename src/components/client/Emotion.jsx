// import React,{ Component } from 'react'
import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function Emotion(props) {
    const previusStep = 'statement'
    const nextStep = 'emotionIntensity'

    const emotions = [ 'Anger', 'Disgust', 'Envy', 'Fear', 'Jealousy', 'Love', 'Sadness', 'Shame', 'Guilt' ]
    
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
                                    <option
                                        key={index}
                                        value={emotion}
                                        selected={emotion == props.emotion}
                                    >
                                        {emotion}
                                    </option>
                                    )
                                })
                            }
                    </select>
                </div>
                {/* <div className="form-nav"> */}
                {/* </div> */}
            </div>
            <FormNavigation
                setCurrentStep={props.setCurrentStep}
                nextStep={nextStep}
                previusStep={previusStep}
            />
        </>
    )
 
}

export default Emotion