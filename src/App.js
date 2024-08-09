import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Home from 'pages/Home';
import Login from 'pages/Login';
// Dashboard related
import Portal from "pages/dashboard/Portal";
import Dashboard from 'pages/dashboard/Dashboard';
import EnquiryList from 'pages/dashboard/enquiry/EnquiryList';
import EnquiryEdit from 'pages/dashboard/enquiry/EnquiryEdit';
import User from 'pages/dashboard/User';
import ProfileList from 'pages/dashboard/profile/ProfileList';
import WorkEdit from "pages/dashboard/profile/WorkEdit";
import EducationEdit from "pages/dashboard/profile/EducationEdit";

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
          ? <Portal setAuth={setAuth} />
          : <Navigate to="/login" replace />
        } >
          <Route path='' element={<Dashboard />} />
          <Route path='user' element={<User />} />
          <Route path='profile' element={<ProfileList />} />
          <Route path='profile/work/:id' element={<WorkEdit />} />
          <Route path='profile/education/:id' element={<EducationEdit />} />
          <Route path='enquiry' element={<EnquiryList />} />
          <Route path='enquiry/:id' element={<EnquiryEdit />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
