import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './AddTodo';

class App extends Component {
  constructor() {
    // super must always be called in a constructor that is extending another class (Component) before we can use this
    super();
    // We initialize state with a todos property whose value is an empty array. That's because in our render method, we are calling this.state.todos.map(). Now, if we didn't set the initial value of this.state.todos = [], then this.state.todos would be undefined. If you try to call undefined.map, you get a breaking javascript error. Thus the importance of setting up all of the initial values for all of the state variables this component will use.
    this.state = {
      todos: []
    };

    // In order to make sure that addTodo is invoked with the correct value of this, we need to create a copy of it on each new instance of App that is bound to that instance.
    // The below code is creating a direct property on our App component whose value is the bound function copy

    this.addTodo = this.addTodo.bind(this);

    // Simple example
    // Run in browser console if you want to see
    // class Test {
    //   constructor(name) {
    //     this.name = name

    //     this.logger2 = this.logger2.bind(this)
    //   }
    //   logger() {
    //     console.log(this)
    //   }
    //   logger2() {
    //     console.log(this)
    //   }
    // }
    // let newTest = new Test('John')
    // console.log(newTest)
    // console.log('Does newTest have a copy of the logger method?', newTest.hasOwnProperty('logger'))
    // console.log('Does newTest have a copy of logger2 method?', newTest.hasOwnProperty('logger2'))
    // console.log('Is the copy of logger2 on newTest the same function as the class method on the prototype?', newTest.logger2 === newTest.__proto__.logger2)
  }

  // addTodo takes in a todo parameter and then makes a copy of the todos array on state. It then adds that todo param ('string') to the copy of todos and lastly sets state, setting todos to the copied array that contains all the old todos plus the new one
  addTodo(todo) {
    let copy = this.state.todos;
    copy.push(todo);
    this.setState({ todos: copy });
  }

  render() {
    return (
      <div className="App">
        {/* We render out the AddTodo component passing down 1 prop. That prop is addTodo={this.addTodo}. Remember, since we bound addTodo in the constructor, the function we are passing down is a bound copy of the addTodo method. That means that even though the child component will invoke it from the button onClick event, the value of this will still be the App component. */}
        <AddTodo addTodo={this.addTodo} />
        {/* Here we map through the todos on state and render out a div for each one. It's important that we add the key so react can properly keep track of each of these and if one changes we know about it. */}
        {this.state.todos.map((todo, i) => {
          return <div key={`${todo}-${i}`}>{todo}</div>;
        })}
      </div>
    );
  }
}

export default App;
