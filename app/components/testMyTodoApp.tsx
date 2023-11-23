// "use client"
// import React,{useState,useEffect} from 'react'
// import HeaderNav from './HeaderNav'
// import AddTaskForm from './AddTaskForm'
// import ListTasks from './ListTasks'

// async function getAllTodoTasks() {
//   const res = await fetch("http://localhost:3000/api/todos", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

// const MyTodoApp: React.FC =  () => {
//   const [todoTasks, setTodoTasks] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const tasks = await getAllTodoTasks();
//         setTodoTasks(tasks);
//       } catch (error) {
//         alert('Lỗi khi lấy dữ liệu: ');
//       }
//     };

//     fetchData();
//   }, []);
//   const addNewTask = async (taskName: string) => {
//     try {
//       const res = await fetch("http://localhost:3000/api/todos", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           text: taskName,
//         }),
//       });
//       console.log(taskName)

//       if (!res.ok) {
//         throw new Error("Lỗi khi thêm công việc mới");
//       }

//       const updatedTasks = await res.json();
//       setTodoTasks(updatedTasks);

//       console.log(taskName);
//     } catch (error) {
//       alert('Lỗi khi thêm công việc mới: ');
//     }
//   };
//   // const todoTasksnew = await getAllTodoTasks();
//   return (
//     <div>
//         <HeaderNav/>
//         <AddTaskForm addNewTask={addNewTask}/>
//         <ListTasks tasks={todoTasks}/>
//     </div>
//   )
// }

// export default MyTodoApp