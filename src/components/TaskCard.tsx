import React from 'react'
import {Typography, Checkbox, IconButton, Card} from "@mui/material";
import { Task } from './types';
import { DeleteForever } from '@mui/icons-material';
import {useTodoList} from "../hooks/useTodoList";
import styles from "../pages/styles";

interface TaskCardProps {
    task: Task
}

export const TaskCard = ({ task: { done, text, id } }: TaskCardProps) => {
    const { removeTask, toggleStatus } = useTodoList()
    const handleClick = () => removeTask(id)
    const handleToggle = () => toggleStatus(id)
    const classes = styles();

    return (
        <div className={classes.cardContainer}>
            <Card className={classes.card}>
                <Typography
                    className={classes.cardTitle}
                >
                    {text}
                </Typography>
                <div className={classes.alignCards}>
                    <Checkbox
                        checked={done}
                        onClick={handleToggle}
                    />
                    <IconButton
                        className={classes.deleteButton}
                        aria-label="settings"
                        onClick={handleClick}
                    >
                        <DeleteForever />
                    </IconButton>
                </div>
            </Card>
        </div>
    )
}

export default TaskCard
