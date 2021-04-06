// import React,{ Component } from 'react'
import React from 'react'

function Statement(props) {
    // if (this.props.currentStep !== 'statment') {
        // return null
    // }
    // const [statement, setStatement] = useState('something')
    return (
        <div className="form-group">
            <label htmlFor="statement">Tell Me What Happened?</label>
            <div className="input-group">
                <input
                    type='text'
                    name="statement"
                    value={props.statement}
                    onChange={e => props.setStatement(e.target.value)}
                />
                {/* <div className="form-nav">{this.props.forwardButton}</div> */}
            </div>
        </div>
    )
}

export default Statement