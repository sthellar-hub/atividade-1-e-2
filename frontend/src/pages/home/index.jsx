import Navbar from "../../components/navbar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import './index.scss'

export default function Home() {
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
      <Navbar />

      <main className="page-main">
        <section className="content">
          <h1>Seja bem-vindo!</h1>
          <img src="/images/joia.png" alt="grupo" />
        </section>
      </main>

      <Footer />
    </div>
  );
}