import { PlusCircle } from 'phosphor-react';

import styles from './task-creator.module.css';

const TaskCreator = () => {
  return (
    <form className={styles['task-creator']}>
      <input type="text" name="task" placeholder='Adicione uma nova tarefa' />
      <button>Criar<PlusCircle size={16} weight={'bold'} /></button>
    </form>
  )
}

export default TaskCreator