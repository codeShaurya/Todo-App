import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);

    // getinitialState
    this.state = {
      todos: {}
    };
  }
  addTodo(todo){
    const timestamp = Date.now();
    const todos = {...this.state.todos};
    todos[`todo-${timestamp}`] = todo;
    this.setState({ todos });
  }
  render() {
    return (
      <div >
        <Header/>
        <Input addTodo={this.addTodo}/>
        <ul >
          {
            Object
              .keys(this.state.todos)
              .map(key => <TodoList key={key} todo={this.state.todos[key]}/>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
