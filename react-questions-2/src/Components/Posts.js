import React from 'react'
import '../App.css'
import Post from './Post'
import App from '../App'

export default Posts

function Posts (props) {
    
    /*function Post (postContent) {
                return (
            <div>
                <p>{postContent.title}</p>
                <img src={postContent.image} width={100} height={100} />
                <p>{postContent.content}</p>
            </div>
            )
       }*/
       
    return (
        <div>
            {props.postContent.map(Post)}
        </div>
    ) 
    }
