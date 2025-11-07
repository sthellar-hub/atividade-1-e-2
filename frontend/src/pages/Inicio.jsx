import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Rodape from "../components/rodape/Rodape.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import './Inicio.scss'

export default function Inicio() {
  const navigate = useNavigate();

  useEffect(() => {
    const nomeUsuario = localStorage.getItem("USUARIO");
    const nomeAdm = localStorage.getItem("ADM");

    // Se o usuário não estiver logado
    if (!nomeUsuario && !nomeAdm) {
      navigate("/entrar");
    }
  }, []);

  return (
    <div className="app-layout">
      <Cabecalho />

      <main className="page-main">
        <section className="content">
          <h1>Seja bem-vindo!</h1>
        </section>
      </main>

      <Rodape />
    </div>
  );
}