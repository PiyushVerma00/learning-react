import React from 'react'
import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {

  const [expense, setExpense] = useState([])

  const addExpense = (exp)=>{
      setExpense([...expense,exp])
  }

  const deleteExpense = (id)=>{
      setExpense(expense.filter((exp)=> exp.id !== id))
  }

  const totalExpense = ()=>{
    return expense.reduce((acc,curr)=> acc + Number(curr.amount), 0)
  }
  
  return (
    <div className=' min-h-screen  flex justify-center  bg-fuchsia-200 p-5'>
    <div className='  bg-fuchsia-300 p-5 h-fit rounded-xl w-2xl shadow-2xl'>
     <h1 className='text-4xl font-bold text-fuchsia-950 mb-4 text-center'>Expense Tracker</h1>
     <ExpenseForm  addExpense={addExpense} />
     <h3 className='text-purple-950 text-center mb-2 font-bold'>Total Expense: {totalExpense()}</h3>
     <ExpenseList   expense={expense} deleteExpense={deleteExpense}/>
    </div>
    </div>
  )
}

export default App