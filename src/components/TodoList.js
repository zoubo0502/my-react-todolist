import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo'


const TodoList = ({todos, todoClick}) => {
  return (
    todos.map((todo) => <Todo key={todo.id} {...todo} onClick={()=>todoClick(todo.id)}></Todo>)
  )
}

TodoList.prototype = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  todoClick: PropTypes.func
}

export default TodoList