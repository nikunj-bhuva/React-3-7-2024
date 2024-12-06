import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router";

const Home = () => {
  const [productData, setProductData] = useState([]);

  console.log(productData);

  useEffect(() => {
    axios(`http://localhost:3000/products`).then((response) => {
      let { data } = response;
      setProductData(data);
    });
  }, []);

  return (
    <div
      style={{
        height: "auto",
        backgroundImage:
          "url(https://mdbootstrap.com/img/Photos/new-templates/glassmorphism-article/img7.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "40px 0px",
      }}
    >
      <div className="container">
        <div className="row g-5">
          {productData.map((product) => (
            <div className="col-3">
              <div className="card">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.name}
                  style={{ height: "220px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    {product.description.slice(0,70)}
                  </p>
                  <a
                    href="#!"
                    className="btn btn-primary"
                    data-mdb-ripple-init=""
                  >
                    {product.price}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
