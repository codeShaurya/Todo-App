
import React, { Component } from 'react';

import './style/Header.css';


// Long Form
class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      text: ''};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({text: e.target.value});

  }
  onSubmit(e) {
    e.preventDefault();
    const todo={
      task:this.text.value};
    this.props.addTodo(todo);


   this.setState({
     text:'',
   });
  }

  render() {
    return (
      <form  id="myform" onSubmit={(e) => this.onSubmit(e)}>
        <input type="text" ref={(input) => this.text = input} onChange={this.onChange} value={this.state.text}  />
        <input type="submit"/>
      </form>
    );
  }
}

export default Input;