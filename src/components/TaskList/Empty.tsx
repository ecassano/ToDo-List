import clipboard from '../../assets/clipboard.png';
import styles from './empty.module.css';

const Empty = () => {
  return (
    <div className={styles.empty}>
      <img src={clipboard} alt="Clipboard" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}

export default Empty