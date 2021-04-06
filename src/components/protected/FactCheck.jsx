import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function FactCheck(props) {
    const previusStep = 'emotionIntensity'
    let nextStep = props.factCheck === true ? 'opositeAction' : 'problemSolving'

    if (props.currentStep !== 'factCheck') {
        return null
    }
    return (
        <div className="form-group">
            <label htmlFor="factCheck">Let&apos;s check the facts:</label>
            <div className="input-group">
                <input 
                    type='text' 
                    name="factCheck" 
                    value={props.factCheck}
                    onChange={e => props.setFactCheck(e.target.value)}
                />
                <div className="form-nav">
                    <FormNavigation
                        setCurrentStep={props.setCurrentStep}
                        nextStep={nextStep}
                        previusStep={previusStep}
                    />
                </div>
            </div>
        </div>
    )
}


export default FactCheck