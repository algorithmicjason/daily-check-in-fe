import './App.css';
import Oct15 from './Components/Oct15';
import React, { useState } from 'react'


function App() {


  const [component, setComponent] = useState(false)

  const toggleView = () => {
    component === true ? setComponent(false) : setComponent(true)
  }



  return (
    <div>
      <h1>HELLO WORLD</h1>
      <a onClick={toggleView}>take daily questionaire</a>
      {component === true ? <Oct15 /> : null}
    </div>
  );
}

export default App;
