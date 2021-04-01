import React,{ Component } from 'react'

class StepOne extends Component {

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }
        return (
            <div>
                This is step one
            </div>
        )
    }

}

export default StepOne