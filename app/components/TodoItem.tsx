import React from 'react'
import { Task } from '../lib/types'
const TodoItem = ({task}:{task:Task}) => {
  return (
    <div className='overflow-x-auto justify-center'>
        <table className='table border-b'>
            <tbody>
                <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>{task.id}</td>
                <td>{task.taskName}</td>
                <td>
                    <button className="btn btn-ghost btn-xs hover:bg-green-400">Edit</button>
                    <button className="btn btn-ghost btn-xs hover:bg-red-500">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TodoItem