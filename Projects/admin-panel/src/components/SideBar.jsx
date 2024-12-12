import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ className }) => {
  return (
    <div
      className={`sidebar d-flex flex-column p-3 ${className}`}
      style={{
        width: "250px",
        backgroundColor: "#1a202c",
        color: "white",
        overflowY: "auto", // Allows scrolling only if necessary
      }}
    >
      <h4 className="text-center mb-4" style={{ color: "#cbd5e0" }}>
        Admin Panel
      </h4>
      <NavLink
        to="/admindashboard"
        className="sidebar-item mb-3"
        style={({ isActive }) => ({
          textDecoration: "none",
          padding: "10px",
          borderRadius: "5px",
          color: isActive ? "#fff" : "#cbd5e0",
          backgroundColor: isActive ? "#4a5568" : "transparent",
          fontSize: "1rem",
        })}
      >
        Admin Home
      </NavLink>
      <NavLink
        to="/admindashboard/user"
        className="sidebar-item mb-3"
        style={({ isActive }) => ({
          textDecoration: "none",
          padding: "10px",
          borderRadius: "5px",
          color: isActive ? "#fff" : "#cbd5e0",
          backgroundColor: isActive ? "#4a5568" : "transparent",
          fontSize: "1rem",
        })}
      >
        User Management
      </NavLink>
      <NavLink
        to="/admindashboard/product"
        className="sidebar-item mb-3"
        style={({ isActive }) => ({
          textDecoration: "none",
          padding: "10px",
          borderRadius: "5px",
          color: isActive ? "#fff" : "#cbd5e0",
          backgroundColor: isActive ? "#4a5568" : "transparent",
          fontSize: "1rem",
        })}
      >
        Product Management
      </NavLink>
      <NavLink
        to="/admindashboard/addproduct"
        className="sidebar-item"
        style={({ isActive }) => ({
          textDecoration: "none",
          padding: "10px",
          borderRadius: "5px",
          color: isActive ? "#fff" : "#cbd5e0",
          backgroundColor: isActive ? "#4a5568" : "transparent",
          fontSize: "1rem",
        })}
      >
        Add Product
      </NavLink>
    </div>
  );
};

export default SideBar;
