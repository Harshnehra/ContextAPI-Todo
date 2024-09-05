import React, { useEffect, useState } from 'react'
import Heading from './components/Heading/Heading'
import Input from './components/Input/Input'
import TodoList from './components/TodoList/TodoList'
import {TodoProvider} from './contexts/todocontext'

function App() {

  const [todos , setTodos] = useState([])

  const addtodo = (todo) => {
    setTodos((prev) => [{...todo}, ...prev])
  }

  const updatetodo = (id, todo) => {
    setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo) ))
  }

  const deletetodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id ))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addtodo, updatetodo, deletetodo}}>
    <Heading />
    <Input />
    {todos.map((todo) => (
      <div key={todo.id}>
        <TodoList todo={todo} />
      </div>
    ))}
    </TodoProvider>
  )
}

export default App