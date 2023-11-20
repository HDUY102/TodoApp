'use client'

import React from 'react'
import AddTaskForm from '../components/AddTaskForm'
import TodoHeader from '../components/TodoHeader'
import TableHeader from '../components/TableHeader'
import TodoList from '../components/TodoList'

async function getData() {
  const res = await fetch('http://localhost:3000/api/todos',{ cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const TodoAppPage = async () => {

   
  const todoTasks = await getData();

  let tasksToList = todoTasks;

  function showAllDeletedItems(){
    alert('ababcbc')
    tasksToList = todoTasks.filter(()=>tasksToList.isDeleted==true);
    console.log(tasksToList)
  }

  function showAllDoneItems(){
    tasksToList = todoTasks.filter(()=>tasksToList.isDone==true);
  }

  function showAllItems(){
    tasksToList = todoTasks
  }

  return (
    <div>
        <AddTaskForm/>
        <TodoHeader showAllDeletedItems={showAllDeletedItems} showAllDoneItems={showAllDoneItems} showAllItems={showAllItems}/>
        <TableHeader/>
        <TodoList tasksToList={tasksToList}/>
    </div>
  )
}

export default TodoAppPage