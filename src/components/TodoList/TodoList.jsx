import React, { useState } from 'react'
import Styles from "./TodoList.module.css"
import { useTodo } from '../../contexts/todocontext'

function TodoList({todo}) {

    const [isTodoEditable, setisTodoEditable] = useState(false)
    const [todomsg, settodomsg] = useState(todo.todo)

    const {updatetodo, deletetodo} = useTodo()

    const edit = () => {
        updatetodo(todo.id, {...todo, todo: todomsg})
        setisTodoEditable(false)
    }

  return (
    <>
        <div className={`${Styles["container"]}`}> 
            <div>
                <input 
                    className={`${Styles["input"]}`} 
                    value={todomsg} 
                    onChange={(e) => settodomsg(e.target.value) } 
                    readOnly={!isTodoEditable} 
                />
            </div>
            <div>
                <button 
                    className={`${Styles["update-btn"]}`} 
                    onClick={() => {
                        if (isTodoEditable) {
                            edit();
                        } else {
                            setisTodoEditable((prev) => !prev);
                        }
                    }} 
                >
                    Update
                </button>
            </div>
            <div>
                <button 
                    className={`${Styles["delete-btn"]}`}
                    onClick={() => deletetodo(todo.id) }
                >
                    Delete
                </button>
            </div>
        </div>
    </>
  )
}

export default TodoList