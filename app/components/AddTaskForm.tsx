import React from 'react'

const AddTaskForm = () => {
  return (
    <div>
        {/* Add task form BEGIN */}
        <form action="aaa" className='my-4 flex justify-center'>
                <input type="text" placeholder="Type here" 
                    className="input input-bordered input-success w-full max-w-xs mr-2" />
                <button className="btn btn-outline btn-success">ADD NEW TASK</button>
            </form>
        {/* Add task form END */}
    </div>
  )
}

export default AddTaskForm