import React from 'react'
import { Task } from '../lib/types'
const TodoItem = ({task}:{task:Task}) => {
  return (
    <div>
            <tr className='table border-b'>
                <th>
                    <input type="checkbox" className="checkbox" />
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                            </div>
                        </div>
                        <div className="font-bold">{task.id}</div>
                    </div>
                </td>
                <td>
                    {task.taskName}
                    <br/>
                    <span className="badge badge-ghost badge-sm">Hypertext Markup Language</span>
                </td>
                <th>
                    <button className="btn btn-ghost btn-xs hover:bg-green-400">Edit</button>
                    <button className="btn btn-ghost btn-xs hover:bg-red-500">Delete</button>
                </th>
            </tr>
    </div>
  )
}

export default TodoItem