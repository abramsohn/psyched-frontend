import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function FactCheck(props) {
    const previusStep = 'emotionIntensity'
    let nextStep = props.factCheck === 'yes' ? 'problemSolving' : 'opositeAction'

    if (props.currentStep !== 'factCheck') {
        return null
    }

    return (
        <>
            <h3>OK, let&apos;s check the facts</h3>
            <p>You are feeling {props.emotion}. here is what you wrote:</p>
                <blockquote>{props.statement}</blockquote>
            
            
            <h4>Now, ask yourself the following questions:</h4>
            <ol>
                <li>What are my interpretations, thoughts and assumptions about what happend?</li>
                <li>Does my emotion and its intensity fit the actual facts?</li>
            </ol>
                <div className="form-group radio-buttons">  
                <input 
                    type="radio" 
                    name="checkFacts"
                    id='factCheckYes'
                    value='yes'
                    checked={props.factCheck === 'yes'}
                    onChange={e => props.setFactCheck(e.target.value)}
                    />
                    <label className="radio-button-label green"htmlFor="factCheckYes">Yes</label>
                
                <input
                    type="radio" 
                    name="checkFacts"
                    id='factCheckNo'
                    value='no'
                    checked={props.factCheck === 'no'}
                    onChange={e => props.setFactCheck(e.target.value)}
                />
                <label className="radio-button-label red" htmlFor="factCheckNo">No</label>
            </div>
            <div className="form-nav">
                <FormNavigation
                    setCurrentStep={props.setCurrentStep}
                    nextStep={nextStep}
                    previusStep={previusStep}
                />
            </div>
        </>
    )
}


export default FactCheck