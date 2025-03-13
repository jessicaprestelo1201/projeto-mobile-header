import Link from 'next/link';
import styles from './index.module.css'; // Importando o CSS modular

export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
          <li><Link href="/">Clean.</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contato</Link></li>
            <li><Link href="/signin">Sign In</Link></li>
            <li><Link href="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo da Página */}
      <main className={styles.main}>
        <h1>Bem-vindo ao nosso site!</h1>
        <p>Este é um exemplo de página inicial com um header estilizado.</p>
      </main>
    </div>
  );
}


