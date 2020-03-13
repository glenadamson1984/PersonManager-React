import React from 'react'
import Person from './Person/Person';
 

const Persons = (props: any) => props.persons.map((person: any, index: number) => {
        return <Person click={() => props.clicked(index)} 
        name={person.name} age={person.age}
        key={person.id}
        change={(event: any) => props.changed(event, person.id)}></Person>
    });

export default Persons;
