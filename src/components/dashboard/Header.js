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
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  )
}

export default Header