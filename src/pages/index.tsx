import type { NextPage } from 'next'
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import ListCards from '../components/ListCards';
import {useTodoList} from "../hooks/useTodoList";
import styles from './styles'

const Home: NextPage = () => {
  const { list } = useTodoList();
  const classes = styles();

  return (
    <div className={classes.body}>
      <Header />
      <AddTask />
      <ListCards title='Todo' tasks={list.filter(task => !task.done)} />
      <ListCards title='Done' tasks={list.filter(task => task.done)} />
    </div>
  )
}

export default Home
