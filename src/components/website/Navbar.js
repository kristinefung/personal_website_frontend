

const Navbar = ({
  scrollToSec,
  navRefs,
}) => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          KristineFung
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
            <a>PORTFOLIO</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div >
    </>
  )
}

export default Navbar