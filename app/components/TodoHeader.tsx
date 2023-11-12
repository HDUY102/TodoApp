import React from 'react'
import {FaFileCircleXmark,FaFileLines,FaFileCircleCheck} from 'react-icons/fa6'
const TodoHeader = () => {
  return (
    <div className='font-semibold flex justify-evenly text-center'>
        <div>
          <FaFileCircleXmark className='text-red-600 ml-11 mt-10 mb-5 w-14 h-10'/> 
          <a href='#' className='ml-10'>Normal</a>
        </div>
        <div>
          <FaFileLines className='text-yellow-400 mt-10 mb-5 w-14 h-10'/>
          <a href='#'>All</a>
        </div>
        <div>
          <FaFileCircleCheck className='text-blue-400 ml-2 mt-10 mb-5 w-14 h-10'/> 
          <a href='#'>Done</a>
        </div>
    </div>
  )
}

export default TodoHeader