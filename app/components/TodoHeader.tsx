import Link from 'next/link'
import React from 'react'
import {FaFileCircleXmark,FaFileLines,FaFileCircleCheck} from 'react-icons/fa6'

interface TodoHeaderProps {
  showAllDeletedItems: () => void;
  showAllDoneItems: () => void;
  showAllItems: () => void;
}

const TodoHeader = ({showAllDeletedItems,showAllDoneItems,showAllItems}:TodoHeaderProps) => {
  
  return (
    <div className='font-semibold flex justify-evenly text-center'>
        <div>
          <Link href={"/todos"} onClick={showAllDeletedItems}><FaFileCircleXmark className='text-red-600 ml-11 mt-10 mb-5 w-14 h-10'/> </Link>
          <button onClick={showAllDeletedItems} className='ml-10'>Deleted</button>
        </div>
        <div>
          <Link href={"/todos"} onClick={showAllDoneItems}><FaFileLines className='text-yellow-400 mt-10 mb-5 w-14 h-10'/></Link>
          <button onClick={showAllDoneItems} className='ml-10'>Done</button>
        </div>
        <div>
          <Link href={"/todos"} onClick={showAllItems}><FaFileCircleCheck className='text-blue-400 ml-2 mt-10 mb-5 w-14 h-10'/></Link> 
          <button onClick={showAllItems} className='ml-10'>All</button>
        </div>
    </div>
  )
}

export default TodoHeader