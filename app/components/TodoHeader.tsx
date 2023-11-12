import React from 'react'
import {FaFaceAngry,FaFaceGrinBeam,FaFaceGrinHearts} from 'react-icons/fa6'
const TodoHeader = () => {
  return (
    <div className=' flex justify-center font-semibold px-1'>
        <FaFaceAngry className='text-red-600'/> <br/> Normal
        <FaFaceGrinBeam className='text-yellow-400'/> <br/> All
        <FaFaceGrinHearts className='text-blue-400'/> <br/> Done
    </div>
  )
}

export default TodoHeader