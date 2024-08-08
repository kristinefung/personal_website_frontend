import Header from 'components/dashboard/Header';
import Sidebar from 'components/dashboard/Sidebar';

import 'styles/Dashboard.css'

const DashboardHome = () => {

  document.body.setAttribute('id', 'dashboard-page');
  return (
    <>
      <div className='dashboard'>
        <Header />
        <div className='dashboard-body'>
          <Sidebar />
          <div className='dashboard-main'>
            This is Dashboard
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHome;