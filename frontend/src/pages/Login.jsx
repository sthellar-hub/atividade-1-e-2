import { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router";
import './login.scss'

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("USUARIO")

        if (nomeUsuario != undefined || nomeUsuario != null) {
            navigate('/')
        }
    }, [])

    async function entrar() {
        try {
            const body = {
                "usuario": usuario,
                "senha": senha
            }

            const response = await api.post('/entrar', body);
            const token = response.data.token;
            const nomeUsuario = response.data.usuario.usuario;

            localStorage.setItem("USUARIO", nomeUsuario)
            localStorage.setItem("TOKEN", token)
            
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
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
                <button onClick={() => navigate('/cadastrar')}>Não tem conta? Cadastre-se</button>
            </div>
        </div>
    );
}