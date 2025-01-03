import React, { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config/firebase";

const googleProvider = new GoogleAuthProvider();

const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signupUser = () => {
    setLoading(true);
    setError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("User Signed Up Successfully");
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="signup-container">
      <h1 className="form-title">Create an Account</h1>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="form-input"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="form-actions">
        <button
          className="btn btn-outline-primary me-5"
          onClick={signInWithGoogle}
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In with Google"}
        </button>
        <button
          className="btn btn-outline-success"
          onClick={signupUser}
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default User;
