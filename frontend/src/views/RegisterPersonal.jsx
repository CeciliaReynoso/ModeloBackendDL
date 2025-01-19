import React, { useState, useContext } from 'react';
import axios from 'axios';
import RolesContext from '../contexts/RolesContext';

const RegisterPersonal = () => {
  const [user, setUser] = useState({ email: '', password: '', nombre: '' });
  const { setRoles } = useContext(RolesContext);

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = window.sessionStorage.getItem('token');
    axios.post('/register-personal', user, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log('Personal registrado con éxito:', response.data);
        setRoles(response.data.token);
      })
      .catch((error) => {
        console.error('Error al registrar el personal:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group mt-1'>
        <label>Email address</label>
        <input
          value={user.email}
          onChange={handleUser}
          type='email'
          name='email'
          className='form-control'
          placeholder='Enter email'
        />
      </div>
      <div className='form-group mt-1'>
        <label>Password</label>
        <input
          value={user.password}
          onChange={handleUser}
          type='password'
          name='password'
          className='form-control'
          placeholder='Enter password'
        />
      </div>
      <div className='form-group mt-1'>
        <label>Nombre</label>
        <input
          value={user.nombre}
          onChange={handleUser}
          type='text'
          name='nombre'
          className='form-control'
          placeholder='Enter name'
        />
      </div>
      <button type='submit' className='btn btn-primary mt-2'>Register</button>
    </form>
  );
};

export default RegisterPersonal;