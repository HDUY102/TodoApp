import React from 'react'
import HeaderNav from './HeaderNav'
import AddTaskForm from './AddTaskForm'
import ListTasks from './ListTasks'

async function getAllTodoTasks() {
  const res = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const MyTodoApp = async () => {
  const todoTasks = await getAllTodoTasks();
  return (
    <div>
        <HeaderNav/>
        <AddTaskForm/>
        <ListTasks tasks={todoTasks}/>
    </div>
  )
}

export default MyTodoApp