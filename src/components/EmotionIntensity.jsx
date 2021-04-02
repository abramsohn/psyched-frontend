import React,{ Component } from 'react'

class EmotionIntensity extends Component {

    render() {
        // if (this.props.currentStep !== 3) {
        if (this.props.currentStep !== 'emotionIntensity') {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="emotionIntensity">On a scale of 1-100, how strong were the emotions?</label>
                <div className="input-group">
                    <input 
                        type='range' 
                        name="emotionIntensity" 
                        value={this.props.emotionIntensity}
                        onChange={this.props.handleChange}
                    />
                     <div className="form-nav">{this.props.forwardButton}</div>
                </div>
            </div>
        )
    }
}

export default EmotionIntensity