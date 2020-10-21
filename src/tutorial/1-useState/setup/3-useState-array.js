import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const handler = () => {
    setPeople([]);
  }
  const handler2 = (id) => {
    // filter newPeople array and remove person based on id
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
      <>
       { people.map((person) => {
        const {id, name} = person;
        return (
          <div key={id}>
            <h2 className="item">
              {name}
            </h2>
            <button className="btn" onClick={() => handler2(id)}>Delete</button>

          </div>
        )   
      }
      )} 
    <button className="btn" onClick={handler}>Clear</button>


      </> 
    )
};

export default UseStateArray;
