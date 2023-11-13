import Link from 'next/link'
import React from 'react'
import HeaderNav from '../components/HeaderNav'
import AddTaskForm from '../components/AddTaskForm'
import TodoHeader from '../components/TodoHeader'
import TableTodo from '../components/TableTodo'
import TodoList from '../components/TodoList'

const TodoAppPage = () => {
  return (
    <div>
        <HeaderNav/>
        <AddTaskForm/>
        <TodoHeader/>
        <TableTodo/>
        <TodoList/>
    </div>
  )
}

export default TodoAppPage