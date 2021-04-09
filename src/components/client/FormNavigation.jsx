import React from 'react'

function FormNavigation(props) {

    function NextButton() {
        // if (props.nextStep) {
            return (
                <button
                    id="button-next"
                    className="floatRight"
                    type="button"
                    onClick={() => props.setCurrentStep(props.nextStep)}>
                    &#62;
                </button>
            )
        // }
    }

    function BackButton() {
        // if (props.previusStep) {
            return(
                <button
                    id="button-back"
                    className="floatLeft"
                    type="button"
                    onClick={() => props.setCurrentStep(props.previusStep)}>
                    &#60;
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