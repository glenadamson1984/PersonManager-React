import React, {Component} from 'react'
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

interface Props {
    click?: any,
    name: any,
    age: any,
    change?: any
}

interface State {}
class Person extends Component<Props, State> {
    inputEleRef: any;
    constructor(props: any) {
        super(props);
        this.inputEleRef = React.createRef();
    }
    
    componentDidMount() {
        this.inputEleRef.current.focus();
    }

    render() {
        console.log(`Person.tsx - rendering`);
        return (
        <StyledDiv>
            <p onClick={this.props.click}>im {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input
            key="i3"
            ref={this.inputEleRef}
            type="text" onChange={this.props.change} value={this.props.name}/>
        </StyledDiv>
        );
    }
}

export default Person;
