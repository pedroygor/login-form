import logo from '../../assets/images/logo.svg'
import styles from './styles.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.image} src={logo} alt="" />
    </header>
  )
}