import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import RolesContext from '../contexts/RolesContext';

const PrivateRoute = ({ children, roles }) => {
  const { user } = useContext(RolesContext);

  if (!user) {
    // Si el usuario no está autenticado, redirigir a la página de login
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.rol)) {
    // Si el usuario no tiene el rol adecuado, redirigir a la página de no autorizado
    return <Navigate to="/no-autorizado" />;
  }

  // Si el usuario está autenticado y tiene el rol adecuado, renderizar el componente hijo
  return children;
};

export default PrivateRoute;