import React, { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router";

const Header = () => {
  console.log("header");
  useEffect(() => {
    gsap.from(".header", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      className="header d-flex justify-content-between align-items-center shadow"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "20px 30px",
        background: "linear-gradient(90deg, #007bff, #0056b3)",
        color: "#fff",
        fontFamily: "'Roboto', sans-serif",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h3
        className="m-0"
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        Admin Dashboard
      </h3>
      <Link to="/">
        <button
          className="btn btn-light btn-sm fw-bold"
          style={{
            padding: "8px 16px",
            borderRadius: "5px",
            transition: "transform 0.3s ease, background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.backgroundColor = "#f8f9fa";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.backgroundColor = "#fff";
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Header;
