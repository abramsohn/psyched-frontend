import React,{ Component } from 'react'

class StepTwo extends Component {

    render() {
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <div>
                This is step two
            </div>
        )
    }
}

export default StepTwo