import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './taskCreator.module.css';

const TaskCreator = () => {
  const [task, setTask] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form className={styles['task-creator']} onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder='Adicione uma nova tarefa'
        value={task}
        onChange={handleInputChange}
      />
      <button type='submit'>Criar<PlusCircle size={16} weight={'bold'} /></button>
    </form>
  )
}

export default TaskCreator