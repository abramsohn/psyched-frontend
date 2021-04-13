import React, { useState, useEffect, useRef } from 'react'
import baseUrl from '../../helpers/baseUrl.js' 
import Statement from './Statement.jsx'
import Emotion from './Emotion.jsx' 
import EmotionIntensity from './EmotionIntensity.jsx' 
import FactCheck from './FactCheck.jsx' 
import DistressTolerance from './DistressTolerance.jsx' 
import OpositeAction from './OpositeAction.jsx' 
import ProblemSolving from './ProblemSolving.jsx' 
//Skills
import Distract from './Skills/Distract.jsx'
import IMPROVE from './Skills/IMPROVE.jsx'
import SelfSooth from './Skills/SelfSoothe.jsx'
import TIPP from './Skills/TIPP.jsx'

const MainForm = () => {

    const [currentStep, setCurrentStep] = useState('statement')
    const [statement, setStatement] = useState('')
    const [emotion, setEmotion] = useState('')
    const [emotionIntensity, setEmotionIntensity] = useState('')
    const [factCheck, setFactCheck] = useState('')
    const [skill, setSkill] = useState('')
    const [opositeAction, setOpositeAction] = useState('')
    const [problemSolving, setProblemSolving] = useState('')

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            console.log('submitting')
            submitForm();
        }
    }, [factCheck, skill]);

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
                        submitForm={submitForm}

                    />
                    <DistressTolerance
                        currentStep={currentStep}
                        setCurrentStep={setCurrentStep}
                        skill={skill}
                        setSkill={setSkill}
                        setFactCheck={setFactCheck}
                        submitForm={submitForm}
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

                     <Distract currentStep={currentStep}/>
                     <IMPROVE currentStep={currentStep}/>
                     <SelfSooth currentStep={currentStep}/>
                     <TIPP currentStep={currentStep}/>
                </div>
            </form>
        </>
    )
}


export default MainForm;