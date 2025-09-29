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
     <form onSubmit={handleSubmit}  className='flex gap-2'>
        <input 
            type='text'
            value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             placeholder='Add a new todo'
             className=' border px-6 py-3 rounded-md'

        />
        <button
          type='submit'
          className='  px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'
        >
          Add Todo
        </button>
     </form>
  )
}

export default TodoForm

