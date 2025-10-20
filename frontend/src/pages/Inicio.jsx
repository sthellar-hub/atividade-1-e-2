import Cabecalho from "../components/cabecalho/cabecalho.jsx";
import Rodape from "../components/rodape/Rodape.jsx";
import CartaoDestaque from "../components/cartaoDestaque/index.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./inicio.scss";

const cartoes = [
  {
    imagem:
      "https://images.tcdn.com.br/img/editor/up/1305078/Sliderdeclinio.jpg",
    titulo: "Livros de Romance",
    descricao:
      "Em nossa livraria você vai encontrar livros de diversos romances macabros",
    imagemDireita: false,
    linkDetalhe:
      "https://www.amazon.com.br/Decl%C3%ADnio-um-Homem-Osamu-Dazai/dp/8574482447",
  },
  {
    imagem:
      "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/0981bff8-1511-408b-a22b-d54a4268f006/50621841-4889-11ef-96ad-02805d6a02df?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    titulo: "Livros de Mistério",
    descricao:
      "Em nossa livraria você vai encontrar livros de diversos mistérios que vão te deixar de cabelo em pé",
    imagemDireita: true,
    linkDetalhe:
      "https://www.amazon.com.br/aventuras-Sherlock-Holmes-Arthur-Conan/dp/8594318553",
  },
];

export default function Inicio() {
  const navigate = useNavigate();

  useEffect(() => {
    const nomeUsuario = localStorage.getItem("USUARIO");
    const nomeAdm = localStorage.getItem("ADM");

    // Se o usuário não estiver logado
    if (!nomeUsuario && !nomeAdm) {
      navigate("/entrar");
    }
  }, []);

  return (
    <div className="app-layout">
      <Cabecalho />

      <main className="page-main">
        <section className="content">
          <h1>Seja bem-vindo à nossa livraria!</h1>
          <p>
            Aqui, a paixão pela leitura ganha vida. Nossa missão é espalhar o
            amor pelos livros e criar um espaço acolhedor para todos os amantes
            da literatura. Conheça nossa equipe dedicada e fique por dentro dos
            eventos emocionantes que promovemos. Venha explorar um mundo de
            histórias e conhecimento!
          </p>
        </section>
      </main>

      <div className="cartoes">
        {cartoes.map((c, index) => (
          <CartaoDestaque
            key={index}
            imagem={c.imagem}
            titulo={c.titulo}
            descricao={c.descricao}
            imagemDireita={c.imagemDireita}
            linkDetalhe={c.linkDetalhe}
          />
        ))}
      </div>

      <Rodape />
    </div>
  );
}
