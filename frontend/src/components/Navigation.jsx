import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RolesContext from '../contexts/RolesContext';

const Navigation = () => {
  const navigate = useNavigate();
  const { getRoles, setRoles } = useContext(RolesContext);

  const logout = () => {
    setRoles(null);
    window.sessionStorage.removeItem('token');
    navigate('/');
  };

  const isLogin = () => {
    if (!getRoles) {
      return (
        <>
          <Link to='/registrarse' className='btn m-1 register-btn'>Registrarse</Link>
          <Link to='/login' className='btn login-btn'>Iniciar Sesión</Link>
        </>
      );
    }

    return (
      <>
        <Link to='/perfil' className='btn m-1 btn-light'>Mi Perfil</Link>
        <button onClick={logout} className='btn btn-danger'>Salir</button>
      </>
    );
  };

  return (
    <nav className='navbar'>
      <span className='logo'>WP</span>
      <div className='opciones'>
        <span className='me-3'>
          <Link to='/'>Inicio<i className='fa-solid fa-house ms-2' /></Link>
        </span>
        {isLogin()}
      </div>
    </nav>
  );
};

export default Navigation;