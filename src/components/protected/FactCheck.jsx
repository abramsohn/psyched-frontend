import React from 'react'

function FactCheck(props) {

        // if (this.props.currentStep !== 'factCheck') {
            // return null
        // }
    return (
        <div className="form-group">
            <label htmlFor="factCheck">Let&apos;s check the facts:</label>
            <div className="input-group">
                <input 
                    type='text' 
                    name="factCheck" 
                    value={props.factCheck}
                    onChange={e => props.setFactCheck(e.target.value)}
                />
                    {/* <div className="form-nav">{this.props.forwardButton}</div> */}
            </div>
        </div>
    )
}


export default FactCheck