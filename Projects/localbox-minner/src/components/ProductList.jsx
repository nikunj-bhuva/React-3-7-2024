import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList = ({ addToCart, cartCount }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        alert("Something went wrong!");
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
