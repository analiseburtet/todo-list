import {useContext} from "react";
import {TodoListContext} from "../provider/TodoListProvider";

export const useTodoList = () => useContext(TodoListContext)
