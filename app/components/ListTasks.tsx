"use client";
import React, { useState } from "react";
import { Task } from "../lib/types";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
import TableHeader from "./TableHeader";


const ListTasks = ({ tasks }: { tasks: any }) => {
  const [tasksToList, setTasksToList] = useState(tasks);

  function getAllDeletedTasks() {
    const deletedTasks = tasks.filter((task: Task) => task.isDeleted === true);
    setTasksToList(deletedTasks);
  }

  function getAllDoneTasks() {
    const doneTasks = tasks.filter((task: Task) => task.isDone === true);
    setTasksToList(doneTasks);
  }

  function getAllTasks() {
    setTasksToList(tasks);
  }
  return (
    <div>
      <TodoHeader
        showAllDeletedItems={getAllDeletedTasks}
        showAllDoneItems={getAllDoneTasks}
        showAllItems={getAllTasks}
      />
      <TableHeader/>
      <TodoList tasksToList={tasksToList} />
    </div>
  );
};

export default ListTasks;