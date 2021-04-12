import React from 'react'
// import FormNavigation from './FormNavigation.jsx'

function ProblemSolving(props) {
    // const previusStep = 'factCheck'
    // const nextStep = null

    if (props.currentStep !== 'problemSolving') {
        return null
    }

    // function handleChange(e) {
    //     props.setProblemSolving(e.target.value)
    //     props.submitForm()
    // }

    return (
        <>
            <h2>Ok, so let&apos;s do some problem solving:</h2>
             
            <ul>
                <li>First thing, identify your goal</li>
                <li>Next, brainstorm a lot of ideas, as many as you can come up with</li>
                <li>Choose one or two solutions that you think will fit the goal <strong>and is likely to work</strong></li>
                <li>Put the solution into action</li>
                <li>Evaluate you result, did it work? If not, try a diffrent solution</li>
            </ul>
             
            {/* <h4>Do you feel like it worked?</h4> */}
            
        {/* <div className="form-group radio-buttons">  
                <input 
                    type="radio" 
                    name="checkFacts"
                    id='factCheckYes'
                    value='yes'
                    checked={props.problemSolving === 'yes'}
                    // onChange={e => props.setProblemSolving(e.target.value)}
                    onChange={handleChange}
                    />
                    <label className="radio-button-label green"htmlFor="factCheckYes">Yes</label>
                
                <input
                    type="radio" 
                    name="checkFacts"
                    id='factCheckNo'
                    value='no'
                    checked={props.problemSolving === 'no'}
                    // onChange={e => props.setProblemSolving(e.target.value)}
                    onChange={handleChange}
                />
                <label className="radio-button-label red" htmlFor="factCheckNo">No</label>
            </div>
            {props.factCheck}
            <div className="form-nav">
                <FormNavigation
                    setCurrentStep={props.setCurrentStep}
                    nextStep={nextStep}
                    previusStep={previusStep}
                />
            </div> */}
        </>
    )
}

export default ProblemSolving