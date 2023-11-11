import Link from 'next/link'
import React from 'react'
import HeaderNav from '../components/HeaderNav'
import AddTaskForm from '../components/AddTaskForm'
import TodoHeader from '../components/TodoHeader'

const TodoAppPage = () => {
  return (
    <div>
        <HeaderNav/>
        <AddTaskForm/>
        <TodoHeader/>
    </div>
  )
}

export default TodoAppPage