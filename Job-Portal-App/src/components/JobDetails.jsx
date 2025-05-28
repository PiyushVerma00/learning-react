import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import jobs from './Jobs';
function JobDetails() {
const { id } = useParams();
const Navigate  = useNavigate()

const job = jobs.find((job)=> job.id === parseInt(id))

if(!job){
  return <div className='text-red-500 text-center mt-10'>Job Not Found</div>
}



  return (
    <section className='min-h-screen flex flex-col justify-center  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6'>
      <div className='max-w-3xl bg-white rounded-lg shadow p-6 my-10 mx-auto'>

        <h1 className='text-4xl font-bold text-gray-800 mb-4'>{job.title}</h1>
        <p className='text-2xl font-semibold text-gray-700 mb-3'>{job.company}</p>
        <p className='text-sm text-gray-500 mb-4'>{job.location} • {job.type}</p>
        {/* <p className='text-md text-gray-700 mb-6'>{job.type}</p> */}
        <p className='text-lg text-gray-700 font-semibold mb-3'>{job.description}</p>
        <p className='text-sm font-semibold text-gray-700 mb-6'> Salary: {job.salary}</p>

        <button
        onClick={()=> Navigate(-1)}
        className=' px-3 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-xl'
        >Back</button>
      </div>
    </section>
  )
}

export default JobDetails