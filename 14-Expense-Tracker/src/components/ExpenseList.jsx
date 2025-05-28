import React from 'react'

function ExpenseList({expense,deleteExpense}) {
  if(expense.length === 0){
        return(
            <p className='text-center text-gray-500 mt-4'>
                No Expense Found. Add Some!
            </p>
        )
    }
  return (
    <div className='w-full bg-gray-100 p-3 rounded-md ' >
        {expense.map((exp)=>(
          <div
          key={exp.id} 
          className='bg-white p-3 rounded-lg shadow-md m-2'
          >
            <div>
              <h2 className='text-2xl font-bold mb-1 '>{exp.name}</h2>
              <p className='mb-2 text-lg '>₹{exp.amount}</p>
            </div>
            <button onClick={()=>deleteExpense(exp.id)} className='bg-red-700 text-white px-2 py-1 rounded-xl text-sm'>Delete</button>

          </div>
        ))}
    </div>
  )
}

export default ExpenseList