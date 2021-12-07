import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/cart/CartContext";
import ItemModal from "../modal/ItemModal";

const CartViewModal = ({ isOpen, closeModal }) => {
  const { cart, clearCart } = useContext(CartContext);

  // Se saca el total de los items sumando los quantity
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className={`overlay ${isOpen && "is-visible"}`} id="overlay" onClick={closeModal}></div>
      {/* Cuando la variable isOpen(del modal) sea verdadera se abre el modal.*/}
      <div className={`modalCarrito ${isOpen || "carritoClose"} ${isOpen && "is-visible carritoAnimation"} `} id="modalCarrito">
        <button className="btn-cerrar-carrito" id="closeCarrito" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}>
            <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path>
            <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path>
          </svg>
        </button>
        <div className="container-carrito">
          <span>Tu carrito</span>
          <div className="carrito">
            {cart.length ? (
              <ul id="carrito">
                {" "}
                {cart.map((producto) => (
                  <ItemModal item={producto} isOpen={isOpen} key={producto.id} />
                ))}{" "}
              </ul>
            ) : (
              <p id="emptyCart" style={{ display: "block" }}>
                No hay productos en tu carrito
              </p>
            )}
            {/* Si hay items en el carrito, los mapea y los muestra. Si no hay, imprime "No hay productos en tu carrito" */}
          </div>
          {cart.length ? (
            <div className="container-carrito-pagar">
              <div className="container-carrito-total">
                <button id="btn-vaciar" className="borrar-itemCarrito" onClick={clearCart}>
                  Vaciar carrito
                </button>
                <div>
                  <p>
                    Total<span id="total">{totalPrice}$</span>
                  </p>
                </div>
              </div>
              <div className="container-btn-pagar">
                <Link to="/cart">
                  <button id="btn-payment" className="btn-pagar">
                    Continuar con la compra
                  </button>
                </Link>
              </div>
            </div>
          ) : null}
          {/* Solo imprime este contenedor si hay items en el carrito */}
        </div>
      </div>
    </>
  );
};

export default CartViewModal;
