import React, {useEffect, useRef} from 'react'
import styles from '../../Button.module.css'
import './Cockpit.css';

const Cockpit = (props: any) => {    
    
    const toggleButtonRef = useRef(document.createElement("button"));
    // useEffect(() => {
    //     console.log(`Cockpit.tsk - useEffect`);

    //     setTimeout(() => {
    //         alert("saved data to cloud");
    //     }, 1000);
    // }, [props.persons]);

    useEffect(() => {
        console.log(`Cockpit.tsk - useEffect`);

        // const timer = setTimeout(() => {
        //     alert("saved data to cloud");
        // }, 1000);

        if (toggleButtonRef !== null) {
            toggleButtonRef.current.click();
        }


        return () => {
            // clearTimeout(timer);
            console.log(`Cockpit.tsk - should do all cleanup work here`);
        }
    }, []);

    useEffect(() => {
        console.log(`Cockpit.tsk - 2nd useEffect`);

        return () => {
            console.log(`Cockpit.tsk - 2nd should do all cleanup work here`);
        }
    });

    let classes :string[] = [];
    let btnClass = [styles.Button];

    if(props.showPersons) {
        btnClass.push(styles.Red);
    }
    
    if (props.personsLength <= 2) {
        classes.push('red')
    }
    if (props.personsLength <= 1) {
        classes.push('bold');
    }

    return (
        <div className='Cockpit'>
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>or am i</p>
        <button
        ref={toggleButtonRef}
        className={btnClass.join(' ')}
        onClick={props.clicked}>toggle name</button>
        </div>
    );
}

// functional components don't have a react hook for shouldComponentUpdate
// but we can wrap the component with React.memo and if nothing changes in 
// the component then it's not re-rendered
export default React.memo(Cockpit);