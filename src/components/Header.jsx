import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Header = () => {
  const { email } = useUser();

  return (
    <header className='header-content'>
      <span className='user-content'>{`Bem vindo, ${email}`}</span>
      <div className='links-content'>
        <Link to="/search">Pesquisar</Link>
        <Link to="/favorites">Favoritas</Link>
        <Link to="/profile">Perfil</Link>
      </div>
    </header>
  );
};

export default Header;
