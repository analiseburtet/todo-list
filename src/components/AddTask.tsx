import React from 'react'
import {Button, TextField} from "@mui/material";

export const AddTask = () => {
    return(
        <>
            <TextField id="outlined-basic" label="To do" variant="outlined" />
            <Button variant="outlined">Add</Button>
        </>
    )
}

export default AddTask
