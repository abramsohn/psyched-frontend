import React, { useState, useEffect } from 'react'


function DistressEvents() {
    const [distressEvents, setDistressEvents] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:3004/distress-events`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            
        })
        .then(res => res.json())
        .then(response => {
            setDistressEvents( response.distressEvents );
        });
    }, [])

    function formatDate(string) {
        const date = new Date(string);   
        return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
    }

    function formatTime(string) {
        const date = new Date(string);   
        return `${date.getHours()}:${date.getMinutes()}`
    }

    return(
        <div className="distressEvents">
                {distressEvents.map((event, index) => {
                    return (
                        <div key={index} className="distressEvent">
                            <header>
                                {formatDate(event.createdAt)}, {formatTime(event.createdAt)}
                            </header>
                        <blockquote>{event.description}</blockquote>
                        Emotion: {event.emotion} <br />
                        Emotion Intensity:{event.emotionIntensity}  <br />
                        Does it fit the facts: {event.factCheck}<br />
                        Oposite Action Helped?: {event.oppositeAction}<br />
                        Problem Solving Helped?: {event.problemSolving}<br />
                        Skills Used: {event.skill}<br />
                        
                    </div>
                    )
                })}
        </div>
    )
}

export default DistressEvents