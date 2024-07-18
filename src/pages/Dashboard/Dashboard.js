const Dashboard = () => {
  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      This is dashboard
      <button onClick={handleLogout}>Log out</button>
    </>
  )
}

export default Dashboard;