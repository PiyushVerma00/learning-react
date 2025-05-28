import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, deleteTask, toggleComplete}) {
    if(tasks.length === 0){
        return(
            <p className='text-center text-gray-500 mt-4'>
                No Tasks Found. Add Some!
            </p>
        )
    }
  return (
    <>
   <ul>
    {tasks.map((task)=>(
        <TaskItem 
         key={task.id}
         task={task}
         deleteTask={deleteTask}
         toggleComplete={toggleComplete}
         />
    ))}
   </ul>
    </>
  )
}

export default TaskList