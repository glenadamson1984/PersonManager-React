import React, { useState }  from 'react';
import './App.css';
import Person from './components/Persons/Person/Person'

const AppFunctionalComponent: React.FC = () => {

const peopleObject =  {persons: [
    {name:"Glen", age:"35"},
    {name:"Laura", age:"32"},
    {name:"random", age:Math.floor(Math.random() * 30)}
  ], otherState: "some other value"};

  const [people, setPeople] = useState(peopleObject);

  const switchNameHandler = () => {
    console.log("was clicked");
    setPeople( { persons:[
      {name:"Glennn", age:"355555"},
      {name:"Laura", age:"32"},
      {name:"random", age:Math.floor(Math.random() * 30)}
    ], otherState: peopleObject.otherState})
  }
    // when i setState using setPeople in a functional based Component it essentially replaces
    // the states so notice we need to set otherState manually or it will be removed

  return (
    <div className="App">
      <h1>I'm a react developer</h1>
      <p>yahhhh</p>
      <button onClick={switchNameHandler}>switch name</button>
      <Person 
        name={peopleObject.persons[0].name} 
        age={peopleObject.persons[0].age}/>
      <Person 
        name={peopleObject.persons[1].name} 
        age={peopleObject.persons[1].age}/>
      <Person 
        name={peopleObject.persons[2].name} 
        age={peopleObject.persons[2].age}/>
    </div>
  );
}

export default AppFunctionalComponent;
