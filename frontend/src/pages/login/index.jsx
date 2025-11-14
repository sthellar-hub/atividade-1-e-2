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

<<<<<<< HEAD
=======
  // useEffect(() => {
  //     const nomeUsuario = localStorage.getItem("USUARIO")
  //     const nomeAdm = localStorage.getItem("ADM")

  //     if (nomeUsuario || nomeAdm) {
  //         navigate('/')
  //     }
  // }, [])

>>>>>>> 02da750c61f62587dd4ef84393105d83bfd1f816
  async function entrar() {
    if (!usuario || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
<<<<<<< HEAD
=======
      // Tentar login como usuário normal
>>>>>>> 02da750c61f62587dd4ef84393105d83bfd1f816
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
<<<<<<< HEAD
        
=======
        // Se falhar, tentar login como adm
>>>>>>> 02da750c61f62587dd4ef84393105d83bfd1f816
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
<<<<<<< HEAD
      <div className="login">
=======
      <div className="admin-form">
>>>>>>> 02da750c61f62587dd4ef84393105d83bfd1f816
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
