import { useEffect, useState } from "react";
import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Rodape from "../components/rodape/Rodape.jsx";
import api from "../api.js";
import { useNavigate } from "react-router";
import './cadastro.scss'

export default function Register() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    // useEffect(() => {
    //     const nomeUsuario = localStorage.getItem("USUARIO")

    //     if (nomeUsuario != undefined || nomeUsuario != null) {
    //         navigate('/')
    //     }
    // }, [])

    async function cadastrar() {
        if (!usuario.trim() || !senha.trim()) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        try {
            const body = {
                "usuario": usuario,
                "senha": senha
            }

            const response = await api.post('/usuario', body);

            alert("Usuário cadastrado com sucesso!")
            navigate('/entrar')
        } catch (error) {
            if (error.response && error.response.data && error.response.data.erro) {
                alert(error.response.data.erro);
            } else {
                alert("Erro ao cadastrar usuário: " + error.message);
            }
        }
    }

    return (
        <div>
            <Cabecalho showNav={false}/>
            <div className="admin-form">
            <h1>Cadastro</h1>

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

                <button onClick={cadastrar}>Criar Usuario</button>
                <button onClick={() => navigate('/entrar')}>Já tem conta? Entre</button>
                
            </div>
            
            </div>
            <Rodape/>
        </div>
    );
}
