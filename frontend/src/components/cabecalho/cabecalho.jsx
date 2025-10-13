import { Link } from 'react-router-dom';
import './cabecalho.scss';

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="logo">
        <img src="/images/logo.png" alt="Minha Biblioteca" />
        <span className="titulo-navbar">Livraria Frei</span>
      </div>
      <nav className="navegacao">
        <Link to="/">Início</Link>
        <Link to="/login">Entrar</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
};

