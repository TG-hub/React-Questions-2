import React, {useState} from 'react'
import '../App.css'

export default Boxes




function Boxes (props) {
  
    

    const [clicker, setClicker] = useState('')
    //const clickHandler = () => setClicker("color")
    
    const Display = () => {
        const isClicked = clicker
        return (
            <div>
                {isClicked.length!==0 ? <p style={{color: clicker}}>You clicked the {clicker} square.</p> : null}
            </div>
        ) 
    }
    return (
        <div>
            <div onClick={() => setClicker('red')} style={{backgroundColor: 'red', width:100, height: 100}}></div>
            <div onClick={() => setClicker('blue')} style={{backgroundColor: 'blue', width:100, height: 100}}></div> 
            <div onClick={() => setClicker('green')} style={{backgroundColor: 'green', width:100, height: 100}}></div>
            <div onClick={() => setClicker('purple')} style={{backgroundColor: 'purple', width:100, height: 100}}></div> 
            <Display />
        </div>
    )

}
   

