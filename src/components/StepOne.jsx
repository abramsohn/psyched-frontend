import React,{ Component } from 'react'

class StepOne extends Component {

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="stepOne">What is Your Name?</label>
                <div className="input-group">
                    <input
                        type='text'
                        name="stepOne"
                        value={this.props.stepOne}
                        onChange={this.props.handleChange}
                    />
                    <div className="form-nav">{this.props.forwardButton}</div>
                </div>
            </div>
        )
    }

}

export default StepOne