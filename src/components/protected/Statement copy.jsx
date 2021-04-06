// import React,{ Component } from 'react'
import React,{ useState } from 'react'

const Statement = () => {

        if (this.props.currentStep !== 'statment') {
            return null
        }
        return (
            <div className="form-group">
                <label htmlFor="statement">Tell Me What Happened?</label>
                <div className="input-group">
                    <input
                        type='text'
                        name="statement"
                        value={this.props.statement}
                        onChange={this.props.handleChange}
                    />
                    <div className="form-nav">{this.props.forwardButton}</div>
                </div>
            </div>
        )
    }

}

export default Statement