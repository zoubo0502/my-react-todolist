import React from 'react';
import PropTypes from 'prop-types'


const Todo = ({text, onClick}) => {
  return (
    <li onClick={onClick} >
      {text}
    </li>
  )
};

Todo.prototype = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo