import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { CartContext } from "../../contexts/cart/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="counter-conteiner">
      {cart.length > 0 && <span id="counter">{cart.length}</span>}
      <button className="btn-carrito" id="btn-carrito">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }} id="carrito-modal">
          <circle cx="10.5" cy="19.5" r="1.5" />
          <circle cx="17.5" cy="19.5" r="1.5" />
          <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z" />
        </svg>
      </button>
    </div>
  );
};

export default CartWidget;