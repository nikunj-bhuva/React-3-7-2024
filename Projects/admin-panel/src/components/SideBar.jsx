import React from "react";

const SideBar = () => {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h3 className="text-center">Admin Panel</h3>
      <ul className="nav flex-column mt-4">
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link text-white">
            <i className="bi bi-person-circle me-2"></i> User Management
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link text-white">
            <i className="bi bi-box-seam me-2"></i> Product Management
          </a>
        </li>
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link text-white">
            <i className="bi bi-graph-up me-2"></i> Reports
          </a>
        </li>
        <li className="nav-item">
          <a href="#!" className="nav-link text-white">
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
