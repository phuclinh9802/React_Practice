import React, { useState } from 'react';

const UseStateCounter = () => {
  const [number, setNumber] = useState(1);
  const handler = (id) => {
    if (id === 1) {
      setTimeout(() => {
        setNumber((oldNumber) => {
          return oldNumber + 1;
        });
      }, 1000)
      
    }
    else if (id === 2) {
      let num = number;
      setNumber(--num);
    }
    else {
      setNumber(0)
    }
    
  }
  return (
  <>
    <div className="container">
      <h1>{number}</h1>
      <button className="btn" onClick={() => handler(1)}>Increment</button>
      <button className="btn" onClick={() => handler(2)}>Decrement</button>
      <button className="btn" onClick={() => handler(3)}>Reset</button>
    </div>
  </>
  );
};

export default UseStateCounter;
