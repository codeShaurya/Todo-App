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
      todos: {},
    };
  }
  addTodo(todo){
    const timestamp = Date.now();
    const todos = {...this.state.todos};
    todos[`${timestamp}`] = todo;
    this.setState({ todos });
  }
  render() {
    const todos=this.state.todos;
    return (
      <div>
        <Header/>
        <Input addTodo={this.addTodo}/>
        <TodoList  todos={todos}/>
      </div>
    );
  }
}

export default App;
