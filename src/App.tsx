import Header from './components/Header';
import TaskCreator from './components/TaskCreator';
import { Header as ListHeader } from './components/TaskList/Header';

import styles from './App.module.css';
import './global.css';
import List from './components/TaskList/List';

const App = () => {

  return (
    <div>
      <Header />
      <TaskCreator />
      <div className={styles.taskList}>
        <ListHeader />
        <List />
      </div>
    </div>
  )
}

export default App
