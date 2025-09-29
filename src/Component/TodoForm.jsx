import React, { useState } from 'react'

const TodoForm = ({ onAddTodo }) => {
    const [inputValue,setInputValue] = useState("")

    const handleSubmit =  (e)  =>  {
        e.preventDefault();
          if ( inputValue.trim() !== "") {
             onAddTodo(inputValue)
             setInputValue("")
          }

    }
  return (
     <form onSubmit={ handleSubmit }  className='flex gap-2'>
        <input 
            type='text'
            value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             placeholder='Add a new todolist'
             className=''

        />
        <button
          type='submit'
          className=' p-6 bg-blue-500 text-white'
        >
          Add Todo
        </button>
     </form>
  )
}

export default TodoForm

