import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Log from './pages/log';
import AdmRegister from './pages/admRegister';
import AdmLogin from './pages/admLogin';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/Registros" element={<Log />} />
        <Route path="/adm" element={<AdmRegister />} />
        <Route path="/adm/entrar" element={<AdmLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
