import './index.scss';

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape-container">
        <div className="logo-footer">
          <img src="/images/logoFREI.png" alt="logo FREI" />
          
        </div>
        <div className="contato">
          <h4>Contato</h4>
          <p>(11) 91234-5678</p>
          <p>Frei@com.br</p>
        </div>
        <div className="desenvolvido-por">
          <h4>Desenvolvido por</h4>
          <p>Renan Nunes De Jesus</p>
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


