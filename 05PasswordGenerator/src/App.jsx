import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const [password , setPassword] = useState('')
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
  if(charAllowed) str+="@_-#*"

  for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length+1)
       pass += str.charAt(char)
  }

  setPassword(pass)

  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
     <div className='w-full max-w-md bg-gray-700 mx-auto my-10 px-4 py-3 rounded-lg text-center
      text-orange-500'>
        <h1 className='text-white text-center mb-2'>Password Generator</h1>
      <div className='flex overflow-hidden shadow rounded-lg bg-white mb-4'>
        <input 
        type="text"
        value={password}
        placeholder='password'
        className='outline-none   w-full py-1 px-3'
        readOnly
        ref={passwordRef}
           />
           <button onClick={copyPasswordToClipBoard}
           className='bg-blue-700 outline-none text-white py-0.5 shrink-0 px-3 cursor-pointer hover:bg-blue-950 transition-all duration-200'>Copy</button>
      </div>
      <div className='flex text-m gap-x-3 justify-evenly'>
        <div className='flex items-center gap-x-1'>
          <input onChange={(e)=>{setLength(e.target.value)}}
          type="range"
          min={8}
          max={20}
          value={length}
          className='cursor-pointer '
           />
           <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input onChange={()=>{setNumberAllowed((prev)=> !prev)}}
          type="checkbox"
          id='numberInput'
          defaultChecked={numberAllowed}

          className='outline-none'
           />
           <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input onChange={()=>{setCharAllowed((prev)=> !prev)}}
          type="checkbox"
          id='charInput'
          defaultChecked={charAllowed}

          className='outline-none'
           />
           <label htmlFor='charInput'>Characters</label>
        </div>
        
      </div>
     </div>
    </>
  )
}

export default App
