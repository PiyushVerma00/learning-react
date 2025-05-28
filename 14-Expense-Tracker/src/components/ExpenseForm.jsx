import React, { useState } from 'react'

function ExpenseForm({addExpense}) {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name.trim().length===0 || amount <= 0) return

        const newExpense = {
            id: Date.now(),
            name: name,
            amount: amount
        }

        addExpense(newExpense)
        setName('')
        setAmount("")
    }
  return (
    <form onSubmit={handleSubmit} className='"mb-4 space-y-3" '>
            <input type="text" 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder='Enter Your Expense...'
            className='w-full mb-3 p-4 rounded-lg text-black outline-none bg-gray-100'
            />
            <div className='relative'>
                <span className='absolute top-4 left-1 text-gray-500'>₹</span>
            <input type="number" 
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            placeholder='Enter Amount...'
            className=' w-full p-4 rounded-lg text-black outline-none bg-gray-100 mb-3'
            
            />
            </div>
           

            <button type='submit' className="w-28 text-center bg-purple-800 text-white p-2 rounded  hover:bg-purple-700 mb-5 "
            >
                Add Expense
            </button>
    </form>
)
}

export default ExpenseForm