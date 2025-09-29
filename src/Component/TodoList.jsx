import React from 'react'
import TodoItems from 'react'

const TodoList = ( {todos, onToggleComplete, onRemoveTodo} ) => {
  return (
    <ul className='space-y-4'>
         {
         todo.length === 0 ? 
         (
           <li className='text-gray-500'>There are  no items here yet</li>
         )  : (
            todos.map((todo) => (
                <TodoItems 
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
