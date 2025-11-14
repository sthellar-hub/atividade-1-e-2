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

    if (!nomeUsuario && !nomeAdm) {
      navigate("/entrar");
    }
  }, []);

  return (
    <div className="principal">
      <Navbar />

      <main className="main">
        <section className="text">
          <h1>Seja bem-vindo!</h1>
          <img src="/images/joia.png" alt="grupo" />
        </section>
      </main>

      <Footer />
    </div>
  );
}