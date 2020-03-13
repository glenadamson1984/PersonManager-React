import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width: 500px) {
        width: 450px;
        background-color: red;
}`;

const Person = (props: any) => {    
    return (
    <StyledDiv>
        <p onClick={props.click}>im {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>
    </StyledDiv>
    );
}

export default Person;