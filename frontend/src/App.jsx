import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import RegisterClient from './views/RegisterClient';
import Login from './views/Login';
import Profile from './views/Profile';
import RegisterPersonal from './views/RegisterPersonal';
import NoAutorizado from './views/NoAutorizado';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import { RolesProvider } from './contexts/RolesContext';

const App = () => {
  return (
    <RolesProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/registrarse' element={<RegisterClient />} />
          <Route path='/login' element={<Login />} />
          <Route path='/perfil' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/registrar-personal' element={
            <PrivateRoute roles={['Administrador']}>
              <RegisterPersonal />
            </PrivateRoute>
          } />
          <Route path='/no-autorizado' element={<NoAutorizado />} />
        </Routes>
      </BrowserRouter>
    </RolesProvider>
  );
};

export default App;