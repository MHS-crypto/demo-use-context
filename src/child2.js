import React, { useContext, useReducer } from 'react';
import number from './NumberReducer';


function Child2() {
    let [state,dispatch] = useReducer(number,52);
  return (
    <div >
    HELLO  WORLD FROM CHILD2: {state} 
      <button onClick={()=>{dispatch({type:"INCREMENT",val:20});}}>Increment</button>
      <button onClick={()=>{dispatch({type:"DECREMENT",val :20});}}>Decrement</button>
    </div>
  );
}

export default Child2;