import React, { useState } from 'react';

import 'pages/Login/Login.css'

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');
  async function fetchData() {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
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
    console.log('Username:', email);
    console.log('Password:', password);
    fetchData();

    // Handle form submission logic here

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