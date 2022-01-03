import {Button, TextField} from "@mui/material";
import {useTodoList} from "../hooks/useTodoList";
import {useState} from "react";

export const AddTask = () => {
    const [value, setValue] = useState('');
    const {addTask} = useTodoList()

    const handleClick = () => {
        addTask(value)
        setValue('')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return(
        <>
            <TextField
                id="outlined-basic"
                label="To do"
                variant="outlined"
                value={value}
                onChange={handleChange}
            />
            <Button variant="outlined" onClick={handleClick}>Add</Button>
        </>
    )
}

export default AddTask
