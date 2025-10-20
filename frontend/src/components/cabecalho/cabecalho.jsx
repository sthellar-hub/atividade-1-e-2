import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import './cabecalho.scss';

export default function Cabecalho() {
  const navigate = useNavigate();
  function sair() {
    localStorage.removeItem("USUARIO");
    localStorage.removeItem("TOKEN");

    navigate("/entrar");
  }
  return (
    <header className="cabecalho">
      <div className="logo">
        <img src="/images/logo.png" alt="Minha Biblioteca" />
        <span className="titulo-navbar">Livraria Frei</span>
      </div>
      <nav className="navegacao">
        <Link to="/">Início</Link>
        <Link to="/entrar">Entrar</Link>
        <button onClick={sair}>Sair</button>
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
  );
};

