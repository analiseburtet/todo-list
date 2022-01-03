import type { NextPage } from 'next'
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import { Task } from '../components/types';
import ListCards from '../components/ListCards';

const Home: NextPage = () => {

  const tasks: Task[] = "____".split("")
    .map((_, index) => ({
      done: true,
      text: "task",
      id: index
    }))

  return (
    <>
      <Header />
      <AddTask />
      <ListCards title='Todo' tasks={tasks.filter(task => !task.done)} />
      <ListCards title='Done' tasks={tasks.filter(task => task.done)} />
    </>
  )
}

export default Home
