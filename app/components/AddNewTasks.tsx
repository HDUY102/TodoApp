// // import React, {useState} from 'react'
// // import { Task } from "../lib/types";
// // import AddTaskForm from "./AddTaskForm";

// // const AddNewTasks = ({ tasks }: { tasks: any }) => {
// //     const [addToTask, setAddToTask] = useState(tasks);

// //     function getAddNewTask() {
// //         const addTask = tasks.filter((task: Task) => task.isDeleted === true);
// //         setAddToTask(addTask);
// //     }

// //     return (
// //         <div>
// //             <AddTaskForm addNewTask={getAddNewTask}/>
// //         </div>
// //     )
// // }

// // export default AddNewTasks
// import React, { useState } from 'react';
// import { Task } from "../lib/types";
// import AddTaskForm from "./AddTaskForm";

// interface AddNewTasksProps {
//   tasks: Task[];
// }

// const AddNewTasks: React.FC<AddNewTasksProps> = ({ tasks }) => {
//   const [addToTask, setAddToTask] = useState(tasks);

//   function getAddNewTask() {
//     const addTask = tasks.filter((task: Task) => task.isDeleted === true);
//     setAddToTask(addTask);
//   }

//   return (
//     <div>
//       <AddTaskForm addNewTask={getAddNewTask} />
//     </div>
//   );
// };

// export default AddNewTasks;
