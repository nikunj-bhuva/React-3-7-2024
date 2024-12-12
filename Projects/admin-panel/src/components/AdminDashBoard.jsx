import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import AdminHome from "./AdminHome";
import UserManagement from "./UserManagement";
import ProductManageMent from "./ProductManageMent";
import AddProduct from "./AddProduct";
import gsap from "gsap";

const AdminDashBoard = () => {
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState(<AdminHome />);

  useEffect(() => {
    gsap.from(".sidebar", {
      duration: 1,
      x: -300,
      opacity: 0,
      ease: "power3.out",
    });
    gsap.from(".content", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    });

    switch (location.pathname) {
      case "/admindashboard":
        setActiveComponent(<AdminHome />);
        break;
      case "/admindashboard/user":
        setActiveComponent(<UserManagement />);
        break;
      case "/admindashboard/product":
        setActiveComponent(<ProductManageMent />);
        break;
      case "/admindashboard/addproduct":
        setActiveComponent(<AddProduct />);
        break;
      default:
        setActiveComponent(<AdminHome />);
    }
  }, [location.pathname]);

  return (
    <div
      className="d-flex"
      style={{
        height: "100vh",
        overflow: "hidden",
        fontFamily: "'Roboto', sans-serif",
        background: "linear-gradient(to bottom, #f3f4f6, #e2e8f0)",
      }}
    >
      <SideBar className="sidebar" />

      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <div
          className="content container-fluid p-4"
          style={{
            overflowY: "auto",
            height: "calc(100vh - 80px)",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            margin: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          {activeComponent}
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
