import React,{ Component } from 'react'

class StepTwo extends Component {

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="stepTwo">What is Your Quest?</label>
                <div className="input-group">
                    <input 
                        type='text' 
                        name="stepTwo" 
                        value={this.props.stepTwo}
                        onChange={this.props.handleChange}
                    />
                     <div className="form-nav">{this.props.forwardButton}</div>
                </div>
            </div>
        )
    }
}

export default StepTwo