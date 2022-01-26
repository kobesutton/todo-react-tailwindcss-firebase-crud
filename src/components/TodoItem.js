import { useState } from "react"

const TodoItem = ({ todo, removeTodo, editTodo, toggle }) => {

    const [newTodo, setNewTodo] = useState(todo.title)

    const handleTodoChange = e => {
        if(todo.completed === true) {
            setNewTodo(todo.title)
        } else {
            todo.title = ''
            setNewTodo(e.target.value)
        }
    }
    return (
        <div>
           <input 
           value={ todo.title === '' ? newTodo : todo.title }
           type="text" 
           className={ todo.completed ? 'line-through text-red-300' : ''} 
           onChange={handleTodoChange}
           />
           <div>
           <button 
           onClick={() => removeTodo(todo.id)}>
             <svg id ='i' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg></button>

            <button onClick = {() => editTodo(todo, newTodo)}>
            <svg id ='i' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg></button>

        <button id='i' onClick={() => toggle(todo)}>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6" fill="none" 
        viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
        </button>

           </div>
        </div>
    )
}

export default TodoItem
