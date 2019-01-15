import { connect } from 'react-redux'
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => {
  return ({
    todos:state.todos
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    todoClick: id => dispatch(toggleTodo(id))
  })
}

const VisibleTodos = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default VisibleTodos;