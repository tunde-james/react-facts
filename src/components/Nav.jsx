import ReactIcon from '../images/react-icon-small.png'
import styles from '../css/nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.nav__left}>
          <img src={ReactIcon} alt="React icon logo" className={styles.logo} />
          <p className={styles.logo__text}>ReactFacts</p>
        </div>

        <div className={styles.nav__right}>
          <p className={styles.title}>react course - Project 1</p>
        </div>
      </div>
    </nav>
  )
}
