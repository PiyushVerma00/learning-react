import { useState,useEffect } from 'react'
import './App.css'
import { useDispatch} from "react-redux"
import authService from './appwrite/auth'
import { login , logout } from './store/AuthSlice'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Outlet} from "react-router-dom"

function App() {
 const [loading, setLoading] = useState(true)
 const dispatch = useDispatch()

 useEffect(()=>{
  authService.getCurrentUSer()
  .then((userData)=>{

    if (userData) {
      dispatch(login(userData))
    } else {
      dispatch(logout())
    }
  })
  .finally(()=>setLoading(false))

 },[])

  return !loading ? (
    <div className=' min-h-screen w-full flex flex-wrap content-between bg-gray-600'>
      <div className='w-full  block'>
        <Header />
        <main>
           todo:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
