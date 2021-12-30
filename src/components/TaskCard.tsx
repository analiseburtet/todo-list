import React from 'react'
import { Typography, Checkbox, IconButton } from "@mui/material";
import { Task } from './types';
import { DeleteForever } from '@mui/icons-material';

interface TaskCardProps {
    task: Task
}

export const TaskCard = ({ task: { done, text } }: TaskCardProps) => {
    return (
        <>
            <Checkbox checked={done} />
            <Typography>{text}</Typography>
            <IconButton aria-label="settings">
                <DeleteForever />
            </IconButton>
        </>
    )
}

export default TaskCard
