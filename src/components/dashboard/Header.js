import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import 'styles/Portal.css'

const Header = () => {
  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className='dashboard-header'>
      <div className='logo'>
        <a href="/dashboard">
          Dashboard
        </a>
      </div>
      <div className='user-profile'>
        <button className='logout-btn' onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  )
}

export default Header