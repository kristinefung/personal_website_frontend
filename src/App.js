import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Root from 'pages/website/Root';
import Login from 'pages/Login';
// Dashboard related
import Portal from "pages/dashboard/Portal";
import Dashboard from 'pages/dashboard/Dashboard';
import EnquiryList from 'pages/dashboard/enquiry/EnquiryList';
import EnquiryEdit from 'pages/dashboard/enquiry/EnquiryEdit';
import User from 'pages/dashboard/User';
import ProfileList from 'pages/dashboard/profile/ProfileList';
import WorkEdit from "pages/dashboard/profile/WorkEdit";
import WorkCreate from "pages/dashboard/profile/WorkCreate";
import EducationEdit from "pages/dashboard/profile/EducationEdit";
import EducationCreate from "pages/dashboard/profile/EducationCreate";

import 'App.css';
import 'styles/FormElement.css';

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
        <Route path="/" element={<Root />} />
        <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/dashboard" replace />} />

        <Route path='/dashboard' element={isAuthenticated ? <Portal setAuth={setAuth} /> : <Navigate to="/login" replace />} >
          <Route path='' element={<Dashboard />} />
          <Route path='user' element={<User />} />
          <Route path='profile' element={<ProfileList />} />
          <Route path='profile/work/edit/:id' element={<WorkEdit />} />
          <Route path='profile/work/create' element={<WorkCreate />} />
          <Route path='profile/education/edit/:id' element={<EducationEdit />} />
          <Route path='profile/education/create' element={<EducationCreate />} />
          <Route path='enquiry' element={<EnquiryList />} />
          <Route path='enquiry/:id' element={<EnquiryEdit />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
