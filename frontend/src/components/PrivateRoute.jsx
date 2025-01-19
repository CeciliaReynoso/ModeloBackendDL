import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import RolesContext from '../contexts/RolesContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(RolesContext);
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;