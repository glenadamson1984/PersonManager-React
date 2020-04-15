import React, {useEffect} from 'react'
import styles from '../../Button.module.css'
import './Cockpit.css';

const Cockpit = (props: any) => {    
    // useEffect(() => {
    //     console.log(`Cockpit.tsk - useEffect`);

    //     setTimeout(() => {
    //         alert("saved data to cloud");
    //     }, 1000);
    // }, [props.persons]);

    useEffect(() => {
        console.log(`Cockpit.tsk - useEffect`);

        setTimeout(() => {
            alert("saved data to cloud");
        }, 1000);
    }, []);

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