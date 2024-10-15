import { SetStateAction } from 'react';
import Empty from './Empty';

import styles from './list.module.css';
import Task from './Task';

export interface Task {
  id: string;
  text: string;
  checked: boolean;
}
interface Props {
  tasks: Task[];
  setTasks: (value: SetStateAction<Task[]>) => void;
}

const List = ({ tasks, setTasks }: Props) => {

  const handleToggleTask = (id: string, toCheck: boolean) => {
    setTasks((prevTasks) => prevTasks.map(task => {
      if (task.id === id) {
        return { ...task, checked: toCheck }
      } else {
        return task
      }
    }
    ))
  }

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id))
  }

  return (
    <div className={styles.list}>
      {tasks.length > 0 ?
        <div className={styles.tasks}>
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              toggleTask={handleToggleTask}
              deleteTask={handleDeleteTask}
            />)
          )}
        </div>
        :
        <Empty />
      }
    </div>
  )
}

export default List