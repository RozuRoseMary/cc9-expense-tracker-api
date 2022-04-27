import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      // style={{ backgroundColor: "#000" }}
      className="navbar navbar-expand-sm sticky-top navbar-light bg-warning"
    >
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand text-black-50 fw-bolder">
          EXPENSE TRACKER
        </Link>

        <div className="navbar-collapse justify-content-end">
          <ul className="navbar-nav gap-x-4">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                <i className="fa-solid fa-home fs-5"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/new" className="nav-link">
                <i className="fa-solid fa-plus fs-5"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
