import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  const onLogin = (email) => {
    console.log(email);
    setEmail(email);
  };

  const values = {
    email,
    setEmail,
    onLogin
  }

  return (
    <UserContext.Provider value={values}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
