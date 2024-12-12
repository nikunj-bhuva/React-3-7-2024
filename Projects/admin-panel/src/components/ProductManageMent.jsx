import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import gsap from "gsap";

const ProductManagement = () => {
  const [productData, setProductData] = useState([]);

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`http://localhost:3000/products/${productId}`)
        .then(() => {
          setProductData(productData.filter((product) => product.id !== productId));
        })
        .catch(() => {
          alert("Something went wrong!");
        });
    }
  };

  useEffect(() => {
    axios("http://localhost:3000/products")
      .then((response) => {
        setProductData(response.data);
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
        Product Management
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
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr
              key={product.id}
              className="align-middle"
              style={{ transition: "background-color 0.3s ease" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f1f1f1")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                {product.description.length > 50
                  ? `${product.description.slice(0, 50)}...`
                  : product.description}
              </td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "contain",
                  }}
                />
              </td>
              <td className="d-flex">
                <Link to={`/readproduct/${product.id}`}>
                  <button className="btn btn-success btn-sm mx-2">View</button>
                </Link>
                <Link to={`/editproduct/${product.id}`}>
                  <button className="btn btn-primary btn-sm mx-2">Edit</button>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteProduct(product.id)}
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

export default ProductManagement;
