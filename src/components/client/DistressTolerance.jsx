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
        <h2>Choose a Skill</h2>
            <div className="form-group radio-buttons">    
                <input
                    type="radio"
                    name="distressSkill"
                    id='distract'
                    value="distract"
                    checked={props.skill === 'distract'}
                    onChange={e => props.setSkill(e.target.value)}
                />
                <label className="radio-button-label blue"htmlFor="distract">Distract</label>
                 
                <input 
                    type="radio" 
                    name="distressSkill" 
                    id="selfSoothe" 
                    value="selfSoothe"
                    checked={props.skill === 'selfSoothe'}
                    onChange={e => props.setSkill(e.target.value)}
                />
                <label className="radio-button-label blue"htmlFor="selfSoothe">Self Soothe</label>
                <input 
                    type="radio" 
                    name="distressSkill" 
                    id="TIPP" 
                    value="TIPP"
                    checked={props.skill === 'TIPP'}
                    onChange={e => props.setSkill(e.target.value)}
                />
                <label className="radio-button-label blue"htmlFor="TIPP">TIPP</label>
                <input 
                    type="radio" 
                    name="distressSkill" 
                    id="prosCons" 
                    value="prosCons"
                    checked={props.skill === 'prosCons'}
                    onChange={e => props.setSkill(e.target.value)}
                />
                <label className="radio-button-label blue"htmlFor="prosCons">Pros/Cons</label>
                <input 
                    type="radio" 
                    name="distressSkill" 
                    id="IMPROVE" 
                    value="IMPROVE"
                    checked={props.skill === 'IMPROVE'}
                    onChange={e => props.setSkill(e.target.value)}
                />
                <label className="radio-button-label blue"htmlFor="IMPROVE">IMPROVE</label>
        
       
        
            {/* <div className="form-nav"> */}
                <FormNavigation
                    setCurrentStep={props.setCurrentStep}
                    nextStep={nextStep}
                    previusStep={previusStep}
                />
            {/* </div> */}
        </div>
        </>
    )
}


export default DistressTolerance