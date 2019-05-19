import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id:'weew', name: "Tanmay", age: "21" },
      { id:'wefwef', name: "Vaibhav", age: "19" },
      { id:'rgeg', name: "Rajesh", age: "50" }
    ],
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

    // this.setState({
    //   persons: [
    //     { name: "Tanmay", age: "23" },
    //     { name: event.target.value, age: "459" },
    //     { name: "Rajesh", age: "54" }
    //   ]
    // })
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  showHidePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
  
  render()
  {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons)
    {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
              return (
                <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age} 
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}  />
              )
            })}
            {/* <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Tanmay!')}
              changed={this.nameChangedHandler} />
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} /> */}
          </div>
      )

      style.backgroundColor = 'red';
    }

    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }


    return (
      <div className="App">
        <h1>Hi, I am Tanmay.</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button 
          style={style}
          onClick={this.showHidePerson}>Show / Hide</button>
        {persons}
        {/* <Person name="Tanmay" age="21">My hobby is painting.</Person>
        <Person name="Vaibhav" age="19"/> */}
      </div>
    );
  }
}

export default App;
