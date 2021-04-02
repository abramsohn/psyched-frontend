import React,{ Component } from 'react'

class OpositeAction extends Component {

    render() {
        // if (this.props.currentStep !== 2) {
        if (this.props.currentStep !== 'opositeAction') {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="opositeAction">Oposite Action</label>
                <div className="input-group">
                    <input 
                        type='text' 
                        name="opositeAction" 
                        value={this.props.opositeAction}
                        onChange={this.props.handleChange}
                    />
                     <div className="form-nav">{this.props.forwardButton}</div>
                </div>
            </div>
        )
    }
}

export default OpositeAction