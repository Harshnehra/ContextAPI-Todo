import React from 'react'
import Styles from "./Input.module.css"
import { useState } from 'react'
import { useTodo } from '../../contexts/todocontext'

function Input() {

    const [todo, SetTodo] = useState(" ")
    const {addtodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
    
        if (!todo) {
            return
        }

        addtodo({id: Date.now(), todo: todo})
        SetTodo("")
    }

  return (
   
   <form onSubmit={add} >
    <div className={`${Styles["container"]}`}> 
        <div>
            <input 
                className={`${Styles["input"]}`} 
                type='text' 
                value={todo} 
                placeholder='Todo' 
                onChange={(e) => SetTodo(e.target.value) } 
            />
        </div>
        <div>
            <button className={`${Styles["btn"]}`}>
                Add
            </button>
        </div>
    </div>
    </form>
  )
}

export default Input