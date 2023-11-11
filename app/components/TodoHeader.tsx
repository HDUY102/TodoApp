import React from 'react'
import {FaArrowUpRightDots,FaClipboardList} from 'react-icons/fa6'
const TodoHeader = () => {
  return (
    <div className='text-blue-800'>
        <FaClipboardList /> Normal
        
        <FaArrowUpRightDots/> Done
    </div>
  )
}

export default TodoHeader