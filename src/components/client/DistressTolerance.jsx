import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function DistressTolerance(props) {
    const previusStep = 'emotionIntensity'
    const nextStep = null


    if (props.currentStep !== 'distressTolerance') {
        return null
    }

    return (
        <>
        <h2>Here are a few skills that you can use in order to reduce the emotion intensity, lets chose one:</h2>
            <div className="form-group radio-buttons-list">    
                <input
                    type="radio"
                    name="distressSkill"
                    id='distract'
                    value="distract"
                    checked={props.skill === 'distract'}
                    onChange={e => props.setSkill(e.target.value)}
                />
                <label className="radio-button-label blue" htmlFor="distract">
                    <h4>Distract</h4><p>This is the description</p>
                </label>
                 
                <input 
                    type="radio" 
                    name="distressSkill" 
                    id="selfSoothe" 
                    value="selfSoothe"
                    checked={props.skill === 'selfSoothe'}
                    onChange={e => props.setSkill(e.target.value)}
                />
                <label className="radio-button-label blue" htmlFor="selfSoothe">
                    <h4>Self Soothe</h4><p>This is the description</p>
                    </label>
                <input 
                    type="radio" 
                    name="distressSkill" 
                    id="TIPP" 
                    value="TIPP"
                    checked={props.skill === 'TIPP'}
                    onChange={e => props.setSkill(e.target.value)}
                />
                <label className="radio-button-label blue" htmlFor="TIPP">
                    <h4>TIPP</h4><p>This is the description</p>
                </label>
                <input 
                    type="radio" 
                    name="distressSkill" 
                    id="prosCons" 
                    value="prosCons"
                    checked={props.skill === 'prosCons'}
                    onChange={e => props.setSkill(e.target.value)}
                />
                <label className="radio-button-label blue" htmlFor="prosCons">
                    <h4>Pros/Cons</h4><p>This is the description</p>
                </label>
                <input 
                    type="radio" 
                    name="distressSkill" 
                    id="IMPROVE" 
                    value="IMPROVE"
                    checked={props.skill === 'IMPROVE'}
                    onChange={e => props.setSkill(e.target.value)}
                />
                <label className="radio-button-label blue" htmlFor="IMPROVE">
                    <h4>IMPROVE</h4><p>This is the description</p>
                </label>
        
       
        
        </div>
            {/* <div className="form-nav"> */}
                <FormNavigation
                    setCurrentStep={props.setCurrentStep}
                    nextStep={nextStep}
                    previusStep={previusStep}
                />
            {/* </div> */}
        </>
    )
}


export default DistressTolerance