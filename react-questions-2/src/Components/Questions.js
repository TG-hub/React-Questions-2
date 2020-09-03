import React, {useState} from 'react'
import '../App.css'


export default Questions

function Questions () {

    const [answerOne, setAnswerOne] = useState ('')
    const [answerState, setAnswerState] = useState (false)

    const Display = () => setAnswerState(!answerState)
    
    return (
       <div>
            <p>Would you like to check this box?</p> 
            <p>Yes</p> <input type={'checkbox'} onClick={() => setAnswerOne('Yes')} />
            <p>No</p><input type={'checkbox'} onClick={() => setAnswerOne('No')} /> <br/>
            <button onClick={Display}>Submit Answers</button>
            {answerState===true ? <p>Question 1: {answerOne}</p> : null}
       </div>
        
        
    )
}

