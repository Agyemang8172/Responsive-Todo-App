import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import TodoForm from './Component/TodoForm'
import TodoList from './Component/TodoList'

function App() {
  const [todos,setTodos] = useState( () => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos ))
  },[todos])


  const handleAddTodo = (text)  => {
    setTodos((prevTodos) => [
      ...prevTodos,
       { id:Date.now(), text, completed:false}
    ])

  }

  const handleToggleComplete = (id) => {
    setTodos((prevTodos)=>
      prevTodos.map((todo)=>
         todo.id === id ? {...todo,completed: !todo.complete} : todo)
    )
  }


  const handleRemoveTodo = (id) => {
    setTodos((prevTodos)=>
     prevTodos.filter((todo)=>
      id !== todo.id
    ))
  }
  return (
    <div className='min-h-screen bg-gray-100 p-4'>

      <div className='max-w-xl mx-auto'>
        <Header />
      </div>

      <div>
        <TodoForm  onAddTodo={handleAddTodo}/>
      </div>

      <div>
        <TodoList  
          todos = {todos}
          onToggleComplete={handleToggleComplete}
          onRemoveTodo={handleRemoveTodo}
        />
      </div>

    </div>
  
  )
}

export default App
