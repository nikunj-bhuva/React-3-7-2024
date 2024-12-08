import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
      <a className="navbar-brand" href="#!">
        Admin Dashboard
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#!">
              <i className="bi bi-bell"></i> Notifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              <i className="bi bi-person"></i> Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
