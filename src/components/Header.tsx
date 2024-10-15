import styles from './header.module.css';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" />
    </header >
  )
}

export default Header