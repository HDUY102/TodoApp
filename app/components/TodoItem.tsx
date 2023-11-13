import React from 'react'
import {tasks} from '@/app/lib/placeholder-data'
import { Task } from '../lib/types'
const TodoItem = ({task}:{task:Task}) => {
  return (
    <div>
        <table className='table mt-5'>
            {/* head */}
            
            <tbody>
            {/* row 1 */}
            <tr>
                <th>
                    <input type="checkbox" className="checkbox" />
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div>{task.id}</div>
                    </div>
                </td>
                <td>
                    {task.taskName}
                    <br/>
                    <span className="badge badge-ghost badge-sm">Hypertext Markup Language</span>
                </td>
                <td>{task.isDone}</td>
                <th>
                    <button className="btn btn-ghost btn-xs hover:bg-green-400">Edit</button>
                    <button className="btn btn-ghost btn-xs hover:bg-red-500">Delete</button>
                </th>
            </tr>
            
            </tbody>
        </table>
    </div>
  )
}

export default TodoItem