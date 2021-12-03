import { useContext } from "react";
import { CartContext } from "../../../contexts/cart/CartContext";
import { CartModalFunction } from "../functions/CartModalFunction";
import ItemModal from "../modal/ItemModal";
import CartForm from "../page/CartForm";

const CartViewModal = ({ isOpen, closeModal }) => {
  const { cart, clearCart } = useContext(CartContext);

  // Se saca el total de los items sumando los quantity
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const [isOpenForm, openModalForm, closeModalForm] = CartModalFunction(false);

  return (
    <>
      <div className={`overlay ${isOpen && !isOpenForm && "is-visible"}`} id="overlay" onClick={closeModal}></div>
      {/* Cuando la variable isOpen(del modal) sea verdadera y cuando la variable isOpenForm(El modal del formulario), se abré el modal.*/}
      <div
        className={`modalCarrito ${isOpen || "carritoClose"} ${isOpen && !isOpenForm && "is-visible carritoAnimation"} ${
          isOpenForm && "carritoClose"
        }`}
        id="modalCarrito"
      >
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
                <button id="btn-payment" className="btn-pagar" onClick={openModalForm}>
                  Continuar con la compra
                </button>
              </div>
            </div>
          ) : null}
          {/* Solo imprime este contenedor si hay items en el carrito */}
        </div>
      </div>
      <CartForm isOpen={isOpenForm} closeModal={closeModalForm} />
    </>
  );
};

export default CartViewModal;
