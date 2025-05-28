import React from 'react'

function TaskItem({task ,deleteTask ,toggleComplete}) {
  return (
    <>
    <li className='bg-white shadow-md rounded-lg px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <input type="checkbox" 
                    checked = {task.completed}
                    onChange={()=>toggleComplete(task.id)}
                    className='w-5 h-5 text-green-500'
            />
                <div>
                    <p className={`font-medium ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}>{task.text}</p>
                    <p className=' text-sm text-blue-500'>{task.category}</p>
                </div>
        </div>
        <button
        onClick={()=>deleteTask(task.id)}
        className='text-red-500 hover:text-red-700 font-semibold'
        >✕</button>
    </li>
    </>
  )
}

export default TaskItem