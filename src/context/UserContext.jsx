import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ userId: null, email: '' });

  const onLogin = (userId, email) => {
    setUser({ userId, email });
  };

  const values = {
    userId: user.userId,
    email: user.email,
    onLogin,
  };

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
