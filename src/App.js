import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);


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
  removeTodo(itemTobeDeleted){
      const todos=this.state.todos;
      const key=Object.keys(todos);
      const newkey=key.filter((key)=>{
          if(todos[key]!==itemTobeDeleted){
              return todos[key];
          }});
      const newTodo=newkey.map((key)=>{
          return todos[key];
      });
      this.setState({todos:newTodo});
  };

  render() {
    return (
      <div >
        <Header/>
        <Input addTodo={this.addTodo}/>
        <ul >
          {
            Object
              .keys(this.state.todos)
              .map((key, index) => <TodoList index={index} todo={this.state.todos[key]}  removeTodo={this.removeTodo.bind(this,this.state.todos[key])}
              />)
          }
        </ul>
      </div>
    );
  }
}

export default App;
