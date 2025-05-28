import React, { useEffect, useState ,useRef} from 'react'

function App() {

  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)


  const startBtn = ()=>{
    if(!isRunning)
      setIsRunning(true)
  }

  const PauseBtn = ()=>{
     setIsRunning(false)
  }

  const resetBtn = ()=>{
    setIsRunning(false)
    setMinutes(25)
      clearInterval(intervalRef.current);
    setSeconds(0)
  }

  const intervalRef = useRef(null)

    useEffect(()=>{
     if(isRunning){
      intervalRef.current = setInterval(() => {
        setSeconds((prevSec)=>{
          if(prevSec ===0){
            if(minutes===0){
              clearInterval(intervalRef.current)
              setIsRunning(false)
              return 0
            }
            else{
            setMinutes((prevMinutes) => prevMinutes - 1)
              return 59
            }
          }
          else{
            return prevSec - 1
          }
        })
      }, 1000);
     }

     return ()=> clearInterval(intervalRef.current)
    },[isRunning])

  return (
    <div className='flex flex-col h-screen w-full items-center justify-center'>
        <div className=' min-w-sm bg-orange-100/30 p-4 text-center rounded-2xl mb-3 '>
          <h1 className='text-white font-bold text-2xl mb-8'>Pomodoro Timer</h1>

          <h1 className='text-9xl text-white font-bold mb-9'>{minutes<10 ? "0" + minutes : minutes}:{seconds<10 ? '0' + seconds : seconds}</h1>

         <div className='space-x-4'>
          <button onClick={startBtn} className="bg-white text-red-900 px-6 py-2 rounded font-semibold hover:bg-red-100 transition">Start</button>
          <button onClick={PauseBtn} 
          className="bg-white text-red-900 px-6 py-2 rounded font-semibold hover:bg-red-100 transition">Pause</button>
          <button onClick={resetBtn} 
          className="bg-white text-red-900 px-6 py-2 rounded font-semibold hover:bg-red-100 transition">Reset</button>
          
         </div>

          
        </div>
          <p className="text-white text-xl font-semibold">
        {isRunning ? 'Focus Time!' : 'Take a Breath!'}
      </p>
    </div>
  )
}

export default App