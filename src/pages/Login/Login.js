import React, { useState } from 'react';

import 'pages/Login/Login.css'

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  async function fetchData() {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      })
    };
    const data = await fetch('http://localhost:4000/api/login', requestOptions);
    if (!data.ok) {
      setMessage("INTERNAT_SERVER_ERROR");
      return;
    }

    const json = await data.json();
    console.log(json);
    if (json.status !== 0) {
      setMessage(json.message);
      return;
    }
    setAuth(true);
    localStorage.setItem("token", JSON.stringify(json.data.user_session_token));
    window.location.reload();
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    fetchData();

    // Handle form submission logic here

  };

  return (
    <>
      <div id="login-page">
        <div className="login-container">
          <div className='head'>
            Login
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
      </div>
    </>

  );
};

export default Login;