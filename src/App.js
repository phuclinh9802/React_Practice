import React, { useState } from 'react';
import './App.css';
import { data, month } from "./data";

//brainstorm - birthday reminder
// if birthday is coming in 24 hours - remind 
// if birthday is coming in 12 hours - remind
// if birthday comes - "HAPPY BIRTHDAY!"
// can be reminding a list of people 


function App() {
  // get data and function to modify data
  // if passed birthday this year -> +1 for year next year
  const [people, setPeople] = useState(data);
  const handler = (id, person) => {
    var birthDate = new Date(person.birthDate);
    var now = new Date();
    var birthDay = new Date(month[birthDate.getMonth()] + " " + birthDate.getDate() + ", " + now.getFullYear());
    var diff = Math.floor((birthDay - now) / 1000 / 3600 / 24);
    // leap year
    if (diff < 0 && now.getFullYear() + 1 % 4 === 0) {
      let leap = diff + 366;
      alert(leap + " days until " + person.name + "'s birthday.")
      
    }
    else if (diff < 0 && now.getFullYear() + 1 % 4 !== 0) {
      let day = diff + 365;
      alert(day + " days until " + person.name + "'s birthday.")
    }
    else {
      let day = diff;
      alert(day + " days until " + person.name + "'s birthday.")
    }
    // let monthToRemind = Math.abs()
    // console.log("Remind me of " + name + "'s birthday in " +  )
  }
  return (
    <>
     <div className="wrapper">
      {people.map((person) =>  {
        return (
          <div className="container">

            <h2>{person.name}</h2>
            <p>{person.birthDate}</p>
            <button className="btn" onClick={() => handler(person.id, person)}>Remind me</button>
          </div>
        
        );
      })
      }
     </div>
      
    </>
  );
}

export default App;
