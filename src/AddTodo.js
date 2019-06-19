import React, { Component } from 'react';

class AddTodo extends Component {
  constructor() {
    super();
    // Same thing as the App component. We need to initialize todo on state to be used in our render method
    this.state = {
      todo: ''
    };
  }

  // This is an example of a typical handle change method. It takes in a value and uses that value to update a property on state.
  handleChange(value) {
    this.setState({ todo: value });
  }

  // In order what happens here is
  // 1. we invoke the addTodo prop passing through the value of this.state.todo. It's important to remember that this.props is an object with the key value pairs being whatever was passed down when we rendered the component. In this case, in App we rendered <AddTodo addTodo={this.addtodo}/> like so, so we have access to a prop with the key addTodo and the value a function.
  // 2. We then setState on this component back to an empty string so that the user doesn't need to worry about doing it themselves and can just add the todo.
  handleClick() {
    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' });
  }

  render() {
    console.log('this.props in add todo', this.props);
    return (
      <div>
        <p>Add Todo</p>
        {/* our input tag receives its value from state so when state changes, the input on the view reflects that latest change */}
        {/* We also need to pass an es6 arrow function to the on change to make sure that when onChange event happens, the es6 arrow function is invoked, gets it's context from the surrounding scope (render's value of this which is the AddTodo component) and then we invoke handleChange correctly (AddTodo.handleChange()) (implicit context) */}
        <input
          value={this.state.todo}
          onChange={e => this.handleChange(e.target.value)}
        />
        {/* Same things as above with the arrow function */}
        <button onClick={() => this.handleClick()}>Add Todo</button>
      </div>
    );
  }
}

export default AddTodo;
