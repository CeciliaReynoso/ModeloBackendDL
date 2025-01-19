import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RolesContext from '../contexts/RolesContext';
const Navigation = () => {
  const { user, clearRoles } = useContext(RolesContext);

  const handleLogout = () => {
    clearRoles();
    window.location.href = '/';
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>MiApp</Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              {!user ? (
                <>
                  <Link to='/registrarse' className='btn m-1 register-btn'>Registrarse</Link>
                  <Link to='/login' className='btn login-btn'>Iniciar Sesión</Link>
                </>
              ) : (
                <>
                  <Link to='/perfil' className='btn m-1 btn-light'>Mi Perfil</Link>
                  {user.rol === 'Administrador' && (
                    <Link to='/registrar-personal' className='btn m-1 btn-light'>Registrar Personal</Link>
                  )}
                  <button onClick={handleLogout} className='btn m-1 btn-danger'>Cerrar Sesión</button>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;