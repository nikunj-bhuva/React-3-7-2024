import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";
import axios from "axios";

const Navbar = ({ cartCount }) => {
  let [userInput, setUserInput] = useState("");
  let [products, setProducts] = useState([]);

  console.log(products);

  useEffect(() => {
    axios("http://localhost:3000/products")
      .then((response) => {
        let { data } = response;
        setProducts(data);
      })
      .catch((error) => {
        alert("something went Wrong!");
      });
  }, []);

  return (
    <div className="container-fluid">
      <nav className="navbar">
        <div className="container">
          <h1 className="navbar-title">
            <span className="logo">Shopify</span>
          </h1>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Search products..."
            />
            <FaSearch className="search-icon" />
          </div>
          <div className="links">
            <Link to="/" className="nav-link text-light fw-medium">
              Home
            </Link>
            <Link to="/products" className="nav-link text-light fw-medium">
              Products
            </Link>
            <div className="dropdown">
              <button className="dropbtn">
                <FaUserCircle className="user-icon" /> Profile
              </button>
              <div className="dropdown-content">
                <Link to="/profile">View Profile</Link>
                <Link to="/">Logout</Link>
              </div>
            </div>
            <Link
              to="/cart"
              className="nav-link cart-link text-light fw-medium"
            >
              <FaShoppingCart className="cart-icon" /> Cart ({cartCount})
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
