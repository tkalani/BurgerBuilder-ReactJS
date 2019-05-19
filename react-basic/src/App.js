import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: "Tanmay", age: "21" },
      { name: "Vaibhav", age: "19" },
      { name: "Rajesh", age: "50" }
    ]
  }

  switchNameHandler = (newName) => {
    console.log('Clicked Here');
    // this.state.persons[0].name = "Anita";
    this.setState({
      persons: [
        { name: newName, age: "23" },
        { name: "Vaibhav", age: "459" },
        { name: "Rajesh", age: "54" }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Tanmay", age: "23" },
        { name: event.target.value, age: "459" },
        { name: "Rajesh", age: "54" }
      ]
    })
  }
  
  render()
  {
    const style = {
      backgroundColor: 'Red',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I am Tanmay.</h1>
        <p>This is working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Tanmay...')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Tanmay!')}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        {/* <Person name="Tanmay" age="21">My hobby is painting.</Person>
        <Person name="Vaibhav" age="19"/> */}
      </div>
    );
  }
}

export default App;
