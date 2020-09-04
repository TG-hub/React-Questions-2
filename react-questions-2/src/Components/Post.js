import React from 'react'
import '../App.css'
import Posts from './Posts'



export default Post

function Post (props) {
    
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.image} alt={props.altText} width={400} height={200} />
            <p>{props.content}</p>
        </div>
    ) 
    }