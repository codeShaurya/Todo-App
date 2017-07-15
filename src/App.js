import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);


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
  removeTodo(index){
      console.log('deleting todo');
      console.log(index);

  };

  editTodo(index){
    console.log('editing');
    console.log(index);
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
              .map((key, index) => <TodoList index={index} todo={this.state.todos[key]}  removeTodo={this.removeTodo}
                                             editTodo={this.editTodo}
              />)
          }
        </ul>
      </div>
    );
  }
}

export default App;
