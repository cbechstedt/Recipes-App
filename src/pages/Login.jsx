import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserProvider, useUser } from "../context/UserContext";
// import { createUser } from '../services/userAPI';
// import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { onLogin } = useUser();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.email);
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
      <p>Não possui conta? Cadastre-se aqui</p>
    </form>

  );
};

export default Login;
