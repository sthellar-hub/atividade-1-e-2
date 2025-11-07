import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import Login from './pages/login.jsx';
import Cadastro from './pages/cadastro.jsx';
import Registro from './pages/Registros.jsx';
import Adm from './pages/admin.jsx';
import AdmLogin from './pages/AdmLogin.jsx';

const Navegacao = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/Registros" element={<Registro />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/adm/entrar" element={<AdmLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navegacao;
