import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import Logo from '../../assets/Img/logo.svg';
import HomeIcon from '../../assets/Icons/home.svg';
import VideosIcon from '../../assets/Icons/videos.svg';
import DistributorsIcon from '../../assets/Icons/distributors.svg';
import ServicesIcon from '../../assets/Icons/services.svg';
import SupportIcon from '../../assets/Icons/support.svg';

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
          <img src={Logo} alt="logo" className="navbar-logo" />
          <div className="menu-icon"></div>
          <div className="nav-menu">
            <Link to="/">
              <div className="nav-link-container">
                <img src={HomeIcon} alt="navIcon" className="nav-icon" />
                <span className="nav-link">الرئيسية</span>
              </div>
            </Link>
            <Link to="/">
              <div className="nav-link-container">
                <img src={VideosIcon} alt="navIcon" className="nav-icon" />
                <span className="nav-link">فيديوهات</span>
              </div>
            </Link>
            <Link to="/">
              <div className="nav-link-container">
                <img
                  src={DistributorsIcon}
                  alt="navIcon"
                  className="nav-icon"
                />
                <span className="nav-link">الموزعين</span>
              </div>
            </Link>
            <Link to="/">
              <div className="nav-link-container">
                <img src={ServicesIcon} alt="navIcon" className="nav-icon" />
                <span className="nav-link">خدماتنا</span>
              </div>
            </Link>
            <Link to="/support">
              <div className="nav-link-container">
                <img src={SupportIcon} alt="navIcon" className="nav-icon" />
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
