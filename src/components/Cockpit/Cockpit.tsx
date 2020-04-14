import React from 'react'
import styles from '../../Button.module.css'
import './Cockpit.css';

const Cockpit = (props: any) => {    
    let classes :string[] = [];
    let btnClass = [styles.Button];

    if(props.showPersons) {
        btnClass.push(styles.Red);
    }
    
    if (props.persons.length <= 2) {
        classes.push('red')
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <div className='Cockpit'>
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>or am i</p>
        <button className={btnClass.join(' ')}
        onClick={props.clicked}>toggle name</button>
        </div>
    );
}

export default Cockpit;