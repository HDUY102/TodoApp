import Link from 'next/link'
import React from 'react'
import HeaderNav from '../components/HeaderNav'
import AddTaskForm from '../components/AddTaskForm'
import TodoHeader from '../components/TodoHeader'
import TableTodo from '../components/TableTodo'

const TodoAppPage = () => {
  return (
    <div>
        <HeaderNav/>
        <AddTaskForm/>
        <TodoHeader/>
        <TableTodo/>
    </div>
  )
}

export default TodoAppPage