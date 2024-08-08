import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRectangleList, faIdCard } from '@fortawesome/free-solid-svg-icons'

import 'styles/Dashboard.css'

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <div className="dashboard-sidebar">
        <ul className="menu">
          <li className={location.pathname === '/dashboard/user' ? 'active' : ''}>
            <a href="/dashboard/user">
              <FontAwesomeIcon icon={faUser} />
              <span>User</span>
            </a>
          </li>
          <li className={location.pathname === '/dashboard/profile' ? 'active' : ''}>
            <a href="/dashboard/profile">
              <FontAwesomeIcon icon={faIdCard} />
              <span>Profile</span>
            </a>
          </li>
          <li className={location.pathname === '/dashboard/enquiry' ? 'active' : ''}>
            <a href="/dashboard/enquiry">
              <FontAwesomeIcon icon={faRectangleList} />
              <span>Enquiry</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;