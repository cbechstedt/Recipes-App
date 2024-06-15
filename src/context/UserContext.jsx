import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({}); // Estado inicial como objeto vazio

  const onLogin = (userData) => {
    setUser(userData);
  };

  const values = {
    user,
    onLogin,
    isLoggedIn: !!user && !!user.id // Verifica se o usuário está logado
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
