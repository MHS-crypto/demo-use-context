import React, { useContext } from 'react';
import ValueContext from './ValueContext';


function Child() {
    let value = useContext(ValueContext);
  return (
    <div >
    HELLO  WORLD FROM CHILD  {value} 
      
    </div>
  );
}

export default Child;
