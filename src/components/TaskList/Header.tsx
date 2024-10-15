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
        <span>{criadas}</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>{criadas === 0 ? "0" : `${concluidas} de ${criadas}`}</span>
      </aside>
    </div>
  )
}

export { Header }