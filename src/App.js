import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from 'react';

import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login'
import Dashboard from 'pages/Dashboard/Dashboard';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem('token')) || false
  );

  const setAuth = (value) => {
    console.log(value);
    setIsAuthenticated(value);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!isAuthenticated
          ? <Login setAuth={setAuth} />
          : <Navigate to="/dashboard" replace />
        } />
        <Route path="/dashboard" element={isAuthenticated
          ? <Dashboard />
          : <Navigate to="/login" replace />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
