import React, { useState, setState } from 'react';
import './App.css';
import { data, month } from "./data";

//brainstorm - birthday reminder
// if birthday is coming in 24 hours - remind 
// if birthday is coming in 12 hours - remind
// if birthday comes - "HAPPY BIRTHDAY!"
// can be reminding a list of people 

// let state = {
//   name: '',
//   birthDate: ''
// }

// const handleChange = (event) => {
//   setState({
//     name: event.target.value,
//     birthDate: event.target.value
//   })
// }
function App() {
  // get data and function to modify data
  // if passed birthday this year -> +1 for year next year
  const [people, setPeople] = useState([]);

  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handler = (id, person) => {
    console.log(people[id])
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = people.length + 1;
    const person = { id: id, name, birthDate };
    if (name && birthDate) {
      setPeople((oldPeople) => {
        return [...oldPeople, person];
      });
      setName('');
      setBirthDate('');
    }
    
  }
  return (
    <>
     <div className="wrapper">
       <h2 className="topic">Birthday Reminder</h2>
       <div className="tab">
        {people.map((person) =>  {
          return (
            <div key={person.id} className="container">
              <h2>{person.name}</h2>
              <p>{person.birthDate}</p>
              <button className="btn" onClick={() => handler(person.id, person)}>Remind me</button>
            </div>
            
          
          );
        })
        }
        <article>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="fullName"> Full Name: </label>
              <input type="text" id="fullName" name={name} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-control">
              <label htmlFor="birthDate"> Birth Date: </label>
              <input type="text" id="birthDate" name={birthDate} value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            </div>
            <button className="btn">Add person</button>
            <button className="clear-btn" onClick={() => setPeople('')}>Clear</button>
          </form>
        </article>
      </div>
      {/* <div className="button-container">
        <input type="text" value={state.name} onChange={handleChange} placeholder="Name..." />
        <input type="text" value={state.birthDate} onChange={handleChange} placeholder="Birthdate in form 'MonthName Day, Year" />
        <button type="submit" className="add" onClick={() => addHandler(people)}>Add person</button>
      </div>
       */}
     </div>
      
    </>
  );
}

export default App;
