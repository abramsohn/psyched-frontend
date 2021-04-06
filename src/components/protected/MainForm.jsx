// import React, { Component } from 'react'
import React, { useState } from 'react'
// import Navigation from './Navigation.jsx' 
import Statement from './Statement.jsx' 
import Emotion from './Emotion.jsx' 
import EmotionIntensity from './EmotionIntensity.jsx' 
import FactCheck from './FactCheck.jsx' 
import DistressTolerance from './DistressTolerance.jsx' 
import OpositeAction from './OpositeAction.jsx' 
import ProblemSolving from './ProblemSolving.jsx' 


const MainForm = () => {
    // const [currentStep, setCurrentStep] = useState('statment')
    const [statement, setStatement] = useState('somethingElse')
    const [emotion, setEmotion] = useState('')
    const [emotionIntensity, setEmotionIntensity] = useState('')
    const [factCheck, setFactCheck] = useState('')
    // const [distressTolerance, setDistressTolerance] = useState('')
    const [opositeAction, setOpositeAction] = useState('')
    const [problemSolving, setProblemSolving] = useState('')
    
    // function changeStatment(event) {
        // const { value } = event.target;
        // setStatement(value);
    // }

    return (
        <>
            <form id="main-form" onSubmit={ () => console.log('click')}>
                <div className="main-form-container">
                    <Statement
                        // currentStep={currentStep}
                        // setCurrentStep={setCurrentStep}
                        // forwardButton={this.forwardButton}
                        statement={statement}
                        setStatement={setStatement}
                    />
                     <Emotion
                        // currentStep={this.state.currentStep}
                        // handleChange={this.handleChange}
                        // forwardButton={this.forwardButton}
                        emotion={emotion}
                        setEmotion={setEmotion}
                    /> 
                    <EmotionIntensity
                        // currentStep={this.state.currentStep}
                        // handleChange={this.handleChange}
                        // forwardButton={this.forwardButton}
                        emotionIntensity={emotionIntensity}
                        setEmotionIntensity={setEmotionIntensity}
                    />
                    <FactCheck
                        // currentStep={this.state.currentStep}
                        // handleChange={this.handleChange}
                        // forwardButton={this.forwardButton}
                        factCheck={factCheck}
                        setFactCheck={setFactCheck}
                    />
                    <DistressTolerance
                        // currentStep={this.state.currentStep}
                        // handleChange={this.handleChange}
                        // forwardButton={this.forwardButton}
                        // distressTolerance={this.state.distressTolerance}
                        />
                    <OpositeAction
                        // currentStep={this.state.currentStep}
                        // handleChange={this.handleChange}
                        // forwardButton={this.forwardButton}
                        opositeAction={opositeAction}
                        setOpositeAction={setOpositeAction}
                        />
                         
                    <ProblemSolving
                        // currentStep={this.state.currentStep}
                        // handleChange={this.handleChange}
                        // forwardButton={this.forwardButton}
                        problemSolving={problemSolving}
                        setProblemSolving={setProblemSolving}
                    />
                    {/* {this.backButton}
                    {this.forwardButton}  */}
                </div>
            </form>
        </>
    )
}


export default MainForm;