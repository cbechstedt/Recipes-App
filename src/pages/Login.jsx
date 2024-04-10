import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
// import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
// import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
