import { ReactElement, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { ReactComponent as Logo } from "../../assets/Img/logo.svg";
import HomeIcon from "../../assets/Icons/home.svg";
import VideosIcon from "../../assets/Icons/videos.svg";
import DistributorsIcon from "../../assets/Icons/distributors.svg";
import ServicesIcon from "../../assets/Icons/services.svg";
import SupportIcon from "../../assets/Icons/support.svg";

interface INavBarData {
  icon: string;
  path: string;
  label: string;
}

function useOutsideCloseNavbar(
  ref: React.MutableRefObject<any>,
  closeNavBar: () => void
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeNavBar();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const NavBar = () => {
  const wrapperRef = useRef(null);
  const [navbarIsActive, setNavbarIsActive] = useState(false);
  const [activePage, setActivePage] = useState("/");

  useOutsideCloseNavbar(wrapperRef, closeNavBar);

  function closeNavBar(): void {
    setNavbarIsActive(false);
  }

  const navBarData: INavBarData[] = [
    { icon: HomeIcon, path: "/", label: "الرئيسية" },
    { path: "/videos", icon: VideosIcon, label: "فيديوهات" },
    { path: "/partners", icon: DistributorsIcon, label: "الموزعين" },
    { path: "/services", icon: ServicesIcon, label: "خدماتنا" },
    { path: "/support", icon: SupportIcon, label: "الدعم" },
  ];
  function onClickNavbarLink(path: string): void {
    setActivePage(path);
    closeNavBar();
  }
  return (
    <div
      className="z-100"
      // onClick={(e) => console.log(e.target)}
      ref={wrapperRef}
    >
      <div
        style={{ cursor: "pointer" }}
        className={`md:hidden absolute z-50 right-1 pointer flex flex-col items-end mr-2 mt-3 ${
          navbarIsActive ? "opacity-0" : ""
        } transition-all duration-500`}
        onClick={() => setNavbarIsActive(true)}
      >
        <div className="bg-primary w-10 h-1 m-1 rounded-lg" />
        <div className="bg-primary w-10 h-1 m-1 rounded-lg" />
        <div className="bg-primary w-8 h-1 m-1 rounded-lg" />
      </div>
      <nav
        className={`navbar-items-container ${
          navbarIsActive ? "right-5" : ""
        } md:right-5 transition-all duration-500 z-10`}
      >
        <div className="navbar-items">
          <Logo className="navbar-logo" />
          <div className="menu-icon"></div>
          <div className="nav-menu">
            {navBarData.map(({ icon, path, label }) => (
              <Link to={path} key={path}>
                <div
                  className={`nav-link-container ${
                    activePage === path ? "active" : ""
                  }`}
                  onClick={() => onClickNavbarLink(path)}
                >
                  <img src={icon} alt="navIcon" className="nav-icon" />
                  <span className="nav-link">{label}</span>
                </div>
              </Link>
            ))}
            {/* <Link to="/">
              <div
                className={`nav-link-container ${
                  activePage !== "/" ? "active" : ""
                }`}
                onClick={() => setActivePage("/")}
              >
                <img src={HomeIcon} alt="navIcon" className="nav-icon" />
                <span className="nav-link">الرئيسية</span>
              </div>
            </Link>
            <Link to="/">
              <div
                className={`nav-link-container ${
                  activePage !== "/" ? "active" : ""
                }`}
                onClick={() => setActivePage("/")}
              >
                <img src={VideosIcon} alt="navIcon" className="nav-icon" />
                <span className="nav-link">فيديوهات</span>
              </div>
            </Link>
            <Link to="/partners">
              <div
                className={`nav-link-container ${
                  activePage == "/partne=rs" ? "active" : ""
                }`}
                onClick={() => setActivePage("/partners")}
              >
                <img
                  src={DistributorsIcon}
                  alt="navIcon"
                  className="nav-icon"
                />
                <span className="nav-link">الموزعين</span>
              </div>
            </Link>
            <Link to="/">
              <div
                className={`nav-link-container ${
                  activePage !== "/" ? "active" : ""
                }`}
                onClick={() => setActivePage("/")}
              >
                <img src={ServicesIcon} alt="navIcon" className="nav-icon" />
                <span className="nav-link">خدماتنا</span>
              </div>
            </Link>
            <Link to="/support">
              <div
                className={`nav-link-container ${
                  activePage == "/suppo=rt" ? "active" : ""
                }`}
                onClick={() => setActivePage("/support")}
              >
                <img src={SupportIcon} alt="navIcon" className="nav-icon" />
                <span className="nav-link">الدعم</span>
              </div>
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
