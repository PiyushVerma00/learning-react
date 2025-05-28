import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks,setTasks] = useState([])
  const [filter, setFilter] = useState('All')

  const addTask = (task)=>{
      setTasks([...tasks, task])
  }


  const deleteTask = (id)=>{
      setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleComplete = (id)=>{
    setTasks(tasks.map((task)=> task.id ===id ? {...task, completed: !task.completed}: task))
  }

  const filteredTask = filter === 'All' ? tasks : tasks.filter((task)=> task.category === filter)

  return (
    <>
     <div className=' h-screen bg-gray-400 p-6 rounded'> 

      <div className=' bg-gray-200 rounded shadow p-4'>
        <h1 className='text-black text-6xl font-bold text-center mb-5'>Task Tracker</h1>
      <TaskForm addTask={addTask}/>

      <TaskList 
       tasks={filteredTask}
       deleteTask={deleteTask}
       toggleComplete = {toggleComplete}
        />
      </div>

     </div>
    </>
  )
}

export default App
