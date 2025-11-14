import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import api from "../../api.js";
import { useNavigate } from "react-router";
import "./index.scss";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function entrar() {
    if (!usuario || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const bodyUsuario = {
        usuario: usuario,
        senha: senha,
      };

      let response = await api.post("/entrar", bodyUsuario);
      let token = response.data.token;
      let nomeUsuario = response.data.usuario.usuario;

      localStorage.setItem("USUARIO", nomeUsuario);
      localStorage.setItem("TOKEN", token);

      navigate("/");
    } catch {
      try {
        
        const bodyAdm = {
          adm: usuario,
          senha: senha,
        };

        let response = await api.post("/adm/entrar", bodyAdm);
        let token = response.data.token;
        let nomeAdm = response.data.adm.adm;

        localStorage.setItem("ADM", nomeAdm);
        localStorage.setItem("TOKEN", token);

        navigate("/");
      } catch {
        alert("Usuário ou senha incorreto(s)");
      }
    }
  }

  return (
    <div>
      <Navbar showNav={false} />
      <div className="login">
        <h1>Login</h1>

        <div>
          <label>Usuário</label>
          <input
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <br />

          <label>Senha</label>
          <input
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <br />
          <br />

          <button onClick={entrar}>Entrar</button>
          <p>Não tem conta?</p>
          <button onClick={() => navigate("/cadastro")}>Cadastre-se</button>
          <p>
            Possui uma conta de adm?
            <a onClick={() => navigate("/adm/entrar")}>Clique aqui</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
