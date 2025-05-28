import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [isNumberAllowed, setIsNumberAllowed] = useState(false)
  const [isCharAllowed, setIsCharAllowed] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{

    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(isNumberAllowed) str += "0123456789"
    if(isCharAllowed) str += "@_-#*"
    

    for(let i=0; i<=length; i++){
        let char = Math.floor(Math.random() * str.length -1)
        pass += str.charAt(char)
    }

    setPassword(pass)
  }, 
  [length, isCharAllowed,isNumberAllowed, ])

  useEffect(()=>{
    passwordGenerator()
  },[length,isNumberAllowed, isCharAllowed, passwordGenerator])


  const CopyToClipBoard = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
  },[password])
  return (
   <>
   <div className='bg-gray-800 max-w-md w-full p-4 mx-auto my-10 rounded-lg'>
    <h1 className='text-center text-blue-300 text-3xl mb-4'>Password Generator</h1>
    <div className='flex  shadow rounded-lg  mb-4'>
    <input type="text" 
        value={password}
        className=' bg-gray-300 outline-none w-full py-1 px-3 rounded-l-xl text-black'
        // onChange={(e) => setPassword(e.target.value)}
        readOnly
        ref={passwordRef}
    />
    <button onClick={CopyToClipBoard}
  
     className='px-3 py-0.5 bg-blue-800 text-white rounded-r-xl cursor-pointer hover:bg-blue-950 transition-all duration-800'>Copy</button>
    </div>
    <div className='flex text-m justify-evenly'>
      <div className='flex items-center gap-x-2'>
        <input type="range" 
        value={length} 
        min={8}
        max={15}
        onChange={(e)=> setLength(e.target.value)}
        className='cursor-pointer'
        />
        <label className='text-blue-300 '>Length: {length}</label>
      </div>
       <div className='flex items-center gap-x-2'>
      <input type="checkbox" 
      onChange={()=> {setIsNumberAllowed((prev)=> !prev)}}
      defaultChecked={isNumberAllowed}
      id='numberInput'
      className='outline-none'
      />
      <label htmlFor='numberInput' className='text-blue-300'>Number</label>
    </div>

    <div className='flex gap-x-2 items-center'>
      <input type="checkbox" 
      defaultChecked={isCharAllowed}
      onChange={()=>{setIsCharAllowed((prev)=>!prev)}}
      id='charInput'
      className='outline-none'
      />
      <label htmlFor= 'charInput' className='text-blue-300'>Characters</label>
    </div>
    </div>
   

   </div>
   </>
  )
}

export default App