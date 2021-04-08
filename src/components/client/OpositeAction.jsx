import React from 'react'
import Anger from './OpositeAction/Anger.jsx'
import Disgust from './OpositeAction/Disgust.jsx'
import Envy from './OpositeAction/Envy.jsx'
import Fear from './OpositeAction/Fear.jsx'
import Guilt from './OpositeAction/Guilt.jsx'
import Jealousy from './OpositeAction/Jealousy.jsx'
import Love from './OpositeAction/Love.jsx'
import Sadness from './OpositeAction/Sadness.jsx'
import Shame from './OpositeAction/Shame.jsx'
import FormNavigation from './FormNavigation.jsx'

function OpositeAction(props) {
    const previusStep = 'factCheck'
    const nextStep = null
    
    if (props.currentStep !== 'opositeAction') {
        return null
    }

    return (
        <>
            <h2>let&apos;s try opposite action:</ h2 >

            <h4>Opposite Actions for {props.emotion}</h4>

            <Anger emotion={props.emotion} />
            <Disgust emotion={props.emotion} />
            <Envy emotion={props.emotion} />
            <Fear emotion={props.emotion} />
            <Guilt emotion={props.emotion} />
            <Jealousy emotion={props.emotion} />
            <Love emotion={props.emotion} />
            <Sadness emotion={props.emotion} />
            <Shame emotion={props.emotion} />

            <h4>Do you feel like it worked?</h4>
            
            <div className="form-group radio-buttons">  
                <input 
                    type="radio" 
                    name="checkFacts"
                    id='factCheckYes'
                    value='yes'
                    checked={props.opositeAction === 'yes'}
                    onChange={e => props.setOpositeAction(e.target.value)}
                    />
                    <label className="radio-button-label green"htmlFor="factCheckYes">Yes</label>
                
                <input
                    type="radio" 
                    name="checkFacts"
                    id='factCheckNo'
                    value='no'
                    checked={props.opositeAction === 'no'}
                    onChange={e => props.setOpositeAction(e.target.value)}
                />
                <label className="radio-button-label red" htmlFor="factCheckNo">No</label>
            </div>
            {props.factCheck}
            <div className="form-nav">
                <FormNavigation
                    setCurrentStep={props.setCurrentStep}
                    nextStep={nextStep}
                    previusStep={previusStep}
                />
            </div>
        </>
    )
}


export default OpositeAction