import Header from './components/Header';
import TaskCreator from './components/TaskCreator';
import { Header as ListHeader } from './components/TaskList/Header';

import styles from './App.module.css';
import './global.css';

const App = () => {

  return (
    <div>
      <Header />
      <TaskCreator />
      <div className={styles.taskList}>
        <ListHeader />
      </div>
    </div>
  )
}

export default App
