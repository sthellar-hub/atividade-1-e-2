import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import './cabecalho.scss';

export default function Cabecalho({ showNav = true }) {
  const navigate = useNavigate();
  const isAdm = localStorage.getItem("ADM");

  function sair() {
    localStorage.removeItem("USUARIO");
    localStorage.removeItem("ADM");
    localStorage.removeItem("TOKEN");

    navigate("/entrar");
  }
  return (
    <header className="cabecalho">
      <div className="logo">
        <img src="/images/logoFREI.png" alt="logo FREI" />
        <span className="titulo-navbar"> Sistema  login -Trabalho 4 Bimestre</span>
      </div>
      {showNav && (
        <nav className="navegacao">
          <Link to="/">Início</Link>
          {isAdm && <Link to="/Registros">Registros</Link>}
          <Link onClick={sair} to="/entrar">Sair</Link>
        </nav>
      )}
    </header>
  );
};

