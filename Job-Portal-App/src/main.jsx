import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Jobs from './components/Jobs.jsx'
import JobDetails from './components/JobDetails.jsx'
import AddJob from './components/AddJob.jsx'
import About from './components/About.jsx'
import {createBrowserRouter, createRoutesFromChildren, Route, RouterProvider }  from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element= {<App/>} >
      <Route index  element={<Home/>} />
      <Route path="jobs" element={<Jobs/>} />
      <Route path="jobs/:id" element={<JobDetails/>} />
      <Route path="addJob" element={<AddJob/>} />
      <Route path="about" element={<About/>} />


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider  router={router}/>
  </StrictMode>,

)
