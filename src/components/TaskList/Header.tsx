import styles from './header.module.css';

interface Props {
  criadas: number;
  concluidas: number;
}

const Header = ({ criadas, concluidas }: Props) => {
  return (
    <div className={styles.header}>
      <aside>
        <p>Tarefas criadas</p>
        <span>0</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>0</span>
      </aside>
    </div>
  )
}

export { Header }