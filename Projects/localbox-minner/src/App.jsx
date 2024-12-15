import { useEffect } from "react";
import { useState } from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import ProductList from "./components/ProductList";
import "./App.css";
import Cart from "./components/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";

const App = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [showModal, setShowModal] = useState(false);
  const [addedItem, setAddedItem] = useState(null);
  const location = useLocation();

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setAddedItem(product);
    setShowModal(true);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="app">
      {location.pathname !== "/" && <Navbar cartCount={cart.length} />}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        onClick={() => setShowModal(false)}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addToCartModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addToCartModal">
                Item Added to Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                {addedItem
                  ? `${addedItem.name} has been added to your cart!`
                  : ""}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/products"
          element={
            <ProductList cartCount={cart.length} addToCart={addToCart} />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
