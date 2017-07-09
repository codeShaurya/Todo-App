/**
 * Created by shubham on 1/7/17.
 */
import React from 'react';

class TodoList extends React.Component {
  render() {
    const {todo}= this.props;
        return (
      <div className="TodoList">
        <ul>
         <li> {todo.text}</li>
          </ul>
      </div>
    )
  }
}

export default TodoList;
