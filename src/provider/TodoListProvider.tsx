import {createContext, FC, useContext, useState} from "react";
import {Task} from "../components/types";

type TodoListContextProps = {
    list: Task[]
    addTask: (text:string) => void
    removeTask: (id:number) => void
    toggleStatus: (id:number) => void
}

export const TodoListContext = createContext({} as TodoListContextProps);

const TodoListProvider:FC = ({children}) => {
    const [list,setList] = useState<Task[]>([])

    const addTask = (text:string) => {
        setList([...list, {text, id: Math.random(), done: false}])
    }

    const removeTask = (id:number) => {
        const newList = list.filter((list) => list.id !== id)
        setList(newList)
    }

    const toggleStatus = (id:number) => {
        const newList = list.map((task) => task.id === id ? {...task, done: !task.done } : task)
        setList(newList)
    }

    return (
        <TodoListContext.Provider value={{list, addTask, removeTask, toggleStatus}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListProvider
