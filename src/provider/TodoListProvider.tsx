import {createContext, FC, useContext, useState} from "react";
import {Task} from "../components/types";

type TodoListContextProps = {
    list: Task[]
    addTask: (text:string) => void
    removeTask: () => void
}

export const TodoListContext = createContext({} as TodoListContextProps);

const TodoListProvider:FC = ({children}) => {
    const [list,setList] = useState<Task[]>([])
    const addTask = (text:string) => {
        setList([...list, {text, id: Math.random(), done: false}])
    }
    const removeTask = () => {}

    return (
        <TodoListContext.Provider value={{list, addTask, removeTask}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListProvider
