import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 10
 let [counter, setCounter] =   useState(15)
  
  
const addValue = ()=>{
if(counter>=20) return
setCounter((prevCounter)=> prevCounter+1)
setCounter((prevCounter)=> prevCounter+1)
setCounter((prevCounter)=> prevCounter+1)
setCounter((prevCounter)=> prevCounter+1)
console.log("Clicked",counter);
}

const removeValue = ()=>{
if(counter<=0) return
  setCounter(counter-1)
}

  return (
    <>
      
      <h1>Vite + React</h1>
      <h2>Counter Value:{counter}</h2>

      <button
      onClick={addValue}
      >Add Value:{counter}</button>
      <br />
      <button
      onClick={removeValue}>remove Value:{counter}</button>
   
    </>
  )
}

export default App
