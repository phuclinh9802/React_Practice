import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    id : 1,
    name: 'Phil',
    message: 'Hello world!'
  });
  const handler = () => {
    // copy the person info, 2nd argument is to change the specific 
    // data in the object
    setPerson({...person, message: "hi!"})
  }
  return (
    <>
      <h2>{person.id}</h2>
      <h2>{person.name}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={handler}>Change message!</button>
    </>
  );
};

export default UseStateObject; 
