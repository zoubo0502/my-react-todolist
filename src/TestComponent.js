import React from 'react'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
export const TestComponent = () => {
  const todos = [{id:1,text:'test1',completed:false},{id:2,text:'test2',completed:true}]
  return (
    <div>
      <Todo text={'testTodo'} onClick={()=>alert('ok')}></Todo>
      <TodoList todoClick={()=>alert('testTodoList')} todos={todos}></TodoList>
    </div>
  )
}