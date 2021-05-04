import { useState } from "react";

const CartItem = ({ id, counter, setCounter }) => {
  return (
    <div className="cart-item">
      <div className="cart-line">
        <div className="cart-counter">
          <button className="btCounter">-</button>
          <div className="counter">{counter}</div>

          <button className="btCounter">+</button>
        </div>
        <span className="cart-item-name">Item name</span>
        <span className="cart-amount">25,00€</span>
      </div>
    </div>
  );
};
export default CartItem;
