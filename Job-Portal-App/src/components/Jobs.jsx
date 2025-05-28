import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import jobs from './Jobs'
function Jobs() {

  const [jobList, setJobList] = useState(jobs)

  const deleteJob = (id)=>{
    const updatedJobList = jobList.filter((job)=> job.id !== id)
    setJobList(updatedJobList)
  }

  return (
    <section className='min-h-screen flex flex-col justify-center  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6'>

   
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8'>
      {jobList.map((job)=>(
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
  <h2 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h2>
  <p className="text-gray-600 mb-1">{job.company}.</p>
  <p className="text-gray-500 text-sm mb-2">{job.location} • {job.type}</p>
  <p className="text-gray-400 text-xs mb-4">{job.posted}</p>
  
  <div className="flex justify-between items-center">
    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
      Remote
    </span>
    <Link
     to= {`/jobs/${job.id}`}
      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
    >
      View Details →
    </Link>
  </div>
  <button onClick={()=>deleteJob(job.id)} 
    className='mt-3 text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded'
    >Delete</button>
</div>
      ))}
    </div>
     </section>
  )
}

export default Jobs