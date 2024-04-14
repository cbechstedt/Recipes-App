import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/UserContext";
// import { createUser } from '../services/userAPI';
// import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [inputErrorMessage, setInputErrorMessage] = useState('');

  const { onLogin } = useUser();

  const navigate = useNavigate();

  const minPassword = 6;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password' && value.length < minPassword) {
      setInputErrorMessage('Password must be at least 6 characters long.');
    } else {
      setInputErrorMessage('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password.length < minPassword) {
      setInputErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    onLogin(formData.email);
    navigate('/search');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Entrar
      </button>
      {inputErrorMessage && <p>{inputErrorMessage}</p>}
      <p>Não possui conta? Cadastre-se aqui</p>
    </form>

  );
};

export default Login;
