import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart container my-5">
      <h2 className="cart-title">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty!</p>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item animated-item">
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn btn-danger remove-btn"
              >
                <FaTrashAlt className="remove-icon" /> Remove
              </button>
            </div>
          ))}
          <div className="cart-total mt-4">
            <h3>Total: ₹{total}</h3>
            <button className="btn btn-warning checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
