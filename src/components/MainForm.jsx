import React, { Component } from 'react'
import StepOne from './StepOne.jsx'
import StepTwo from './StepTwo.jsx'
import StepThree from './StepThree.jsx'

class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            stepOne: '',
            stepTwo: '',
            stepThree: '',
            
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
                <button type="button" onClick={this.stepBackward}>Back</button>
            )
        } else {
            return(
                <button type="button" disabled>Back</button>
            )
        }
    }

    get forwardButton() {
        let currentStep = this.state.currentStep;
        // console.log(currentStep)
        if (currentStep < 3) {
            // console.log('returning', currentStep)
            return (
                // <button type="button" onClick={this.stepForward}>Continue</button>
                <button type="button" onClick={this.stepForward}>➜</button>
                )
            } else {
                return(
                    // <button type="button" disabled>Continue</button>
                    <button type="button" onClick={ () => {console.log('submitting')} }>✓</button>
                // null
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <form id="main-form" onSubmit={this.handleSubmit}>
                    <StepOne
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        forwardButton={this.forwardButton}
                        stepOne={this.state.stepOne}
                        />
                    <StepTwo
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        forwardButton={this.forwardButton}
                        stepTwo={this.state.stepTwo}
                        />
                    <StepThree
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        forwardButton={this.forwardButton}
                        stepThree={this.state.stepThree}
                    />
                <br />
                {/* {this.backButton} */}
                {/* {this.forwardButton} */}
                </form>
            </React.Fragment>
        )
    }

}

export default MainForm;