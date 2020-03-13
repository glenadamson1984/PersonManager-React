import React, { useState }  from 'react';
import './App.css';
import Person from './Person/Person'
import styled from 'styled-components'
import styledComponentsTS from 'styled-components-ts'
import styles from './Button.module.css'

// css modules is another way to appstyles at component level
// const StyledButton = styledComponentsTS<Props>(styled.button)`
// background-color: ${(props)  => props.alt ? 'red' : 'green'};
// color: white;
// font: inherit;
// border: 1px solid blue;
// padding: 8px;
// cursor: pointer;

// &:hover {
//     background-color: ${(props)  => props.alt ? 'salmon' : 'green'};;
//     color: black;
// }
// `;

interface Props {
    alt?: boolean;
}

interface State {}

class App extends React.Component<Props, State> {
    state = {
        persons: [    
        {id:'jshkjhsfj', name:"Glen", age:"35"},
        {id:'gjkjek', name:"Laura", age:"32"},
        {id:'awsdjsdj', name:"random", age:Math.floor(Math.random() * 30)}
        ],
        otherState: "some other value",
        showPersons: false
    };

    switchNameHandler = (newName: string) => {
    console.log("was clicked from class component");
    this.setState({
        persons:[
      {name:newName, age:"355555"},
      {name:"Laura", age:"32"},
      {name:"random", age:Math.floor(Math.random() * 30)}
    ]})};
    // when i setState in a class based Component it essentially merges the states
    // so notice we are not setting other state but it will remain on the object

    nameChangedHandler = (event: any, id: string) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons
        });
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    deletePersonHandler = (personIndex: any ) => {
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1); 
        this.setState({persons: persons});
    }

    render() {

        let persons = null;

        let btnClass = [styles.Button];

        if (this.state.showPersons) {
            persons = (<div> 
                {this.state.persons.map((person, index) => {
                    return <Person click={() => this.deletePersonHandler(index)} 
                    name={person.name} age={person.age}
                    key={person.id}
                    change={(event: any) => this.nameChangedHandler(event, person.id)}></Person>
                })}
                {/* <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}/>
                <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "Pete")}
                    change={this.nameChangedHandler}>My Hobbies: cycling</Person>
                <Person 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}/> */}
            </div>);

            // style.backgroundColor = 'red';
            btnClass.push(styles.Red);
        }

        let classes :string[] = [];
        if (this.state.persons.length <= 2) {
            classes.push('red')
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
                <div className="App">
                <h1>I'm a react developer</h1>
                <p className={classes.join(' ')}>or am i</p>
                {/* this is one way to pass argument to a method on a react class component */}
                {/* <button onClick={this.switchNameHandler.bind(this, "Peter Pan")}>switch name</button> */}
                {/* <button 
                style={style}
                onClick={() => this.switchNameHandler("Peter Pan")}>switch name</button> */}
                
                {/* styled component vs css modules */}
                {/* <StyledButton alt={this.state.showPersons}
                onClick={() => this.togglePersonHandler()}
                >toggle name</StyledButton> */}
                <button className={btnClass.join(' ')}
                onClick={() => this.togglePersonHandler()}
                >toggle name</button>
                {persons}
            </div>
        );
    }
  }

  export default App;