import { Button, Card, TextField } from "@mui/material";
import { useTodoList } from "../hooks/useTodoList";
import { useState } from "react";
import styles from "../pages/styles";

export const AddTask = () => {
    const [value, setValue] = useState('')
    const { addTask } = useTodoList()
    const classes = styles();

    const handleClick = () => {
        addTask(value)
        setValue('')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return(
        <div className={classes.cardContainer}>
            <Card className={classes.card}>
                <TextField
                    id="insert task"
                    label="To do"
                    variant="standard"
                    value={value}
                    onChange={handleChange}
                />
                <Button
                    className={classes.addButton}
                    variant="outlined"
                    onClick={handleClick}
                >
                    Add
                </Button>
            </Card>
        </div>
    )
}

export default AddTask
