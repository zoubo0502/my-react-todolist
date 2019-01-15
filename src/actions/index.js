let todoId = 0;
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: todoId++,
  text
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisibility = (filter) => ({
  type: 'SET_VISIBILITY',
  filter
})

export const VISIBILITY = ({
  SHOW_ALL: 'SHOW_ALL',
  SHOW_UNCOMPLETED: 'SHOW_UNCOMPLETED',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
})