import { createContext, useState, useEffect } from 'react';

const RolesContext = createContext(null);

export const RolesProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUser({ email: payload.email, rol: payload.rol });
    }
  }, []);

  const setRoles = (token) => {
    const payload = JSON.parse(atob(token.split('.')[1]));
    setUser({ email: payload.email, rol: payload.rol });
    window.sessionStorage.setItem('token', token);
  };

  const clearRoles = () => {
    setUser(null);
    window.sessionStorage.removeItem('token');
  };

  return (
    <RolesContext.Provider value={{ user, setRoles, clearRoles }}>
      {children}
    </RolesContext.Provider>
  );
};

export default RolesContext;