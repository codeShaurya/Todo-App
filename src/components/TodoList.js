/**
 * Created by shubham on 1/7/17.
 */
import React from 'react';

class TodoList extends React.Component {


  render() {
    const {todo}= this.props;
    const {index}=this.props;
        return (
      <div  >
        <ul>
         <li key={index + 1}>
           <strong>{todo.text}</strong>
           <button onClick={() => this.props.removeTodo(index)} >Delete</button>
           <button onClick={() => this.props.editTodo(index)} >Edit</button>
         </li>
        </ul>
      </div>
    )
  }
}

export default TodoList;
