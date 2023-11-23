import { Task } from '../lib/types'
import TodoItem from './TodoItem'


const TodoList = ({tasksToList}:{tasksToList:Task[]}) => {
    
  return (
    <div>
        {tasksToList.map((task:Task)=>(
            // <TodoItem task={task}/> //code ban đầu
            <TodoItem key={task.id} task={task}/> //fix warning
        ))}
    </div>
  )
}

export default TodoList