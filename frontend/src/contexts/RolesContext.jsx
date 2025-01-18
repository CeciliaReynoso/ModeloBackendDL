import { createContext, useState } from 'react';

const RolesContext = createContext(null);

export const RolesProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setRoles = (develop) => setUser(develop);

  return (
    <RolesContext.Provider value={{ getRoles: user, setRoles }}>
      {children}
    </RolesContext.Provider>
  );
};

export default RolesContext;