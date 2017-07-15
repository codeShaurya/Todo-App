
import React, { Component } from 'react';



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
    if (this.text.value === '') {
      alert("You must write something!");
    }
    else{
      const todo={
        text:this.text.value};
      this.props.addTodo(todo);
    }


   this.setState({
     text:'',
   });
  }

  render() {
    return (
      <div className="App">
        <form  id="myform" className="header" onSubmit={(e) => this.onSubmit(e)}>
          <input type="text" ref={(input) => this.text = input} onChange={this.onChange} value={this.state.text} placeholder="Enter a task" />
          <input type="submit" className="addBtn" value="ADD TODO"/>
        </form>
      </div>
    );
  }
}

export default Input;