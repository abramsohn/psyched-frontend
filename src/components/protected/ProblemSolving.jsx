import React,{ Component } from 'react'

class ProblemSolving extends Component {

    render() {
        // if (this.props.currentStep !== 2) {
        if (this.props.currentStep !== 'problemSolving') {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="problemSolving">Problem Solving</label>
                <div className="input-group">
                    <input 
                        type='text' 
                        name="problemSolving" 
                        value={this.props.problemSolving}
                        onChange={this.props.handleChange}
                    />
                     <div className="form-nav">{this.props.forwardButton}</div>
                </div>
            </div>
        )
    }
}

export default ProblemSolving