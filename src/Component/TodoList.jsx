import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ( {todos, onToggleComplete, onRemoveTodo} ) => {
  return (
    <ul className='space-y-4'>
         {
         todos.length === 0 ? 
         (
           <li className='text-gray-500'>There are  no items here yet</li>
         )  : (
            todos.map((todo) => (
                <TodoItem 
                 key={todo.id}
                 todo={todo}
                 onToggleComplete={onToggleComplete}
                 onRemoveTodo = {onRemoveTodo}
                />

            ))
         )
        }
    </ul>
  )
}

export default TodoList
