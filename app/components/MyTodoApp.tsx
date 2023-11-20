import Link from 'next/link'
import React from 'react'
import AddTaskForm from '../components/AddTaskForm'
import TodoHeader from '../components/TodoHeader'
import TableHeader from '../components/TableHeader'
import TodoList from '../components/TodoList'

const TodoAppPage = () => {
  return (
    <div>
        <AddTaskForm/>
        <TodoHeader/>
        <TableHeader/>
        <TodoList/>
    </div>
  )
}

export default TodoAppPage