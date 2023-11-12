import React from 'react'

const TableTodo = () => {
  return (
    <div className="overflow-x-auto">
        <table className='table'>
            {/* head */}
            <thead>
            <tr className='border-b-2'>
                <th>
                    <input type="checkbox" className="checkbox" /> ALL
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Summary</th>
                <th>Change</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr className=' border-b-2'>
                <th>
                    <input type="checkbox" className="checkbox" />
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="font-bold">1</div>
                    </div>
                </td>
                <td>
                    HTML
                    <br/>
                    <span className="badge badge-ghost badge-sm">World Wide Web</span>
                </td>
                <td>Do HTML</td>
                <th>
                    <button className="btn btn-ghost btn-xs hover:bg-green-400">Edit</button>
                    <button className="btn btn-ghost btn-xs hover:bg-red-500">Delete</button>
                </th>
            </tr>
            {/* row 2 */}
            <tr className=' border-b-2'>
                <th>
                    <input type="checkbox" className="checkbox" />
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="font-bold">2</div>
                    </div>
                </td>
                <td>
                    CSS
                    <br/>
                    <span className="badge badge-ghost badge-sm">CSS for HTML</span>
                </td>
                <td>Do CSS</td>
                <th>
                    <button className="btn btn-ghost btn-xs hover:bg-green-400">Edit</button>
                    <button className="btn btn-ghost btn-xs hover:bg-red-500">Delete</button>
                </th>
            </tr>
            {/* row 3 */}
            <tr className=' border-b-2'>
                <th>
                    <input type="checkbox" className="checkbox" />
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="font-bold">3</div>
                    </div>
                </td>
                <td>
                    JavaScript
                    <br/>
                    <span className="badge badge-ghost badge-sm">JS</span>
                </td>
                <td>Do JS</td>
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

export default TableTodo