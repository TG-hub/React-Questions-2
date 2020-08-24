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
    const [nameInput, setNameInput] = useState("")
    const setName = (event) =>  setNameInput(event.target.value)
    
    const [ageInput, setAgeInput] = useState("")
    const setAge = (event) =>  setAgeInput(event.target.value)
    
    const [colourInput, setColourInput] = useState("")
    const setColour = (event) =>  setColourInput(event.target.value)

    const [foodInput, setFoodInput] = useState("")
    const setFood = (event) =>  setFoodInput(event.target.value)
    
    const logToConsole = () => console.log(nameInput, ageInput, colourInput, foodInput)

   return (
       <>
        <Input nameSetter={setName} ageSetter={setAge} colourSetter={setColour} foodSetter={setFood}  />
        <Button submit={logToConsole} />
       </>
   )
}