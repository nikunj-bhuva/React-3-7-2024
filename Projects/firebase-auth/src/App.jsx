import React, { useState, useEffect } from "react";
import User from "./components/User";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import "./app.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  const handleSignOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="auth-container">
      {user === null ? (
        <>
          <h3 className="heading">Create an account to get started</h3>
          <User />
        </>
      ) : (
        <>
          <h1 className="welcome-heading text-dark">Welcome, {user.email}!</h1>
          <button className="btn btn-logout btn-primary mt-5" onClick={handleSignOut}>
            {loading ? "Logging out..." : "Logout"}
          </button>
        </>
      )}
    </div>
  );
};

export default App;
