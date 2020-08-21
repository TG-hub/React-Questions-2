import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter.js'
import Greeter from './Components/Greeter.js'
import AlertButton from './Components/Alert.js'

function App() {
  return (
    <>
      <Counter />
      <Greeter />
      <AlertButton />
    </>
  );
}

export default App;
