import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ReadProducts = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(product);

  let { pId } = useParams();

  useEffect(() => {
    axios(`http://localhost:3000/products/${pId}`)
      .then((response) => {
        let { data } = response;
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("something went wrong!");
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>product not found!</div>;
  }

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Product Details</h2>
      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <div className="text-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </div>
        <h4 className="mt-5 text-center">Name: {product.name}</h4>
        <h5 className="mt-3 text-center">Price: {product.price}</h5>
        <p className="mt-3 text-center">
          <strong>Category: {product.category}</strong>
        </p>
        <p className="mt-3 text-center">
          <strong>Description: {product.description}</strong>
        </p>
        <div className="text-center mt-4">
          <Link to="/product">
            <button className="btn btn-primary">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadProducts;
