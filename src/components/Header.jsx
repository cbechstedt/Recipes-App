import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useUser } from '../context/UserContext';

const Header = () => {
  const { email } = useUser();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     setLoading(true);
  //     try {
  //       const { name } = await getUser();
  //       setUser(name);
  //     } catch (error) {
  //       console.error('Erro ao obter usuário:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();

  //   // Cleanup da função de efeito (opcional)
  //   return () => {
  //     // Alguma ação de cleanup, se necessário
  //   };
  // }, []);

  return (
    <header data-testid="header-component">
      <span data-testid="header-user-name">{`Bem vindo, ${email}`}</span>
      {/* {loading && <Loading />} */}
      <Link data-testid="link-to-search" to="/search">Pesquisar</Link>
      <Link data-testid="link-to-favorites" to="/favorites">Favoritas</Link>
      <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
    </header>
  );
};

export default Header;
