import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../../context/UserProvider';

const Navbar = () => {
  const { loggedIn, setLoggedIn, logout } = useUserContext();
  const showLoggedIn = () => {
    if (!loggedIn) {
      return (
        // <ul className="navbar-nav">
        <>
          {/* <li className="nav-item"> */}
          <NavLink className="nav-link" aria-current="page" to="/main/login">

            <button type="button" className="btn btn-primary me-3 mb-1">
              Login
            </button>
          </NavLink>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <NavLink className="nav-link" aria-current="page" to="/main/signup">
            <button type="button" className="btn btn-primary me-3 mb-1">
              SignUp
            </button>
          </NavLink>
          {/* </li> */}
        </>
        // </ul >

      );
    }
  }

  const showLogout = () => {
    if (loggedIn) {
      return (
        <ul className="navbar-nav">
          {/* // <li className="nav-item"> */}
          {/* <button className="btn btn-danger ms-3" aria-current="page" onClick={logout}>
                    Logout
                </button> */}
          <button type="button" className="btn btn-primary me-3 mb-2" onClick={logout}>
            LogOut
          </button>
          {/* // </li> */}
        </ul>
      );
    }
  }



  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        {/* Container wrapper */}
        <div className="container">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://www.brandbuilders.com.pk/wp-content/uploads/2021/07/brand-builders-brandbuilders-digital-marketing-agency-lahore-amr1-new.png"
                height={40}
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
            <NavLink className="nav-link" to="/main/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/signup">
              Signup
            </NavLink>
          </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/browsemockups">
                  Browse Mockups
                </NavLink>
              </li>
              {showLoggedIn()}
              {showLogout()}
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">

            {/* Avatar */}
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height={25}
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                {/* <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li> */}
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>

  )
}

export default Navbar