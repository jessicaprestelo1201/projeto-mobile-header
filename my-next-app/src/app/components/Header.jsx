import styles from './Header.module.css';

const Header = ({ page }) => {
  // Define a classe do header com base na propriedade `page`
  const headerClass = `${styles.header} ${styles[`header-${page}`]}`;

  return (
    <header className={headerClass}>
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