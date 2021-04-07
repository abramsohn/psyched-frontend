import React from 'react'
import FormNavigation from './FormNavigation.jsx'

function OpositeAction(props) {
    const previusStep = 'factCheck'
    const nextStep = null
    
    if (props.currentStep !== 'opositeAction') {
        return null
    }

    return (
        <>
            <p>let&apos;s try opposite action:<br />
                
                    
            </p>
            <div className="form-group">
                <label htmlFor="opositeAction">Oposite Action</label>
                <div className="input-group">
                    <input 
                        type='text' 
                        name="opositeAction" 
                        value={props.opositeAction}
                        onChange={e => props.setOpositeAction(e.target.value)}
                    />
                    {/* <div className="form-nav"> */}
                        <FormNavigation
                            setCurrentStep={props.setCurrentStep}
                            nextStep={nextStep}
                            previusStep={previusStep}
                        />
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}


export default OpositeAction