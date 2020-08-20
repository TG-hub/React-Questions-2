import React, { useState } from 'react'
import '../App.css'
export default Counter 


function Buttons (props) {
    
    return (
        <div>
            <button onClick={props.increment}>+1</button>
            <button onClick={props.decrement}>-1</button>
        </div>
    )
}

function Display (props) {
    return(
        <div>
            <p>{props.message}</p>
        </div>
    )
}

function Counter () {
    const [counter, setCounter] = useState (0)
    const incrementCounter = () => setCounter(counter+1)
    const decrementCounter = () => setCounter(counter-1)
    return (
        <div>
            <Buttons increment={incrementCounter} decrement={decrementCounter}  />
            <Display message={counter} />
        </div>
    )
}