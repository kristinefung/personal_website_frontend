import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faPaperPlane, faIdCard } from '@fortawesome/free-solid-svg-icons';

import 'styles/Portal.css'

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <div className="dashboard-sidebar">
        <ul className="menu">
          {/* <li className={location.pathname.startsWith('/dashboard/user') ? 'active' : ''}>
            <a href="/dashboard/user">
              <FontAwesomeIcon icon={faUser} />
              <span>User</span>
            </a>
          </li> */}
          <li className={location.pathname.startsWith('/dashboard/profile') ? 'active' : ''}>
            <a href="/dashboard/profile">
              <FontAwesomeIcon icon={faIdCard} />
              <span>Profile</span>
            </a>
          </li>
          <li className={location.pathname.startsWith('/dashboard/enquiry') ? 'active' : ''}>
            <a href="/dashboard/enquiry">
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Enquiry</span>
            </a>
          </li>
          <li className='bottom'>
            <a href="/">
              <FontAwesomeIcon icon={faHouse} />
              <span>Website</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;