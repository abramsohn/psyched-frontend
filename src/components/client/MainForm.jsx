import React, { useState, useEffect } from 'react'
import Statement from './Statement.jsx' 
import Emotion from './Emotion.jsx' 
import EmotionIntensity from './EmotionIntensity.jsx' 
import FactCheck from './FactCheck.jsx' 
import DistressTolerance from './DistressTolerance.jsx' 
import OpositeAction from './OpositeAction.jsx' 
import ProblemSolving from './ProblemSolving.jsx' 
import baseUrl from '../../helpers/baseUrl.js' 

const MainForm = () => {

    const [currentStep, setCurrentStep] = useState('statement')
    const [statement, setStatement] = useState('')
    const [emotion, setEmotion] = useState('')
    const [emotionIntensity, setEmotionIntensity] = useState('')
    const [factCheck, setFactCheck] = useState('')
    const [skill, setSkill] = useState('')
    const [opositeAction, setOpositeAction] = useState('')
    const [problemSolving, setProblemSolving] = useState('')

    useEffect(() => {
        submitForm();
    }, [problemSolving, opositeAction, skill]);

    function submitForm() {
        fetch(`${baseUrl}/distress-events`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                description: statement,
                emotion: emotion,
                emotionIntensity: Number(emotionIntensity),
                factCheck: factCheck,
                skill: skill,
                opositeAction: opositeAction,
                problemSolving: problemSolving,
            }),
            headers: { 'Content-Type': 'application/json' },
        })
    }

    return (
        <>
            <form id="main-form">
                {baseUrl}
                <div className="main-form-container">
                    <Statement
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        statement={statement}
                        setStatement={setStatement}
                    />
                     <Emotion
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        emotion={emotion}
                        setEmotion={setEmotion}
                    /> 
                    <EmotionIntensity
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        emotionIntensity={emotionIntensity}
                        setEmotionIntensity={setEmotionIntensity}
                    />
                    <FactCheck
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        statement={statement}
                        emotion={emotion}
                        factCheck={factCheck}
                        setFactCheck={setFactCheck}
                    />
                    <DistressTolerance
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        skill={skill}
                        setSkill={setSkill}
                        setFactCheck={setFactCheck}
                        />
                    <OpositeAction
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        emotion={emotion}
                        opositeAction={opositeAction}
                        setOpositeAction={setOpositeAction}
                        />
                         
                    <ProblemSolving
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        problemSolving={problemSolving}
                        setProblemSolving={setProblemSolving}
                    />
                </div>
            </form>
        </>
    )
}


export default MainForm;