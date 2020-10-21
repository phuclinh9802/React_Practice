import React, { useState } from 'react';

const UseStateBasics = () => {
  // useState example -> one is the value, second element is the
  // function that controls the value
  let [text, setText] = useState('the text!');
  let isTrue = true;
  const handler = () => {
    if (text === 'the text!') {
      setText('changed it!');
    }
    else {
      setText('the text!');
    }

    
    
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handler}>Change the text here</button>
    </React.Fragment>
    );
  }

export default UseStateBasics;
