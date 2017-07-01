/**
 * Created by shubham on 1/7/17.
 */
import React from 'react';

class TodoList extends React.Component {
  render() {
    const { todos} = this.props;
    console.log(todos);
    return (
      <div>
        <ul>
          hii the todo list  will be soon here.

        </ul>
      </div>
    )
  }
}

export default TodoList;
