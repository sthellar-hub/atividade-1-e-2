import { useEffect, useState } from "react";
import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Rodape from "../components/rodape/Rodape.jsx";
import api from "../api";
import { useNavigate } from "react-router";
import './admin.scss';

export default function Adm() {
    const [Adm, setAdm] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const nomeAdm = localStorage.getItem("ADM")

        if (nomeAdm) {
            navigate('/')
        }
    }, [])

    async function cadastrar() {
        if (!Adm.trim() || !senha.trim()) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        try {
            const body = {
                "adm": Adm,
                "senha": senha
            }

            await api.post('/adm/', body);

            alert("Usuário cadastrado com sucesso!")
            navigate('/adm/entrar')
        } catch (error) {
            if (error.response && error.response.data && error.response.data.erro) {
                alert(error.response.data.erro);
            } else {
                alert("Erro ao cadastrar administrador: " + error.message);
            }
        }
    }

    return (
        <div>
            <Cabecalho showNav={false}/>
            <div className="admin-form">
                <h1>Cadastro</h1>

                <label>ADMIN</label>
                <input
                    placeholder="Adm"
                    value={Adm}
                    onChange={(e) => setAdm(e.target.value)}
                />

                <label>SENHA</label>
                <input
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button onClick={cadastrar}>Criar conta admin</button>
                <button onClick={() => navigate('/adm/entrar')}>Já tem conta admin? Entre</button>
            </div>
            <Rodape/>
        </div>
    );
}
