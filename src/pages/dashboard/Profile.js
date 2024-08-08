import Sidebar from 'components/dashboard/Sidebar';
import Header from 'components/dashboard/Header';

const Profile = () => {
  document.body.setAttribute('id', 'dashboard-profile-page');
  return (
    <>
      <div className='dashboard'>
        <Header />
        <div className='dashboard-body'>
          <Sidebar />
          <div className='dashboard-main'>
            This is Profile
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;