// import React, { useState } from 'react';

// interface AddTaskFormProps {
//   addNewTask: (taskName: string) => void;
// }

// const AddTaskForm: React.FC<AddTaskFormProps> = ({ addNewTask }) => {
//   const [newTaskName, setNewTaskName] = useState('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setNewTaskName(event.target.value);
//   };

//   const handleAddNewTask = () => {
//     if (newTaskName.trim() !== '') {
//       addNewTask(newTaskName);
//       setNewTaskName('');
//     }
//   };

//   return (
//     <div>
//       {/* Add task form BEGIN */}
//       <form action="/todos" className='my-4 flex justify-center'>
//         <input
//           type="text"
//           placeholder="Type here"
//           className="input input-bordered input-success w-full max-w-xs mr-2"
//           value={newTaskName}
//           onChange={handleInputChange}
//         />
//         <button className="btn btn-outline btn-success" onClick={handleAddNewTask}>
//           ADD NEW TASK
//         </button>
//       </form>
//       {/* Add task form END */}
//     </div>
//   );
// };

// export default AddTaskForm;