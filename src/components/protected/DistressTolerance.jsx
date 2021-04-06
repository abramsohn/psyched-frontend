import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function DistressTolerance(props) {
    const previusStep = 'emotionIntensity'
    const nextStep = null


    if (props.currentStep !== 'distressTolerance') {
        return null
    }

    return (
        <div className="form-group">
            <div className="custom-select">
                <fieldset>
                    <legend>What is Your Favorite Pet?</legend>
                    <input type="radio" name="DistressSkill" value="distract" />distract
                    <input type="radio" name="DistressSkill" value="selfSoothe" />Self Soothe
                    <input type="radio" name="DistressSkill" value="TIPP" />TIPP
                    <input type="radio" name="DistressSkill" value="prosCons" />Pros/Cons
                    <input type="radio" name="DistressSkill" value="IMPROVE" />IMPROVE
                </fieldset>
            </div>
            {/* <div className="form-nav"> */}
                <FormNavigation
                    setCurrentStep={props.setCurrentStep}
                    nextStep={nextStep}
                    previusStep={previusStep}
                />
            {/* </div> */}
        </div>

    )
}


export default DistressTolerance