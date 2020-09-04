import React from 'react'
import '../App.css'

export default Posts

function Posts () {
    
    function Post (postContent) {
                return (
            <div>
                <p>{postContent.title}</p>
                <img src={postContent.image} width={100} height={100} />
                <p>{postContent.content}</p>
            </div>
            )
       }
       
    
    
    const postContent = [
        {title: 'Javascript', content: 'Javascript is a scripting language ideal for building websites', image: 'https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png'}, 
        {title: 'CSS', content: 'CSS is used to control the layout and styling of a webpage', image: 'https://pluralsight.imgix.net/paths/path-icons/css-c9b214f0d7.png'}, 
        {title: 'HTML', content: 'HTML is a markup language that lets you put elements onto a webpage', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'}, 
        {title: 'React', content: 'React is a framework created by facebook to make building websites simpler and faster', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72z-vetlfm8_1q_IYaYcQyCT9z-j-xuwSowK0pNMpZp3pF4k&s'}, 
        {title: 'Jquery', content: 'Jquery is the old way we handled events on webpages and is not used often anymore', image: 'https://miro.medium.com/max/285/1*QR2SBNwG75LyY5uwqWpN3A.png'}
        ]
         

    return (
        <div>
            {postContent.map(Post)}
        </div>
    ) 
    }
