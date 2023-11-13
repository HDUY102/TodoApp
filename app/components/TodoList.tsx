import { Task } from '../lib/types'
import TodoItem from './TodoItem'

async function getData() {
    const res = await fetch('http://localhost:3000/api/todos',{ cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
const TodoList = async() => {
    const todoTasks = await getData();
  return (
    <div>
        {todoTasks.map((task:Task)=>(
            <TodoItem task={task}/>
        ))}
    </div>
  )
}

export default TodoList