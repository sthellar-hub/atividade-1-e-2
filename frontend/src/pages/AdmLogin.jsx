import { useEffect, useState } from "react";
import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Rodape from "../components/rodape/Rodape.jsx";
import api from "../api";
import { useNavigate } from "react-router";
import './AdmLogin.scss'

export default function AdmLogin() {
    const [adm, setAdm] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    // useEffect(() => {
    //     const nomeAdm = localStorage.getItem("ADM")

    //     if (nomeAdm != undefined || nomeAdm != null) {
    //         navigate('/')
    //     }
    // }, [])

    async function entrar() {
        if (!adm || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        try {
            const body = {
                "adm": adm,
                "senha": senha
            }

            const response = await api.post('/adm/entrar/', body);
            const token = response.data.token;
            const nomeAdm = response.data.adm.adm;

            localStorage.setItem("ADM", nomeAdm)
            localStorage.setItem("TOKEN", token)

            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <Cabecalho showNav={false}/>
            <div className="admin-form">
            <h1>Login Admin</h1>

            <div>
                <label>Admin</label>
                <input
                    placeholder="Admin"
                    value={adm}
                    onChange={(e) => setAdm(e.target.value)}
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
                <button onClick={() => navigate('/adm')}>Não tem conta admin? Cadastre-se</button>
                <a onClick={() => navigate('/entrar')}>Nao é adimin? Volte</a>
            </div>
            </div>
            <Rodape/>
        </div>
    );
}
