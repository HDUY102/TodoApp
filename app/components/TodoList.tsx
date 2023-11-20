'use client'
import { Task } from '../lib/types'
import TodoItem from './TodoItem'


const TodoList = ({tasksToList}:{tasksToList:Task[]}) => {
    
  return (
    <div>
        {tasksToList.map((task:Task)=>(
            <TodoItem task={task}/>
        ))}
    </div>
  )
}

export default TodoList