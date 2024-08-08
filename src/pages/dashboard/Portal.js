import { Outlet } from 'react-router-dom'

import Header from 'components/dashboard/Header';
import Sidebar from 'components/dashboard/Sidebar';

const Portal = () => {
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