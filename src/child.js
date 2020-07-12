import React, { useContext } from 'react';
import ValueContext from './ValueContext';


function Child() {
    let value = useContext(ValueContext);
    let UpdateValue = value[1];
  return (
    <div >
    HELLO  WORLD FROM CHILD  {value} 
    <button onClick={()=>{UpdateValue(++value[0])}}>Update Value</button>
      
    </div>
  );
}

export default Child;
