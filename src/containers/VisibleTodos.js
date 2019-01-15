import { connect } from "react-redux";
import { toggleTodo, VISIBILITY } from "../actions";
import TodoList from "../components/TodoList";

const getFilterTodos = (todos, filterType) => {
  switch (filterType) {
    case VISIBILITY.SHOW_ALL:
      return todos;
    case VISIBILITY.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VISIBILITY.SHOW_UNCOMPLETED:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getFilterTodos(state.todos, state.visibility)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    todoClick: id => dispatch(toggleTodo(id))
  };
};

const VisibleTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodos;
