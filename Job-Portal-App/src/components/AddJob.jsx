import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function AddJob() {
  const Navigate  = useNavigate()
  const [formData, setFormData] = useState({title:'',company:'',location:'',description:'',salary:''})

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=>{
      e.preventDefault()
      console.log("job Added :",formData );
      alert('job submited check Console')
      
      setFormData({title:'', location:'', company:'',description:'', salary:''})
  }
  return (
    <section className='min-h-screen flex flex-col justify-center  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6'>

    <div className='max-w-lg mx-auto  p-6 bg-white rounded shadow'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800 text-center'>Add A New Job</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          {['title', 'company','location','description','salary'].map((field)=>(
            <input
              key={field}
              type='text'
              name= {field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.toUpperCase()}
              required
              className='w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 transition-all'
            />
          ))}
          <div className='flex justify-between'>

          <button type='submit' className='bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition'>Add Job</button>
          <button onClick={()=> Navigate(-1)} className='bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition'>Back</button>
          </div>
        </form>
    </div>
    </section>
  )
}

export default AddJob