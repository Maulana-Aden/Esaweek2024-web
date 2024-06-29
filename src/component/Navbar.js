import "../App.css";
import React, { useState } from "react";
// import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);
  const [close, setClose] = useState(false);
  const [navMob, setNavMob] = useState(false);
  const [sideClose, setSideClose] = useState(true);

  function handleMouseEnter(e) {
    setMenu(true);
  }

  function handleMouseLeave(e) {
    setMenu(false);
  }

  function handleCloseEnter(e) {
    setClose(true);
    setSideClose(true);
  }

  function handleCloseLeave(e) {
    setClose(false);
    setSideClose(false);
  }

  function tabEnter(e) {
    setSideClose(false);
  }

  function tabLeave(e) {
    setSideClose(true);
  }

  const handleClick = () => {
    if (sideClose === true) {
      if (navMob === true) {
        setNavMob(false);
      } else {
        setNavMob(true);
      }
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "navbar-container active" : "navbar-container"}>
      <div className="header-left">
        <div className="icon">
          <a href="#main">
            <img src="/img/icon-header.png" alt="" />
          </a>
        </div>

        <div
          className={navMob ? "outside-tab active" : "outside-tab"}
          onClick={handleClick}
        >
          <div
            className={navMob ? "navbar active" : "navbar"}
            onMouseEnter={tabEnter}
            onMouseLeave={tabLeave}
          >
            <div className="navbar-header">
              <a href="/">
                <img src="/img/icon-header.png" alt="" width={"100px"} />
              </a>
              <div
                className="close-tag"
                onMouseEnter={handleCloseEnter}
                onMouseLeave={handleCloseLeave}
              >
                <button onClick={handleClick}>
                  <span
                    className={close ? "close-line active" : "close-line"}
                  ></span>
                  <span
                    className={close ? "close-line active" : "close-line"}
                  ></span>
                  <span
                    className={close ? "close-line active" : "close-line"}
                  ></span>
                </button>
              </div>
            </div>
            <ul className="navbar-item">
              <li>
                <a href="#hero ">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#event">
                  <span>Event</span>
                </a>
              </li>
              <li>
                <a href="#footer">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>©esaweekunnes2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-login">
        <div
          className="humb-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button onClick={handleClick}>
            <span
              className={menu ? "navbar-menu active" : "navbar-menu"}
            ></span>
            <span
              className={menu ? "navbar-menu active" : "navbar-menu"}
            ></span>
            <span
              className={menu ? "navbar-menu active" : "navbar-menu"}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
