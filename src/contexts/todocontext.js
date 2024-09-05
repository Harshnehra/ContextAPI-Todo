import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[{
        todo:" ",
        id:" "
    }],
    addtodo:(id) => {},
    updatetodo: (id, todo) => {},
    deletetodo: (id) => {}
   
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider