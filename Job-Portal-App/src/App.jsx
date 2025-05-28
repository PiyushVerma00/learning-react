import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'
function App() {
  return (
   <div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-grow">
    <Outlet />
  </main>
  <Footer />
</div>

  )
}

export default App