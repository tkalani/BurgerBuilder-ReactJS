import React from 'react';
// import Radium from 'radium';

import classes from './Person.css';

const person = (props) => {
    const rnd = Math.random();
    if(rnd > 0.7)
        throw new Error("Something went wrong");
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I am a {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
        
    )
};

// export default Radium(person);
export default person;