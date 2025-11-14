import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/index.jsx";
import Footer from "../../components/footer/index.jsx";
import api from "../../api.js";
import { useNavigate } from "react-router";
import './index.scss';

export default function Log() {
    const [logs, setLogs] = useState([]);

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
            const logsResp = await api.get('/registros/');
            setLogs(logsResp.data);
        } catch (error) {
            console.error("Erro ao carregar dados:", error);
        }
    }

    return (
        <div>
            <Navbar showNav={true}/>
            <div className="registros-container">
                <h1>Registros do Sistema</h1>

                {/* Seção de Logs */}
<<<<<<< HEAD
                <div className="registros-info">
=======
                <div className="registros-section">
>>>>>>> 02da750c61f62587dd4ef84393105d83bfd1f816
                    <h2>Logs do Sistema:</h2>
                    {logs.length > 0 ? (
                        <ul>
                            {logs.map((log) => (
                                <li key={log.id}>
                                    <strong>ID:</strong> {log.id} - <strong>Ação:</strong> {log.acao} - <strong>Usuário ID:</strong> {log.usuario_id} - <strong>Data:</strong> {new Date(log.data).toLocaleString()}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nenhum log encontrado.</p>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
