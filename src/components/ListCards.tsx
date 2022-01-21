import { Typography } from "@mui/material"
import TaskCard from "./TaskCard"
import { Task } from "./types"
import styles from "../pages/styles";

type ListCardsProps = {
    title: string,
    tasks: Task[]
}

const ListCards = ({ title, tasks }: ListCardsProps) => {
    const classes = styles();

    return (
        <>
            <Typography className={classes.title}>{title}</Typography>
            <div className={classes.alignCards}>
                {tasks.map((task, index) => (
                    <TaskCard task={task} key={index} />
                ))}
            </div>
        </>
    )
}

export default ListCards
