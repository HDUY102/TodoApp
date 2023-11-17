import React from 'react'
const TableTodo = () => {
  return (
    <div className="overflow-x-auto">
        <table className='table mt-6'>
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        </table>
    </div>
  )
}

export default TableTodo