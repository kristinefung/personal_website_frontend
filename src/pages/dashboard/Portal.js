import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import UserService from 'services/UserService';
import TokenStorage from 'adapters/local-storages/TokenStorage';

import Header from 'components/dashboard/Header';
import Sidebar from 'components/dashboard/Sidebar';

const Portal = ({ setAuth }) => {
  const userService = UserService();
  const tokenStorage = TokenStorage();

  useEffect(() => {
    const fetchVerifyToken = async () => {
      try {
        const success = await userService.verifyUserSessionToken();
        if (!success) {
          console.log("!success");
          tokenStorage.removeAuthToken();
          setAuth(false);
        }
      } catch (err) {
        console.log(err);
        tokenStorage.removeAuthToken();
        setAuth(false);
      }
    };
    fetchVerifyToken();
  }, []);

  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard-body'>
        <Sidebar />
        <div className='dashboard-main'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Portal;