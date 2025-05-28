import React from 'react'
import './App.css'
import { useState } from 'react'
function App() {
let [counter,setCounter] = useState(15)
  // let counter = 15

  const addValue = ()=>{
    if(counter<20){
      setCounter(counter + 1)
    }
  }

  const deleteValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
   <>
   <h1>Chai aur React</h1>
   <h2> Counter Value: {counter}</h2>

   <button onClick={addValue}>Add Value :{counter}</button>
   <br />
   <button onClick={deleteValue}>Delete Value</button>
   <p>Value :{counter}</p>
   </>
  )
}

export default App