import { Typography } from "@mui/material"
import TaskCard from "./TaskCard"
import { Task } from "./types"

type ListCardsProps = {
    title: string,
    tasks: Task[]
}

const ListCards = ({ title, tasks }: ListCardsProps) => {
    return (
        <>
            <Typography>{title}</Typography>
            {tasks.map((task, index) => (
                <TaskCard task={task} key={index} />
            ))}
        </>
    )
}

export default ListCards
