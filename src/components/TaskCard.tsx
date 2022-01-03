import React from 'react'
import { Typography, Checkbox, IconButton } from "@mui/material";
import { Task } from './types';
import { DeleteForever } from '@mui/icons-material';
import {useTodoList} from "../hooks/useTodoList";

interface TaskCardProps {
    task: Task
}

export const TaskCard = ({ task: { done, text, id } }: TaskCardProps) => {
    const { removeTask, toggleStatus } = useTodoList()
    const handleClick = () => removeTask(id)
    const handleToggle = () => toggleStatus(id)

    return (
        <>
            <Checkbox
                checked={done}
                onClick={handleToggle}
            />
            <Typography>{text}</Typography>
            <IconButton
                aria-label="settings"
                onClick={handleClick}
            >
                <DeleteForever />
            </IconButton>
        </>
    )
}

export default TaskCard
