import React, { useState } from 'react';
import './App.css';
import Parent from './parent';
import ValueContext from './ValueContext';

function App() {
  //let [number, setnumber] = useState(45);
  let value = 21;
  return (
    <div>
      <ValueContext.Provider value={value}>

      
    HELLO  WORLD FROM HASSAN  
    <Parent> </Parent>
    </ValueContext.Provider>
      
    </div>
  );
}

export default App;
