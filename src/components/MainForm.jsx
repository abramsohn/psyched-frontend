import React, { Component } from 'react'
import StepOne from './StepOne.jsx'
import StepTwo from './StepTwo.jsx'

class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.prventDefault();
    }

    stepForward = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({currentStep: currentStep})
    }

    stepBackward = () => {
        let currentStep = this.state.currentStep;
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({currentStep: currentStep})
    }

    get backButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button onClick={this.stepBackward}>Back</button>
            )
        } else {
            return null
        }
    }

    get forwardButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
            return (
                <button onClick={this.stepForward}>Continue</button>
            )
        } else {
            return null
        }
    }

    

    render() {
        return (
            <React.Fragment>
                <h1>Multistep Form</h1>
                Step {this.state.currentStep}
                
                <StepOne />
                <StepTwo />
                <br />
                {this.backButton}
                {this.forwardButton}
            </React.Fragment>
        )
    }

}

export default MainForm;