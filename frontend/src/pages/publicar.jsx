import { useEffect, useState } from "react";
import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Rodape from "../components/rodape/Rodape.jsx";
import api from "../api";
import { useNavigate } from "react-router";
import './publicar.scss';

export default function Publicar() {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [capaUrl, setCapaUrl] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const nomeAdm = localStorage.getItem("ADM")

        if (nomeAdm == undefined || nomeAdm == null) {
            navigate('/entrar')
        }
    }, [])

    async function publicar() {
        try {
            const body = {
                "titulo": titulo,
                "autor": autor,
                "capa_url": capaUrl
            }

            await api.post('/livros/', body);

            alert("Livro publicado com sucesso!")
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <Cabecalho showNav={true}/>
            <div className="publicar-form">
                <h1>Publicar Livro</h1>

                <label>Título</label>
                <input
                    placeholder="Título do livro"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <label>Autor</label>
                <input
                    placeholder="Autor do livro"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />

                <label>URL da Capa</label>
                <input
                    placeholder="URL da capa"
                    value={capaUrl}
                    onChange={(e) => setCapaUrl(e.target.value)}
                />

                <button onClick={publicar}>Publicar</button>
            </div>
            <Rodape/>
        </div>
    );
}
