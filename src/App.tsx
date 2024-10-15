import Header from './components/Header';
import TaskCreator from './components/TaskCreator';
import { Header as ListHeader } from './components/TaskList/Header';

import styles from './App.module.css';
import './global.css';
import List, { Task } from './components/TaskList/List';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCreateTask = (text: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: Math.random().toString(), checked: false, text }]);
  }

  return (
    <div>
      <Header />
      <TaskCreator createTask={handleCreateTask} />
      <div className={styles.taskList}>
        <ListHeader criadas={tasks.length} concluidas={tasks.filter(task => task.checked).length} />
        <List tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}

export default App
