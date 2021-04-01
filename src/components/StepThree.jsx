import React,{ Component } from 'react'

class StepThree extends Component {

    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="stepThree">What is the Capital of Assyria</label>
                <div className="input-group">
                    <input 
                        type='text' 
                        name="stepThree" 
                        value={this.props.stepThree}
                        onChange={this.props.handleChange}
                    />
                     <div className="form-nav">{this.props.forwardButton}</div>
                </div>
            </div>
        )
    }
}

export default StepThree