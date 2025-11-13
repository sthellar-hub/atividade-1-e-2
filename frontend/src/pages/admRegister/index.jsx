import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import api from "../../api.js";
import { useNavigate } from "react-router";
import './index.scss';

export default function AdmRegister() {
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
            <Navbar showNav={false}/>
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
                <p>
                    Já tem conta admin? 
                <button onClick={() => navigate('/adm/entrar')}>Entre</button>
                </p>
            </div>
            <Footer/>
        </div>
    );
}
