import React, { useState } from 'react'
import '../App.css'

export default Form

function Input (props) {
    
    
    return (
        <form >
            <input onChange={props.nameSetter} placeholder={"Enter your name"} size={30} /> <br/>
            <input onChange={props.ageSetter} placeholder={"Enter your age"}  size={30} />  <br/>
            <input onChange={props.colourSetter} placeholder={"Enter your favourite colour"}  size={30} />  <br/>
            <input onChange={props.foodSetter} placeholder={"Enter your favourite food"}  size={30} />  <br/>
            
        </form>
        
    )
}

function Button (props) {
    return (
        <button onClick={props.submit}>Submit Answers</button>
    )
}





function Form () {
    const [input, setInput] = useState("")
    const setText = (event) =>  setInput(event.target.value)
    const logToConsole = () => console.log(input)

   return (
       <>
        <Input nameSetter={setText} ageSetter={setText} colourSetter={setText} foodSetter={setText}  />
        <Button submit={logToConsole} />
       </>
   )
}