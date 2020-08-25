import React, {useState} from 'react'
import '../App.css'

export default Boxes

function Squares (props) {
    return (
        <div>
            <div onClick={props.clickRed} style={{backgroundColor: 'red', width:100, height: 100}}></div>
            <div onClick={props.clickBlue} style={{backgroundColor: 'blue', width:100, height: 100}}></div> 
            <div onClick={props.clickGreen} style={{backgroundColor: 'green', width:100, height: 100}}></div>
            <div onClick={props.clickPurple} style={{backgroundColor: 'purple', width:100, height: 100}}></div>
            
        </div>
    )
}

function DisplayRed(props) {
    
    const clickRed = props.clickRed
    if (clickRed) {
      return <p style={{color: 'red'}}>You clicked the red square.</p>
    } 
    return null

}

function DisplayBlue (props) {
    
    const clickBlue = props.clickBlue
    if (clickBlue)  {
      return <p style={{color: 'blue'}}>You clicked the blue square.</p>
    }
    return null
}

function DisplayGreen (props) {

    const clickGreen = props.clickGreen
    if (clickGreen) {
        return <p style={{color: 'green'}}>You clicked the green square.</p>
    }
    return null
}

function DisplayPurple (props) {

    const clickPurple = props.clickPurple
    if (clickPurple) {
        return <p style={{color: 'purple'}}>You clicked the purple square.</p>
    }
    return null
}
  
  
function Boxes () {
    const [redClick, setRedClick] = useState(false)
    const redClicker = () => setRedClick(!redClick)

    const [blueClick, setBlueClick] = useState(false)
    const blueClicker = () => setBlueClick(!blueClick)

    const [greenClick, setGreenClick] = useState(false)
    const greenClicker = () => setGreenClick(!greenClick)

    const [purpleClick, setPurpleClick] = useState(false)
    const purpleClicker = () => setPurpleClick(!purpleClick)

    return(
        <div>
            <Squares clickRed={redClicker} clickBlue={blueClicker} clickGreen={greenClicker} clickPurple={purpleClicker} />
            <DisplayRed clickRed={redClick}  />
            <DisplayBlue clickBlue={blueClick} />
            <DisplayGreen clickGreen={greenClick} />
            <DisplayPurple clickPurple={purpleClick} />
        </div>
    )
}    



