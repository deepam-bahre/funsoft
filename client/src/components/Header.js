import React from "react";
import {useNavigate } from "react-router-dom";

function Header() {

let navigate = useNavigate();

let handleLogout =()=>{
  window.localStorage.clear();
    navigate("/");
}

  return (
    <div>
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </div>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="index3.html" className="nav-link" style={{fontSize: "1.8rem", lineHeight: "1rem"}}>
                <span className="text-primary fw-bold">Fun</span>
                <span className="text-warning fw-bold">soft</span>
              </a>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Navbar Search */}
            <li className="nav-item">
              <div
                className="nav-link"
                data-widget="navbar-search"
                role="button"
              >
                <i className="fas fa-search" />
              </div>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control form-control-navbar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                      <button
                        className="btn btn-navbar"
                        type="button"
                        data-widget="navbar-search"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <li className="nav-item">
              <div className="nav-link" data-widget="fullscreen" role="button">
                <i className="fas fa-expand-arrows-alt" />
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                data-widget="control-sidebar"
                data-slide="true"
                role="button"
                onClick={() => {handleLogout()}}
              >
                {/* alert("will log you out") */}
                <i className="fas fa-sign-out-alt" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
