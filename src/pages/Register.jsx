import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  })
  const [inputErrorMessage, setInputErrorMessage] = useState('');

  // const { onLogin } = useUser();

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

    // onLogin(formData.email);
    navigate('/login');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="username"
        name="username"
        id="username"
        placeholder="username"
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
        Sign up
      </button>
      {inputErrorMessage && <p>{inputErrorMessage}</p>}
      <Link to='/login' ><button>Back to Login</button></Link>
    </form>

  );
};

export default Register
