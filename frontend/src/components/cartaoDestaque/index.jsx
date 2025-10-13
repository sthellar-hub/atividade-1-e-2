import './index.scss';

export default function CartaoDestaque( { imagem, titulo, descricao, imagemDireita, linkDetalhe }) {
    return(
        <div className='cartaoDestaque'>

            <div className={`imagem ${imagemDireita ? "direita" : ""}`}>
                <img src={imagem}/>
            </div>

            <div className='info'>
                <h1>{titulo}</h1>
                <p className='info-texto'>{descricao}</p>
                <a className='link' href={linkDetalhe}>Clique aqui para mais informações!</a>
            </div>

        </div>
    )
}