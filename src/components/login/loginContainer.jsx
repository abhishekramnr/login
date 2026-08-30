import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from './login.service.js';
import { LoginForm } from './loginform.jsx';
import { UserContext } from '../assets/context/UserContext.jsx';

export const LoginContainer = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const onLogin = async (username, password) => {
    const userData = await Login(username, password);
    setUser(userData);
    navigate('/home');
  };

  return <LoginForm onSubmit={onLogin} />;
};