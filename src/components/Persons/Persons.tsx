import React, {Component} from 'react'
import Person from './Person/Person';
 
interface Props {
    persons: any,
    clicked: any,
    changed: any
}

interface State {}
class Persons extends Component<Props, State> {

    // static getDerivedStateFromProps(props: any, state: any) {
    //     console.log(`Persons.tsx - getDerivedStateFromProps ${props}`);
    //     return state;
    // }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log(`Persons.tsx - shouldComponentUpdate ${nextProps}`);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
        console.log(`Persons.tsx - getSnapshotBeforeUpdate`);
        return {message: "snapshot"};
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        console.log(`Persons.tsx - componentDidUpdate`);
        console.log(snapshot);
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
