import React from 'react'

function OpositeAction(props) {
    // if (this.props.currentStep !== 'opositeAction') {
    //     return null
    // }
    return (
        <div className="form-group">
            <label htmlFor="opositeAction">Oposite Action</label>
            <div className="input-group">
                <input 
                    type='text' 
                    name="opositeAction" 
                    value={props.opositeAction}
                    onChange={e => props.setOpositeAction(e.target.value)}
                />
                    {/* <div className="form-nav">{this.props.forwardButton}</div> */}
            </div>
        </div>
    )
}


export default OpositeAction