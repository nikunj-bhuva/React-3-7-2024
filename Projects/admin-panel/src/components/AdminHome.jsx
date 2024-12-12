import React, { useEffect } from "react";
import gsap from "gsap";

const AdminHome = () => {
  useEffect(() => {
    gsap.from(".card", {
      duration: 1,
      opacity: 0,
      scale: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div>
      <h2
        className="mb-4 text-center"
        style={{
          color: "#2d3748",
          fontWeight: "bold",
        }}
      >
        Welcome to Admin Dashboard
      </h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div
            className="card p-4 shadow-sm text-center"
            style={{
              backgroundColor: "#f7fafc",
              borderRadius: "10px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h5 style={{ color: "#2b6cb0" }}>Users</h5>
            <p>150 Active Users</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card p-4 shadow-sm text-center"
            style={{
              backgroundColor: "#f7fafc",
              borderRadius: "10px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h5 style={{ color: "#2b6cb0" }}>Products</h5>
            <p>120 Products Available</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card p-4 shadow-sm text-center"
            style={{
              backgroundColor: "#f7fafc",
              borderRadius: "10px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h5 style={{ color: "#2b6cb0" }}>Sales</h5>
            <p>$10,000 Revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
