import React from 'react'
import {Typography} from "@mui/material";

interface TaskCardProps {
    task: string
}

export const TaskCard = ({task}:TaskCardProps) => {
    return(
        <>
            <Typography>{task}</Typography>
        </>
    )
}

export default TaskCard
