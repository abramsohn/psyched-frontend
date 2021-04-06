// import React,{ Component } from 'react'
import React from 'react'

function EmotionIntensity(props) {

        // if (this.props.currentStep !== 'emotionIntensity') {
            // return null
        // }
        return (
            <div className="form-group">
                <label htmlFor="emotionIntensity">On a scale of 1-100, how strong were the emotions?</label>
                <div className="input-group">
                    <input 
                        type='range' 
                        name="emotionIntensity" 
                        value={props.emotionIntensity}
                        onChange={e => props.setEmotionIntensity(e.target.value)}
                    />
                     {/* <div className="form-nav">{this.props.forwardButton}</div> */}
                </div>
            </div>
        )
    }


export default EmotionIntensity