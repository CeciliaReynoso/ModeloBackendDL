import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RolesContext from '../contexts/RolesContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setRoles } = useContext(RolesContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password });
      setRoles(response.data.token);
      navigate('/perfil'); // Redirige al perfil después de un login exitoso
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group mt-1'>
        <label>Email</label>
        <input
          type='email'
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email'
        />
      </div>
      <div className='form-group mt-1'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter password'
        />
      </div>
      <button type='submit' className='btn btn-primary mt-2'>Login</button>
    </form>
  );
};

export default Login;