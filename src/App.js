import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from 'react';

import Home from 'pages/Home';
import Login from 'pages/Login';
import DashboardHome from 'pages/dashboard/DashboardHome';
import Enquiry from 'pages/dashboard/Enquiry';
import User from 'pages/dashboard/User';
import Profile from 'pages/dashboard/Profile';

import 'App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem('token') || false
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
          ? <DashboardHome />
          : <Navigate to="/login" replace />
        } />
        <Route path="/dashboard/user" element={isAuthenticated
          ? <User />
          : <Navigate to="/login" replace />
        } />
        <Route path="/dashboard/profile" element={isAuthenticated
          ? <Profile />
          : <Navigate to="/login" replace />
        } />
        <Route path="/dashboard/enquiry" element={isAuthenticated
          ? <Enquiry />
          : <Navigate to="/login" replace />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
