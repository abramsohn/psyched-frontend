import React,{ Component } from 'react'

class StepThree extends Component {

    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <div>
                This is step two
            </div>
        )
    }
}

export default StepThree