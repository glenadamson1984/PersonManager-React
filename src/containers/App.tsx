import React, { useState, Component }  from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person'
import styled from 'styled-components'
import styledComponentsTS from 'styled-components-ts'
import styles from '../Button.module.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass'
import AuthContext from '../context/auth-context'

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
    appTitle: string;
    alt?: boolean;
}

interface State {}

class App extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        console.log(`App.tsx - Constructor`);
    }

    state = {
        persons: [    
        {id:'jshkjhsfj', name:"Glen", age:"35"},
        {id:'gjkjek', name:"Laura", age:"32"},
        {id:'awsdjsdj', name:"random", age:Math.floor(Math.random() * 30)}
        ],
        otherState: "some other value",
        showPersons: false,
        showCockpit: true,
        authenticated: false,
    };

    static getDerivedStateFromProps(props: any,state: any) {
        console.log(`App.tsx - getDerivedStateFromProps ${props}`);
        return state;
    }

    componentDidMount() {
        console.log(`app.tsx - componentDidMount`);
    }

    shouldComponentUpdate(nextProps: any , nextState: any) {
        console.log(`app.tsx - ssssshouldComponentUpdate`);
        return true;
    }

    componentDidUpdate() {
        console.log(`app.tsx - componentDidUpdate`);
    }

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

    loginHandler = () => {
        this.setState({authenticated: true});
    }

    render() {
        console.log(`App.tsx - render`);
        let persons = null;

        let btnClass = [styles.Button];

        if (this.state.showPersons) {
            persons = <Persons persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
                isAuthenticated={this.state.authenticated}/>;

            btnClass.push(styles.Red);
        }

        return (
                <WithClass classes="App">
                <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
                <AuthContext.Provider value={{
                        authenticated: this.state.authenticated, 
                        login: this.loginHandler
                    }}>
                {this.state.showCockpit ? <Cockpit 
                title={this.props.appTitle}
                showPersons={this.state.showPersons} 
                personsLength={this.state.persons.length}
                clicked={this.togglePersonHandler}
                login={this.loginHandler} /> : null }
                {persons}
                </AuthContext.Provider>
            </WithClass>
        );
    }
  }

  export default App;