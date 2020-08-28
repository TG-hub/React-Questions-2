import React, {useState} from 'react'
import '../App.css'

export default ImagePreview



function Input (props) {
    return (
        <form>
             <input onChange={props.imageSelect} placeholder={'insert image URL'} />
        </form>
    )
}




function ImagePreview () {
    
    const [image, setImage] = useState ('https://cdn.theatlantic.com/thumbor/pN25nhF1hatn7QpckNtABKwzmoI=/0x61:1000x624/720x405/media/old_wire/img/upload/2013/03/18/happydog/original.jpg')
    const setUserImage = (event) => setImage(event.target.value)
    const submit = () => setUserImage(image)
    return (
        <div>
            <img src={image}></img> 
            <Input imageSelect={setUserImage} />
            <button onClick={submit}>Preview Image</button>
        </div>
    )
}

