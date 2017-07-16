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
           <button onClick={(e) => this.props.removeTodo(e)} >Delete</button>
         </li>
        </ul>
      </div>
    )
  }
}

export default TodoList;
