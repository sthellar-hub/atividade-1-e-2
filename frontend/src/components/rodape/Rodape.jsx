import './Rodape.scss';

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-container">
        <div className="logo-footer">
          <img src="/images/logo.png" alt="Library Logo" />
          
        </div>
        <div className="contato">
          <h4>Contato</h4>
          <p>(11) 91234-5678</p>
          <p>livraria@frei.com.br</p>
        </div>
        <div className="desenvolvido-por">
          <h4>Desenvolvido por</h4>
          <p>Renan Nunes de Jesus</p>
          <p>Sthella Bottari dos Santos</p>
        </div>
        <div className="turma">
          <h4>Turma</h4>
          <p>Informática A</p>
        </div>
      </div>
      <div className="rodape-footer">
        <p>2025 © Instituto Nossa Senhora de Fátima</p>
      </div>
    </footer>
  );
};


