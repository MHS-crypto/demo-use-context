import React, { useState } from 'react';
import './App.css';
import Parent from './parent';

function App() {
  let [number, setnumber] = useState(45);
  return (
    <div className="App">
    HELLO  WORLD FROM HASSAN  
    <Parent num ={number}> </Parent>
    <button onClick={()=>{setnumber(++number)}}>Update Number</button>
      
    </div>
  );
}

export default App;
