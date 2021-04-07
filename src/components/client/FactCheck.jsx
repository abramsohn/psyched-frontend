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
            <p>OK, let&apos;s check the facts, here is what you wrote:<br />
            <blockquote>{props.statement}</blockquote><br />
            which made you feel {props.emotion}<br />
            
            Now, ask yourself the following questions:
            </p>
            <ol>
                <li>What are my interpretations, thoughts and assumptions about what happend?</li>
                <li>Does my emotion and its intensity fit the actual facts?</li>
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