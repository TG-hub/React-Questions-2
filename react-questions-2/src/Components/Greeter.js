import React, {useState} from 'react'
import '../App.css'

export default Greeter

function Input (props) {
   
    return ( 
        <form>
            <input onChange={props.textSetter} placeholder="Enter your name here"/>
        </form>   
    )
}


function Display (props) {
    return(
        <div>
            <p>Hello {props.message}, good to see you!</p>
        </div>
    )
}



function Greeter () {
    const [input, setInput] = useState("User")
    const setText = (event) =>  setInput(event.target.value)
    
    return (
    <div>
        <Input textSetter={setText} />
        <Display message={input} />
    </div>
  )  
}
