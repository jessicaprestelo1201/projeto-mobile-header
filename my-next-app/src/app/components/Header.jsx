// Header.jsx
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <span className={styles.navTitulo}>Clean.</span>
        <span className={styles.navText}>Home</span>
        <span className={styles.navText}>Produtos</span>
        <span className={styles.navText}>Blog</span>
        <span className={styles.navText}>Contato</span>
        <span className={styles.navsign}>Sign In</span>
        <span className={styles.button}>Sign Up</span>
      </nav>

    </header>
  );
};

export default Header;