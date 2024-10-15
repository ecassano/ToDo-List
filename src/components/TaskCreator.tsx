import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './taskCreator.module.css';

interface Props {
  createTask: (text: string) => void;
}

const TaskCreator = ({ createTask }: Props) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(inputText);
  }

  return (
    <form className={styles['task-creator']} onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder='Adicione uma nova tarefa'
        value={inputText}
        onChange={handleInputChange}
      />
      <button type='submit'>Criar<PlusCircle size={16} weight={'bold'} /></button>
    </form>
  )
}

export default TaskCreator