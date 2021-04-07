import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function EmotionIntensity(props) {    
    const previusStep = 'emotion'
    let nextStep = props.emotionIntensity <= 70 ? 'factCheck' : 'distressTolerance'

    if (props.currentStep !== 'emotionIntensity') {
        return null
    }
    return (
        <div className="form-group">
            <label htmlFor="emotionIntensity">On a scale of 1-100, how strong were the emotions?</label>
            <div className="input-group">
                <input 
                    type='range' 
                    name="emotionIntensity" 
                    value={props.emotionIntensity}
                    onChange={e => props.setEmotionIntensity(e.target.value)}
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