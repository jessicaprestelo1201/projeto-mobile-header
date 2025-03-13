// pages/_app.js
import Header from '@/components/Header'; // Importando o Header
import '../app/globals.css'; 


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header /> {/* Header em todas as páginas */}
      <Component {...pageProps} /> {/* Conteúdo da página */}
    </div>
  );
}

export default MyApp;
