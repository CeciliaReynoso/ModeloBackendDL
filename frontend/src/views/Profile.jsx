import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import RolesContext from '../contexts/RolesContext';

const Profile = () => {
  const { user } = useContext(RolesContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user) {
      const token = window.sessionStorage.getItem('token');
      axios.get(`/usuarios/${user.email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.error('Error al obtener el perfil del usuario:', error);
        });
    }
  }, [user]);

  if (!profile) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Email: {profile.email}</p>
      <p>Nombre: {profile.nombre}</p>
      <p>Dirección: {profile.direccion}</p>
      <p>Lenguage: {profile.lenguage}</p>
      <p>Rol: {profile.rol}</p>
    </div>
  );
};

export default Profile;