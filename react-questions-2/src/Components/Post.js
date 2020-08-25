import React from 'react'
import '../App.css'

export default Post

function Post (props) {
    return (
        <div>
            <p>{props.title}</p>
            <img src={props.image} alt={props.altText} width={imageSize()} height={imageSize()/2} />
            <p>{props.content}</p>
        </div>
    )

    function imageSize() {
        return 400
    }
}

