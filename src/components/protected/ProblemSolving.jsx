import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function ProblemSolving(props) {
    const previusStep = 'factCheck'
    const nextStep = null

    if (props.currentStep !== 'problemSolving') {
        return null
    }
    return (
        <>
            <p>Ok, so let`&apos;`s do some problem solving:
             
            <ul>
                <li>First thing, identify your goel in solving problem</li>
                <li>Next, brainstirm a lot of ideas, as many as you can come up with</li>
                <li>Choose one or two solutions that you think will fit the goal <strong>and is likely to work</strong></li>
                <li>Put the solution into action</li>
                <li>Evaluate you result, did it work? If not, try a diffrent solution</li>
            </ul>
             
            </p>
        <div className="form-group">
            <label htmlFor="problemSolving">Problem Solving</label>
            <div className="input-group">
                <input 
                    type='text' 
                    name="problemSolving" 
                    value={props.problemSolving}
                    onChange={e => props.setProblemSolving(e.target.value)}
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
        </>
    )
}

export default ProblemSolving