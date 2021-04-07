import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function Statement(props) {
    const previusStep = null
    const nextStep = 'emotion'

    if (props.currentStep !== 'statement') {
        return null
    }
    return (
        <div className="form-group">
            <label htmlFor="statement">Tell Me What Happened?</label>
            <div className="input-group">
                <textarea
                    type='text'
                    name="statement"
                    value={props.statement}
                    onChange={e => props.setStatement(e.target.value)}
                ></textarea>
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

export default Statement