//import { Router, Routes } from 'react-router-dom'
import NavTodos from './components/NavTodos';
import TodoForm from './components/TodoForm';
import { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import { collection, query, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from './firebase'

function App() {

  const [newTodo, setNewTodo] = useState([])

  //fetch the data from firebase
  useEffect(() => {
    //query
    const qy = query(collection(db, 'todos'))
    //listens to document and creates shot w/ current contents. each time it changes the shot updates 
    const shot = onSnapshot(qy, (querySnapshot) => {
      let todoArr = []
      querySnapshot.forEach((doc) => {
        todoArr.push({...doc.data(), id: doc.id})
      })
      setNewTodo(todoArr)
    })
    return () => shot()
  }, [])

  const removeTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  const toggle = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  const editTodo = async (todo, title ) => {
    await updateDoc(doc(db, 'todos', todo.id), {  title: title })
  }

  return (
    <>
    <NavTodos/>
    <TodoForm/>
    <div className='flex justify-center items-center pt-6'>
      {newTodo.map((todo) => (
        <TodoItem 
        key={todo.id} 
        removeTodo={removeTodo}
        editTodo={editTodo}
        toggle={toggle}
        />
      ))}
    </div>
    </>
  );
}

export default App;
