import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "../Components/Bootstraptemplate.module.css";
import Errorpage from "../assets/error-page.png";
import Footer from "./Footer";

const Bootstraptemplate = () => {
  const [product, setProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    const allProducts = async () => {
      try {
        const productData = await fetch(`https://fakestoreapi.com/products`);
        const response = await productData.json();
        setProduct(response);
        setFilteredProducts(response);
      } catch (error) {
        console.log(error);
      }
    };
    allProducts();
  }, []);

  const handlerMenProducts = () => {
    const filteredMenProducts = product.filter(
      (ele) => ele.category === "men's clothing"
    );
    setFilteredProducts(filteredMenProducts);
  };

  const handlerWomenProducts = () => {
    const filteredWomenProducts = product.filter(
      (ele) => ele.category === "women's clothing"
    );
    setFilteredProducts(filteredWomenProducts);
  };

  const handlerElectronicProducts = () => {
    const filteredElectronicProducts = product.filter(
      (ele) => ele.category === "electronics"
    );
    setFilteredProducts(filteredElectronicProducts);
  };

  const handlerJeweleryProducts = () => {
    const filteredJeweleryProducts = product.filter(
      (ele) => ele.category === "jewelery"
    );
    setFilteredProducts(filteredJeweleryProducts);
  };

  const handlerAllProducts = () => {
    setFilteredProducts(product);
  };

  const allProducts = filteredProducts ? (
    filteredProducts.map((product, idx) => {
      return (
        <div key={idx} className={`col ${styles.animateCard}`}>
          <div
            className={`card text-center shadow ${styles.customCard}`}
            style={{ width: "16rem", height: "440px" }}
          >
            <img
              src={product.image}
              className="card-img-top p-4"
              alt={product.image}
              style={{ height: "250px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className={`card-title ${styles.cardTitle}`}>
                {product.title.slice(0, 18)}
              </h5>
              <p className={`card-text ${styles.cardText}`}>
                {product.description.slice(0, 20)}
              </p>
              <a href="#" className={`btn btn-primary ${styles.cardBtn}`}>
                {product.price}
              </a>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div className="text-center ms-5">
      <img src={Errorpage} />
    </div>
  );

  return (
    <>
      <header>
        <Navbar
          allCategory={handlerAllProducts}
          men={handlerMenProducts}
          women={handlerWomenProducts}
          electronic={handlerElectronicProducts}
          jewelery={handlerJeweleryProducts}
        />
      </header>

      <main>
        <section className="container">
          <div className="row row-cols-4 mt-5 row-gap-4">{allProducts}</div>
        </section>
      </main>

      <footer className="mt-5">
        <Footer />
      </footer>
    </>
  );
};

export default Bootstraptemplate;
