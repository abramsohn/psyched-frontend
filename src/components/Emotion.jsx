import React,{ Component } from 'react'

class Emotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emotions: [ 'anger', 'disgust', 'envy', 'fear', 'happiness', 'jealousy', 'love', 'sadness', 'shame', 'guilt' ],
            dropdownOpen: false,
            selection: '',
            
        }
    }

    toggleSelection = () => {
        this.setState({dropdownOpen: true})
    }

    render() {
        // if (this.props.currentStep !== 2) {
        if (this.props.currentStep !== 'emotion') {
            return null
        }
        return (
            <React.Fragment>
            <div className="form-group">
                <label htmlFor="emotion">How did it make you feel?</label>
                <div className="input-group">
                    <input 
                        type='text' 
                        name="emotion" 
                        value={this.props.emotion}
                        onChange={this.props.handleChange}
                    />
                     <div className="form-nav">{this.props.forwardButton}</div>
                </div>
                <div className="input-group">
                        <select onClick={this.toggleSelection}>
                            <option value="">Choose the closest one:</option>
                            {this.state.emotions.map( (emotion, index) => {
                                return (
                                        <option key={index} value={emotion}>{emotion}</option>
                                     )
                                })
                            }
                    </select>
                </div>
            </div >
            </React.Fragment>
        )
    }
}

export default Emotion