import { Trash, Check } from 'phosphor-react'
import { ChangeEvent } from 'react';
import { Task as ITask } from './List';

import styles from './task.module.css';

interface Props {
  task: ITask;
  toggleTask: (id: string, toCheck: boolean) => void;
  deleteTask: (id: string) => void;
}

const Task = ({ task, toggleTask, deleteTask }: Props) => {

  const handleToggleTask = () => {
    toggleTask(task.id, task.checked ? false : true);
  }

  const handleDeleteTask = () => {
    deleteTask(task.id);
  }

  return (
    <div className={styles.task}>
      <div>
        <label htmlFor={task.id} className={`${styles.checkbox} ${task.checked ? styles.checked : styles.unchecked}`}>{task.checked && <Check size={12} />}</label>
        <input
          readOnly
          type="checkbox"
          name="chekbox"
          id={task.id}
          style={{ display: 'none' }}
          checked={task.checked}
          onClick={handleToggleTask}
        />
        <p className={`${styles.text} ${task.checked && styles.textChecked}`}>{task.text}</p>
      </div>
      <button className={styles.deleteButton} onClick={handleDeleteTask}><Trash size={16} /></button>
    </div >
  )
}

export default Task