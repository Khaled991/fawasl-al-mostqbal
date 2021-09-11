import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  return (
    <div className="z-10">
      <div
        className={`md:hidden absolute z-50 right-1 pointer flex flex-col items-end mr-2 mt-3 ${
          menuIsOpened ? 'opacity-0' : ''
        } transition-all duration-500`}
        onClick={() => setMenuIsOpened(true)}
      >
        <div className="bg-primary w-10 h-1 m-1 rounded-lg" />
        <div className="bg-primary w-10 h-1 m-1 rounded-lg" />
        <div className="bg-primary w-8 h-1 m-1 rounded-lg" />
        {/* <img
          src="src/assets/Icons/menu.svg"
          alt="menuIcon"
          className="w-8 md:hidden m-4 cursor-pointer"
        /> */}
      </div>
      <nav
        className={`navbar-items-container ${
          menuIsOpened ? 'right-5' : ''
        } md:right-5 transition-all duration-500`}
      >
        <div className="navbar-items">
          <img
            src="src/assets/Img/logo.svg"
            alt="logo"
            className="navbar-logo"
          />
          <div className="menu-icon"></div>
          <div className="nav-menu">
            <Link to="/">
              <div className="nav-link-container">
                <img
                  src="src/assets/Icons/home.svg"
                  alt="navIcon"
                  className="nav-icon"
                />
                <span className="nav-link">الرئيسية</span>
              </div>
            </Link>
            <Link to="/">
              <div className="nav-link-container">
                <img
                  src="src/assets/Icons/videos.svg"
                  alt="navIcon"
                  className="nav-icon"
                />
                <span className="nav-link">فيديوهات</span>
              </div>
            </Link>
            <Link to="/">
              <div className="nav-link-container">
                <img
                  src="src/assets/Icons/distributors.svg"
                  alt="navIcon"
                  className="nav-icon"
                />
                <span className="nav-link">الموزعين</span>
              </div>
            </Link>
            <Link to="/">
              <div className="nav-link-container">
                <img
                  src="src/assets/Icons/services.svg"
                  alt="navIcon"
                  className="nav-icon"
                />
                <span className="nav-link">خدماتنا</span>
              </div>
            </Link>
            <Link to="/support">
              <div className="nav-link-container">
                <img
                  src="src/assets/Icons/support.svg"
                  alt="navIcon"
                  className="nav-icon"
                />
                <span className="nav-link">الدعم</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
