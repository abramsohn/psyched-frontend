// import React,{ Component } from 'react'
import React from 'react'

function Emotion(props) {
    const emotions = [ 'anger', 'disgust', 'envy', 'fear', 'happiness', 'jealousy', 'love', 'sadness', 'shame', 'guilt' ]
            
    return (
        <>
        <div className="form-group">
            <label htmlFor="emotion">How did it make you feel?</label>
            {/* <div className="input-group">
                <input 
                    type='text' 
                    name="emotion" 
                    value={this.props.emotion}
                    onChange={this.props.handleChange}
                />
                    <div className="form-nav">{this.props.forwardButton}</div>
            </div> */}
            <div className="input-group">
                    <select
                        onChange={e => props.setEmotion(e.target.value)}
                        onBlur={e => props.setEmotion(e.target.value)}
                    >
                        <option value="">Choose the closest one:</option>
                        {emotions.map( (emotion, index) => {
                            return (
                                <option key={index} value={emotion}>{emotion}</option>
                                )
                            })
                        }
                </select>
            </div>
        </div >
        </>
    )
 
}

export default Emotion