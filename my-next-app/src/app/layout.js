// src/app/layout.js
import Header from './components/Header'; // Importando o Header
import './globals.css'; // Importando estilos globais

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header /> {/* Adicionando o Header */}
        <main>{children}</main> {/* Conteúdo da página */}
      </body>
    </html>
  );
}