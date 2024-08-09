import React, { useState } from 'react';

import UserService from 'services/UserService';

import 'styles/Login.css'

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const userService = UserService();

  async function fetchLogin() {

    setIsLoading(true);
    try {
      const resJson = await userService.login(email, password);
      if (resJson.status !== 0) {
        setMessage(resJson.message);
        return;
      }

      return resJson.data.user_session_token;

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await fetchLogin();
    if (token) {
      localStorage.setItem("token", token);
      setAuth(true);
    }
  };

  document.body.setAttribute('id', 'login-page');
  return (
    <>
      <div className="login-container">
        <div className='head'>
          Login
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <div className='message'>
            {message}
          </div>
        </form>
      </div>
    </>

  );
};

export default Login;