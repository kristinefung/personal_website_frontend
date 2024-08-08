import Sidebar from 'components/dashboard/Sidebar';
import Header from 'components/dashboard/Header';

const User = () => {
  document.body.setAttribute('id', 'dashboard-user-page');
  return (
    <>
      <div className='dashboard'>
        <Header />
        <div className='dashboard-body'>
          <Sidebar />
          <div className='dashboard-main'>
            This is User
          </div>
        </div>
      </div>
    </>
  )
}

export default User;