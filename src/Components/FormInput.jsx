import React from 'react'
import { useState, useContext, } from 'react'  
import { DataContext } from './DataProvider'

export const FormInput = () => {
  const [todos,setTodos] = useContext(DataContext)
  const [todoName,setTodoName] = useState('');

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos,{name:todoName,complete:false}])
    setTodoName('');
  }

  return (
    <form onSubmit={addTodo}>
    <input type='text' name="todos" id="todos" value={todoName} required placeholder='Enter your activity' onChange={e=>setTodoName(e.target.value)}/>
    <button type='submit'>Create</button>
  </form>
  )
}
