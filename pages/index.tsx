import type { NextPage } from 'next'
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskCard from "./components/TaskCard";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <AddTask />
      <TaskCard task="task"/>
    </>
  )
}

export default Home
