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

function App() {
  return (
    <>
      <Counter />
      <Greeter />
      <AlertButton />
      <Person name={"Theo"} age={24} job={"Musician"} />
      <Form />
      <Post title={"A Post About Jupiter"} image={"https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia23803.jpg"} content={"This is a picture of the suface of Jupiter, the largest planet in our Solar System."} altText={"Jupiter's surface"} />
      <Boxes /> 
      <ImagePreview />
      <Questions />
      <Posts />
    </>
  );
}

export default App;
