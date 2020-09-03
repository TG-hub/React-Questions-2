import React, {useState} from 'react'
import '../App.css'


export default Questions

function Questions () {

    const [answerOne, setAnswerOne] = useState ('')
    const [answerTwo, setAnswerTwo] = useState ('')
    const [answerThree, setAnswerThree] = useState ('')
    const [answerFour, setAnswerFour] = useState ('')
    const [answerFive, setAnswerFive] = useState ('')
    
    const [answerState, setAnswerState] = useState (false)

    const Display = () => setAnswerState(!answerState)
    
    return (
       <div>
            <p>Would you like to check this box?</p> 
            <p>Yes</p> <input type={'checkbox'} onClick={() => setAnswerOne('Yes')} />
            <p>No</p><input type={'checkbox'} onClick={() => setAnswerOne('No')} /> <br/>
            
            <p>Do you like Chocolate?</p>
            <p>Yes</p> <input type={'checkbox'} onClick={() => setAnswerTwo('Yes')} />
            <p>No</p><input type={'checkbox'} onClick={() => setAnswerTwo('No')} /> <br/>

            <p>Did you have a good weekend?</p>
            <p>Yes</p> <input type={'checkbox'} onClick={() => setAnswerThree('Yes')} />
            <p>No</p><input type={'checkbox'} onClick={() => setAnswerThree('No')} /> <br/>

            <p>Do you like React?</p>
            <p>Yes</p> <input type={'checkbox'} onClick={() => setAnswerFour('Yes')} />
            <p>No</p><input type={'checkbox'} onClick={() => setAnswerFour('No')} /> <br/>

            <p>Is your favourite colour Blue?</p>
            <p>Yes</p> <input type={'checkbox'} onClick={() => setAnswerFive('Yes')} />
            <p>No</p><input type={'checkbox'} onClick={() => setAnswerFive('No')} /> <br/>
            
            <button onClick={Display}>Submit Answers</button>
            {answerState===true ? <p>Question 1: {answerOne}</p> : null}

            {answerState===true ? <p>Question 2: {answerTwo}</p> : null}

            {answerState===true ? <p>Question 3: {answerThree}</p> : null}

            {answerState===true ? <p>Question 4: {answerFour}</p> : null}

            {answerState===true ? <p>Question 5: {answerFive}</p> : null}
       </div>
        
        
    )
}

