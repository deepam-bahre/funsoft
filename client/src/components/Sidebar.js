import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

function Sidebar() {
  //   const [isAdmin, setAdmin] = useState(false);

  let navigate = useNavigate();

  let user = window.localStorage.getItem('userData') ? JSON.parse(window.localStorage.getItem("userData")) : [];
  console.log("JSON.stringify(user)", user.user.isAdmin);

let handleLogout =()=>{
  window.localStorage.clear();
    navigate("/");
}

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="/dashboard" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">FUNSOFT</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            {/* <div className="image">
        <img
          src="dist/img/user2-160x160.jpg"
          className="img-circle elevation-2"
          alt="User Image"
        />
      </div> */}
            <div className="info">
              <a href="/dashboard" className="d-block">
                WELCOME, {user.user.username}
              </a>
            </div>
          </div>

          {/* Sidebar Menu */}
          <nav className="mt-2">
            {user.user.isAdmin === true ? <>
              <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Dashboard</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/customers" className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  <p>Customers</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/addcustomer" className="nav-link">
                  <i className="nav-icon fas fa-money-bill-alt" />
                  <p>add customer</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-money-bill-alt" />
                  <p>Loan setup</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-money-bill-alt" />
                  <p>Loan operations</p>
                </Link>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => alert("will log you out")}
                >
                  <i
                    style={{ color: "#E0E1E4" }}
                    className="nav-icon fas fa-sign-out-alt"
                  />
                  <p style={{ color: "#E0E1E4", cursor: "pointer" }} onClick={() => {handleLogout()}}>log out</p>
                </div>
              </li>
            </ul>
            </> : 
            <>
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-th" />
                  <p>Dashboard</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/customers" className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  <p>Customers</p>
                </Link>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => alert("will log you out")}
                >
                  <i
                    style={{ color: "#E0E1E4" }}
                    className="nav-icon fas fa-sign-out-alt"
                  />
                  <p style={{ color: "#E0E1E4", cursor: "pointer" }} onClick={() => {handleLogout()}}>log out</p>
                </div>
              </li>
            </ul>
            </> }

          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}

export default Sidebar;
