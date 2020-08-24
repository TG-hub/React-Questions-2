import React from 'react'
import '../App.css'

export default Post

function Post (props) {
    return (
        <div>
            <p>{props.title}</p>
            <img src={props.image} alt={props.altText} width={400} height={200} />
            <p>{props.content}</p>
        </div>
    )
}

