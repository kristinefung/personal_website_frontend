import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from 'react';

import Home from 'pages/Home';
import Login from 'pages/Login';
// Dashboard related
import Portal from "pages/dashboard/Portal";
import Dashboard from 'pages/dashboard/Dashboard';
import EnquiryList from 'pages/dashboard/enquiry/EnquiryList';
import EnquiryEdit from 'pages/dashboard/enquiry/EnquiryEdit';
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

        <Route path='/dashboard' element={isAuthenticated
          ? <Portal />
          : <Navigate to="/login" replace />
        } >
          <Route path='' element={<Dashboard />} />
          <Route path='user' element={<User />} />
          <Route path='profile' element={<Profile />} />
          <Route path='enquiry' element={<EnquiryList />} />
          <Route path='enquiry/:id' element={<EnquiryEdit />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
