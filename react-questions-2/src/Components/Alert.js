import React from 'react'
import '../App.css'


export default AlertButton


function Button(props) {
    return (
        <button onClick={props.alertMessage}>Hello, here is your custom message!</button>
    )
}

function AlertButton () {
    const buttonClick = () => alert("Here is your custom message.")
    
    return (
        <div>
            <Button alertMessage={buttonClick} />
        </div>
    )
}

