import { useEffect, useState } from "react";
import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Rodape from "../components/rodape/Rodape.jsx";
import api from "../api.js";
import { useNavigate } from "react-router";
import './Registros.scss';

export default function Registros() {
    const [usuarios, setUsuarios] = useState([]);
    const [adms, setAdms] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const nomeAdm = localStorage.getItem("ADM");

        if (nomeAdm == undefined || nomeAdm == null) {
            navigate('/entrar');
        } else {
            carregarDados();
        }
    }, []);

    async function carregarDados() {
        try {
            const [usuariosResp, admsResp] = await Promise.all([
                api.get('/usuarios/'),
                api.get('/adm/')
            ]);

            setUsuarios(usuariosResp.data);
            setAdms(admsResp.data);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        }
    }

    return (
        <div>
            <Cabecalho showNav={true}/>
            <div className="registros-container">
                <h1>Registros do Sistema</h1>

                {/* Seção de Usuários */}
                <div className="registros-section">
                    <h2>Usuários Cadastrados:</h2>
                    {usuarios.length > 0 ? (
                        <ul>
                            {usuarios.map((usuario) => (
                                <li key={usuario.id}>
                                    <strong>ID:</strong> {usuario.id} - <strong>Usuário:</strong> {usuario.usuario}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nenhum usuário cadastrado.</p>
                    )}
                </div>

                {/* Seção de Administradores */}
                <div className="registros-section">
                    <h2>Administradores Cadastrados:</h2>
                    {adms.length > 0 ? (
                        <ul>
                            {adms.map((adm) => (
                                <li key={adm.id}>
                                    <strong>ID:</strong> {adm.id} - <strong>Administrador:</strong> {adm.adm}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nenhum administrador cadastrado.</p>
                    )}
                </div>
            </div>
            <Rodape/>
        </div>
    );
}
