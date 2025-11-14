import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import api from "../../api.js";
import { useNavigate } from "react-router";
import './index.scss'

export default function Register() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

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
            <Navbar showNav={false}/>
<<<<<<< HEAD
            <div className="registros">
=======
            <div className="admin-form">
>>>>>>> 02da750c61f62587dd4ef84393105d83bfd1f816
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
                <p>
                    Já tem conta? 
                <button onClick={() => navigate('/entrar')}>
                    Entre</button>
                </p>
                
            </div>
            
            </div>
            <Footer/>
        </div>
    );
}
