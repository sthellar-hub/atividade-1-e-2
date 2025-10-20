import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Register from './pages/register';
import Publicar from './pages/publicar';
import Adm from './pages/admin';
import AdmLogin from './pages/AdmLogin';

const Navegacao = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/publicar" element={<Publicar />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/adm/entrar" element={<AdmLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navegacao;
