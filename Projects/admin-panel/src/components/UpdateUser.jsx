import { useState } from "react";
import EmptyMessage from "./EmptyMessage";
import SpecialCharcterMsg from "./SpecialCharcterMsg";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const UpdateUser = () => {
  const [userData, setUserData] = useState({ name: "", email: "", role: "" });

  let { name, email, role } = userData;

  const [emptyMsg, setEmptyMsg] = useState({
    userName: false,
    userEmail: false,
    userRole: false,
  });

  let { userName, userEmail, userRole } = emptyMsg;

  const [specialCharMsg, setSpecialCharMsg] = useState(false);

  let navigate = useNavigate();

  let { userId } = useParams();

  const handleFormSubmit = () => {
    let specialCharRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name || !email || !role) {
      setEmptyMsg({ userName: !name, userEmail: !email, userRole: !role });
    } else if (!specialCharRegx.test(email)) {
      setSpecialCharMsg(true);
      setEmptyMsg({ userName: false, userEmail: false, userRole: false });
    } else {
      if (role === "user") {
        alert("Only admins can update roles!");
        setEmptyMsg({ userName: false, userEmail: false, userRole: false });
        setSpecialCharMsg(false);
      } else {
        axios
          .patch(`http://localhost:3000/users/${userId}`, {
            name,
            email,
            role,
          })
          .then((response) => {
            console.log(response);
            alert("User updated successfully!");
            navigate("/admindashboard");
          })
          .catch((error) => {
            alert("Something went wrong!");
          });
        setEmptyMsg({ userName: false, userEmail: false, userRole: false });
        setUserData({ name: "", email: "", role: "" });
        setSpecialCharMsg(false);
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "28rem" }}>
        <h2 className="text-center mb-4 text-primary">Update User</h2>
        <form>
          <div className="mb-3">
            <label className="form-label fw-bold">Name</label>
            <input
              type="text"
              className="form-control rounded-3"
              value={name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              placeholder="Enter user name"
            />
            {userName && <EmptyMessage message="Name field cannot be empty!" />}
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email Address</label>
            <input
              type="email"
              className="form-control rounded-3"
              value={email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              placeholder="Enter user email"
            />
            {userEmail && (
              <EmptyMessage message="Email field cannot be empty!" />
            )}
            {specialCharMsg && (
              <SpecialCharcterMsg message="Please enter a valid email address!" />
            )}
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Role</label>
            <select
              className="form-select rounded-3"
              value={role}
              onChange={(e) =>
                setUserData({ ...userData, role: e.target.value })
              }
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            {userRole && <EmptyMessage message="Select a specific role!" />}
          </div>
          <button
            type="button"
            className="btn btn-primary w-100 mt-3 rounded-3"
            onClick={handleFormSubmit}
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
