import React,{ Component } from 'react'

class FactCheck extends Component {

    render() {
        // if (this.props.currentStep !== 4) {
        if (this.props.currentStep !== 'factCheck') {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="factCheck">Let&apos;s check the facts:</label>
                <div className="input-group">
                    <input 
                        type='text' 
                        name="factCheck" 
                        value={this.props.factCheck}
                        onChange={this.props.handleChange}
                    />
                     <div className="form-nav">{this.props.forwardButton}</div>
                </div>
            </div>
        )
    }
}

export default FactCheck