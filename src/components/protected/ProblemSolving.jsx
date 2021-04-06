import React from 'react'

function ProblemSolving(props) {
    // if (this.props.currentStep !== 'problemSolving') {
        // return null
    // }
    return (
        <div className="form-group">
            <label htmlFor="problemSolving">Problem Solving</label>
            <div className="input-group">
                <input 
                    type='text' 
                    name="problemSolving" 
                    value={props.problemSolving}
                    onChange={e => props.setProblemSolving(e.target.value)}
                />
                    {/* <div className="form-nav">{props.forwardButton}</div> */}
            </div>
        </div>
    )
}

export default ProblemSolving