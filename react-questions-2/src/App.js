import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter.js'
import Greeter from './Components/Greeter.js'
import AlertButton from './Components/Alert.js'
import Person from './Components/Person.js'
import Form from './Components/Form.js'

function App() {
  return (
    <>
      <Counter />
      <Greeter />
      <AlertButton />
      <Person name={"Theo"} age={24} job={"Musician"} />
      <Form />
    </>
  );
}

export default App;
