import React, { useState } from 'react';

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [alert, setAlert] = useState('');
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
      setAlert("INTERNAT_SERVER_ERROR");
      return;
    }

    const json = await data.json();
    console.log(json);
    if (json.status !== 0) {
      setAlert(json.status_code);
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
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
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
          <div>{alert}</div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;