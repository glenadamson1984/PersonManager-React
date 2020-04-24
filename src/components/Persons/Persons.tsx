import React, {PureComponent} from 'react'
import Person from './Person/Person';
 
interface Props {
    persons: any,
    clicked: any,
    changed: any
}

interface State {}
class Persons extends PureComponent<Props, State> {

    // static getDerivedStateFromProps(props: any, state: any) {
    //     console.log(`Persons.tsx - getDerivedStateFromProps ${props}`);
    //     return state;
    // }

// we can use shouldComponentUpdate as before but if we want to check every property
// for a change we can actually make use of a Pure Component which then handles this 
// for us by extending a differenct Class from React

    // shouldComponentUpdate(nextProps: any, nextState: any) {
    //     console.log(`Persons.tsx - shouldComponentUpdate ${nextProps}`);
    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     } else {
    //         return false;
    //     }

    // }

    getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
        console.log(`Persons.tsx - getSnapshotBeforeUpdate`);
        return {message: "snapshot"};
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        console.log(`Persons.tsx - componentDidUpdate`);
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log(`Persons.tsx - componentWillUnmount`);
    }

    render () {
        console.log(`Persons.tsx - rendering`);
        return this.props.persons.map((person: any, index: number) => {
            return <Person click={() => this.props.clicked(index)} 
            name={person.name} age={person.age}
            key={person.id}
            change={(event: any) => this.props.changed(event, person.id)}></Person>
        });
    }
}

export default Persons;
