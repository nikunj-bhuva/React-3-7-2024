import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios(`http://localhost:3000/products`).then((response) => {
      let { data } = response;
      setProductData(data);
    });
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <div className="row g-5 mt-4">
            {productData.map((product) => (
              <div key={product.id} className="col-3">
                <div className="card shadow-lg">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.name}
                    style={{ height: "220px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      {product.description.slice(0, 70)}
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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
