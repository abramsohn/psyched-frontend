import React from 'react'

function FormNavigation(props) {

    function NextButton() {
        // if (props.nextStep) {
            return (
                <button
                    className="floatRight"
                    type="button"
                    onClick={() => props.setCurrentStep(props.nextStep)}>
                    Continue
                </button>
            )
        // }
    }

    function BackButton() {
        // if (props.previusStep) {
            return(
                <button
                    className="floatLeft"
                    type="button"
                    onClick={() => props.setCurrentStep(props.previusStep)}>
                    Back
                </button>
            )
        // }
    }

    return (
        <nav className="form-navigation">
            {props.previusStep ? <BackButton /> : null}
            {props.nextStep ? <NextButton /> : null}   
        </nav>
    )
}

export default FormNavigation