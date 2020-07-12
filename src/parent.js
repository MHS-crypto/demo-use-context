import React from 'react';
import Child from './child';


function Parent(props) {
  return (
    <div >
    HELLO  WORLD FROM PARENT
    <Child num = {props.num}></Child>
      
    </div>
  );
}

export default Parent;
