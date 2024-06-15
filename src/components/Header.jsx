import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import '../styles/Header.css'

const Header = () => {
  const { user: {username} } = useUser();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate('/');
  }

  return (
    <div className='header-content'>
      <div className='account'>
        <span className='user-content'>
          {`Welcome, ${username}`}
        </span>
        <button className='btn-logout' onClick={handleLogOut}>
          Log out
        </button>
      </div>
      <div className='links-content'>
        <Link to="/search">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Header;
