import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faUser, faRectangleList, faIdCard } from '@fortawesome/free-solid-svg-icons'

import 'pages/Dashboard/Dashboard.css'

const Dashboard = () => {
  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    window.location.reload();
  };

  document.body.setAttribute('id', 'dashboard-page');
  return (
    <>
      <div className="sidebar">
        <ul className="menu">
          <li className='active'>
            <a href="/dashboard">
              <FontAwesomeIcon icon={faTableColumns} />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/user">
              <FontAwesomeIcon icon={faUser} />
              <span>User</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/profile">
              <FontAwesomeIcon icon={faIdCard} />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/enquiry">
              <FontAwesomeIcon icon={faRectangleList} />
              <span>Enquiry</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='main'>
        <div className='header-wrapper'>
          <div className='header-title'>
            Dashboard
          </div>
          <div className='header-user'>
            <button onClick={handleLogout}>Log out</button>

          </div>
        </div>
        This is dashboard
      </div>
    </>
  )
}

export default Dashboard;