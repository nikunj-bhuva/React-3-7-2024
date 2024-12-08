import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const UserManagement = () => {
  const [userData, setUserData] = useState([]);

  const handleEditUser = (userId) => {
    console.log(userId);
  };

  const handleDeleteUser = (userId) => {
    axios
      .delete(`http://localhost:3000/users/${userId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert("something went Wrong!");
      });
  };

  useEffect(() => {
    axios(`http://localhost:3000/users`)
      .then((response) => {
        let { data } = response;
        setUserData(data);
      })
      .catch((error) => {
        alert("something went Wrong!");
      });
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <table className="table table-bordered mt-3">
        <thead>
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
            <tr key={user.id}>
              <td className="fw-medium">{user.id}</td>
              <td className="fw-medium">{user.name}</td>
              <td className="fw-medium">{user.email}</td>
              <td className="fw-medium">{user.role}</td>
              <td className="fw-medium">
                <Link to={`/edit/${user.id}`}>
                  <button
                    className="btn btn-primary btn-sm mx-2"
                    onClick={() => handleEditUser(user.id)}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className="btn btn-danger btn-sm ms-2"
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
