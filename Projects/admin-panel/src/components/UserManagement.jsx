import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SideBar from "./SideBar";
import gsap from "gsap";

const UserManagement = () => {
  const [userData, setUserData] = useState([]);

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:3000/users/${userId}`)
        .then(() => {
          setUserData(userData.filter((user) => user.id !== userId));
        })
        .catch(() => {
          alert("Something went wrong!");
        });
    }
  };

  useEffect(() => {
    axios("http://localhost:3000/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  }, []);

  useEffect(() => {
    gsap.from("table", { duration: 1, opacity: 0, y: 50, ease: "power3.out" });
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        padding: "20px",
        overflowY: "auto",
        fontFamily: "'Roboto', sans-serif",
        background: "linear-gradient(to bottom, #f9f9f9, #e0e0e0)",
        minHeight: "100vh",
      }}
    >
      <h2
        className="text-center mt-4 mb-4 bg-dark-subtle p-3 rounded-5 text-white shadow"
        style={{
          fontSize: "2rem",
          background: "linear-gradient(to right, #007bff, #0056b3)",
        }}
      >
        User Management
      </h2>

      <table
        className="table table-bordered table-hover mt-3 shadow-lg"
        style={{
          background: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <thead className="bg-primary text-white" style={{ fontSize: "1.1rem" }}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr
              key={user.id}
              className="align-middle"
              style={{ transition: "background-color 0.3s ease" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f1f1f1")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`/edit/${user.id}`}>
                  <button
                    className="btn btn-success btn-sm mx-2"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  style={{ transition: "all 0.3s ease" }}
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
