import React, { Component } from 'react'
import Navigation from './Navigation.jsx' 
import Statement from './Statement.jsx' 
import Emotion from './Emotion.jsx' 
import EmotionIntensity from './EmotionIntensity.jsx' 
import FactCheck from './FactCheck.jsx' 
import DistressTolerance from './DistressTolerance.jsx' 
import ProblemSolving from './ProblemSolving.jsx' 
import OpositeAction from './OpositeAction.jsx' 

class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 'statment',
            statement: '',
            emotion: '',
            emotionIntensity: '',
            factCheck: '',
            distressTolerance: '',
            
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
        // currentStep = currentStep >= 2 ? 3 : currentStep + 1
        switch (currentStep) {
            case 'statment':
                currentStep = 'emotion'
                break;
            case 'emotion':
                currentStep = 'emotionIntensity'
                break;
            case 'emotionIntensity':
                if (this.state.emotionIntensity >= 70) {
                    currentStep = 'distressTolerance'
                } else {
                    currentStep = 'factCheck'
                }
                break;
            case 'factCheck':
                if (this.state.factCheck) {
                    currentStep = 'problemSolving'
                } else {
                    currentStep = 'opositeAction'
                }
                break;
            default:
                break;
        }
        this.setState({currentStep: currentStep})
    }

    get forwardButton() {
        let currentStep = this.state.currentStep;
        // console.log(currentStep)
        if (currentStep !== 'end') {
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

    // stepBackward = () => {
        // let currentStep = this.state.currentStep;
        // currentStep = currentStep <= 1 ? 1 : currentStep - 1
        // this.setState({currentStep: currentStep})
    // }

    // get backButton() {
        // let currentStep = this.state.currentStep;
        // if (currentStep !== 1) {
            // return (
                // <button type="button" onClick={this.stepBackward}>Back</button>
            // )
        // } else {
            // return(
                // <button type="button" disabled>Back</button>
            // )
        // }
    // }

    render() {
        return (
            <>
                <Navigation setUser={this.props.setUser} />
                <form id="main-form" onSubmit={this.handleSubmit}>
                    <div className="main-form-container">
                        <Statement
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            forwardButton={this.forwardButton}
                            Statement={this.state.Statement}
                            />
                        <Emotion
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            forwardButton={this.forwardButton}
                            emotion={this.state.emotion}
                            />
                        <EmotionIntensity
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            forwardButton={this.forwardButton}
                            emotionIntensity={this.state.emotionIntensity}
                        />
                        <FactCheck
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            forwardButton={this.forwardButton}
                            factCheck={this.state.factCheck}
                        />
                        <DistressTolerance
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            forwardButton={this.forwardButton}
                            distressTolerance={this.state.distressTolerance}
                        />
                        <OpositeAction
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            forwardButton={this.forwardButton}
                            opositeAction={this.state.opositeAction}
                        />
                        <ProblemSolving
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            forwardButton={this.forwardButton}
                            problemSolving={this.state.problemSolving}
                        />
                            {/* {this.backButton} */}
                            {/* {this.forwardButton} */}
                    </div>
                </form>
            </>
        )
    }

}

export default MainForm;