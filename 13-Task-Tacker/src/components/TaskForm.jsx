import React, { useState } from 'react'

function TaskForm({addTask}) {

    const [text, setText] = useState('')
    const [category, setCategory] = useState('Personal')

    const handleSubmit = (e)=>{
            e.preventDefault()
            if(text.trim() === '') return

             const newTask = {
        id: Date.now(),
        text,
        category,
        completed:false
    }

     addTask(newTask)
    setText('')
    setCategory('Personal')
    }

   

   

  return (
    <>
        <form  className="mb-4 space-y-3"    onSubmit={handleSubmit}> 
            <input 
            type="text" 
            value={text} 
            onChange={(e)=> setText(e.target.value)}

            placeholder='Enter your Text..'
            className="w-full p-2 border rounded text-black"
            />

            <select  className='text-black w-full p-2 border rounded' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Personal">Personal</option>
                <option value="Office">Office</option>
                <option value="Home">Home</option>
            </select>
            <button
        type="submit"
        className="w-28 text-center bg-blue-800 text-white p-2 rounded border-none outline-none hover:bg-blue-700"
      >
        Add Task
      </button>
        </form>
    </>
  )
}

export default TaskForm