import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function FactCheck(props) {
    const previusStep = 'emotionIntensity'
    let nextStep = props.factCheck === true ? 'opositeAction' : 'problemSolving'

    if (props.currentStep !== 'factCheck') {
        return null
    }
    return (
        <>
            <h3>OK, let`&apos;`s check the facts, here is what you wrote:</h3>
            <blockquote>{props.statment}</blockquote>
            which made you fell {props.emotion}
            
            
            <ol>
                <li>What are my interpretations, thoughts and assumptions about what happend?</li>
                <li>Am I assuming a threat?</li>
                <li>What`&apos;`s the catastrophe?</li>
                <li>Does my emotions and it`&apos;`s internsity fit theactual facts?</li>
            </ol>
            <div className="form-group">
                <div className="custom-select">
                    <fieldset>
                        <input type="radio" name="checkFacts" value='true' />Yes
                        <input type="radio" name="checkFacts" value='false' />No
                    </fieldset>
                </div>
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