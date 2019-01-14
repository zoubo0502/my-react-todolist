import React from 'react'
import Todo from './components/Todo'

export const TestComponent = () => {
  return (
    <div>
      <Todo text={'testTodo'} onClick={()=>alert('ok')}></Todo>
    </div>
  )
}