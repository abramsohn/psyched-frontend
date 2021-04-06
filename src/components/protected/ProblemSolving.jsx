import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function ProblemSolving(props) {
    const previusStep = 'factCheck'
    const nextStep = null

    if (props.currentStep !== 'problemSolving') {
        return null
    }
    return (
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
    )
}

export default ProblemSolving