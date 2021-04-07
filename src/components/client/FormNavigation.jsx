import React from 'react'

function FormNavigation(props) {

    function NextButton() {
        // if (props.nextStep) {
            return (
                <button
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
                    type="button"
                    onClick={() => props.setCurrentStep(props.previusStep)}>
                    Back
                </button>
            )
        // }
    }

    return (
        <>
            {props.nextStep ? <NextButton /> : null}
            {props.previusStep ? <BackButton /> : null}
             
        </>
    )
}

export default FormNavigation