import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="col-12 col-md-3 mb-4 mt-5">
      <motion.div
        className="card shadow-lg border-0 rounded-3"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <img
          className="card-img-top rounded-3 p-3"
          src={product.image}
          alt={product.name}
          style={{ height: "250px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5
            className="card-title text-truncate"
            style={{ fontSize: "1.1rem" }}
          >
            {product.name}
          </h5>
          <p
            className="card-text text-truncate"
            style={{ fontSize: "0.95rem" }}
          >
            {product.description}
          </p>
          <p className="card-text">
            <span
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#FF9F43",
              }}
            >
              ₹{product.price}
            </span>
          </p>
          <button
            className="btn btn-warning w-100 rounded-pill"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
