import { useEffect, useState } from "react";
import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Rodape from "../components/rodape/Rodape.jsx";
import api from "../api";
import { useNavigate } from "react-router";
import './Login.scss'

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    // useEffect(() => {
    //     const nomeUsuario = localStorage.getItem("USUARIO")
    //     const nomeAdm = localStorage.getItem("ADM")

    //     if (nomeUsuario || nomeAdm) {
    //         navigate('/')
    //     }
    // }, [])

    async function entrar() {
        if (!usuario || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            // Tentar login como usuário normal
            const bodyUsuario = {
                "usuario": usuario,
                "senha": senha
            }

            let response = await api.post('/entrar', bodyUsuario);
            let token = response.data.token;
            let nomeUsuario = response.data.usuario.usuario;

            localStorage.setItem("USUARIO", nomeUsuario)
            localStorage.setItem("TOKEN", token)

            navigate('/')
        } catch {
            try {
                // Se falhar, tentar login como adm
                const bodyAdm = {
                    "adm": usuario,
                    "senha": senha
                }

                let response = await api.post('/adm/entrar', bodyAdm);
                let token = response.data.token;
                let nomeAdm = response.data.adm.adm;

                localStorage.setItem("ADM", nomeAdm)
                localStorage.setItem("TOKEN", token)

                navigate('/')
            } catch {
                alert("Usuário ou senha incorreto(s)")
            }
        }
    }

    return (
        <div >
                <Cabecalho showNav={false}/>
                <div className="admin-form">
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
                <button onClick={() => navigate('/cadastro')}>Não tem conta? Cadastre-se</button>
                <a onClick={() => navigate('/adm/entrar')}>Possui uma conta de adm? Clique aqui</a>
            </div>
            </div>
            <Rodape/>
        </div>
    );
}