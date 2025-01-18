import './App.css';
import { RolesProvider } from './contexts/RolesContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './views/Home';
import Registro from './views/Register';
import Login from './views/Login';
import Profile from './views/Profile';

const App = () => {
  return (
    <RolesProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registrarse' element={<Registro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/perfil' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </RolesProvider>
  );
};

export default App;