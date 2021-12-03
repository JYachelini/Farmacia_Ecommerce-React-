import ItemModal from "../modal/ItemModal";
import Paymentmethods from "../../Paymentmethods/Paymentmethods";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart/CartContext";
import { Link } from "react-router-dom";

export default function Firststep({ nextStep, totalPrice, confirmation }) {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart-firstStep">
      <div className="container-carrito">
        <h3>Tus productos</h3>
        <div className="carrito">
          {cart.length ? (
            <ul id="carrito">
              {cart.map((producto) => (
                <ItemModal item={producto} key={producto.id} page={true} />
              ))}
            </ul>
          ) : (
            <p id="emptyCart" style={{ display: "block" }}>
              No hay productos en tu carrito
            </p>
          )}
        </div>
      </div>
      <div className="cart-checkout">
        <h3>Resumen del pedido</h3>
        <div className="cart-subtotal">
          <span>Subtotal</span>
          <span>{totalPrice}$</span>
        </div>
        <Link to={`${cart.length ? "/cart/information" : "/cart"}`}>
          {/* Si existen items en el carrito, cuando tocas el botón te manda a la página information */}
          <button onClick={cart.length && confirmation === 1 ? nextStep : null}>Continuar con la compra</button>
          {/* Si existen items en el carrito y estas en la confimación 1 ejecuta la funcion nextStep */}
        </Link>
        <div className="cart-payments">
          <span>Metodos de pago</span>
          <div>
            <Paymentmethods />
          </div>
        </div>
      </div>
    </div>
  );
}
