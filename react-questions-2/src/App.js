import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter.js'
import Greeter from './Components/Greeter.js'
import AlertButton from './Components/Alert.js'
import Person from './Components/Person.js'
import Form from './Components/Form.js'
import Post from './Components/Post.js'
import Boxes from './Components/Boxes.js'
import ImagePreview from './Components/ImagePreview.js'
import Questions from './Components/Questions.js'
import Posts from './Components/Posts.js'

const postContent = [
  {title: 'Javascript', content: 'Javascript is a scripting language ideal for building websites', image: 'https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png'}, 
  {title: 'CSS', content: 'CSS is used to control the layout and styling of a webpage', image: 'https://pluralsight.imgix.net/paths/path-icons/css-c9b214f0d7.png'}, 
  {title: 'HTML', content: 'HTML is a markup language that lets you put elements onto a webpage', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'}, 
  {title: 'React', content: 'React is a framework created by facebook to make building websites simpler and faster', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72z-vetlfm8_1q_IYaYcQyCT9z-j-xuwSowK0pNMpZp3pF4k&s'}, 
  {title: 'Jquery', content: 'Jquery is the old way we handled events on webpages and is not used often anymore', image: 'https://miro.medium.com/max/285/1*QR2SBNwG75LyY5uwqWpN3A.png'}
  ]


function App() {
  return (
    <>
      <Counter />
      <Greeter />
      <AlertButton />
      <Person name={"Theo"} age={24} job={"Musician"} />
      <Form />
      <Post title={"A Post About Jupiter", postContent.map.title} image={"https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia23803.jpg", postContent.map.image} content={"This is a picture of the suface of Jupiter, the largest planet in our Solar System."} altText={"Jupiter's surface"} />
      <Boxes /> 
      <ImagePreview />
      <Questions />
      <Posts postContent={postContent} />
    </>
  );
}

export default App;
