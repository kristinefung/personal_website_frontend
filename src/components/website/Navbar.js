import Logo from 'assets/logo.png'

const Navbar = ({
  scrollToSec,
  navRefs,
}) => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} height={40} />
        </div>
        <ul className="menu">
          <li>
            <a
              onClick={() => scrollToSec(navRefs.homeRef)}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSec(navRefs.aboutRef)}>
              ABOUT
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSec(navRefs.portfolioRef)}>
              PORTFOLIO</a>
          </li>
          <li>
            <a
              className="btn-normal"
              onClick={() => scrollToSec(navRefs.contactRef)}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div >
    </>
  )
}

export default Navbar