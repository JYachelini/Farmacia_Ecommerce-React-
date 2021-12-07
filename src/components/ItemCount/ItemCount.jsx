import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
import { CartModalFunction } from "../Cart/functions/CartModalFunction";
import CartViewModal from "../Cart/modal/CartViewModal";
const ItemCount = ({ initial, item, btn = true }) => {
  const [count, setCount] = useState(parseInt(initial));
  const { addToCart, removeItem } = useContext(CartContext);
  const [isOpen, openModal, closeModal] = CartModalFunction(false);

  const add = () => {
    if (btn) {
      if (count < item.stock) {
        setCount(count + 1);
      } else {
        console.log("Stock limite");
      }
    } else {
      if (item.stock > 0) {
        setCount(count + 1);
        addToCart(item, 1);
      } else {
        console.log("Stock limite");
      }
    }
  };

  const remove = () => {
    if (count > 0) {
      setCount(count - 1);
      if (!btn) {
        addToCart(item, -1);
      }
    }
    if (count === 1) {
      removeItem(item);
    }
  };

  const addItem = () => {
    if (count > 0) {
      if (count <= item.stock) {
        addToCart(item, count);
        openModal();
      }
    }
  };

  return (
    <>
      <div className="counter-to-cart">
        <button onClick={remove}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
      </div>
      {btn && (
        <button className="add-to-cart" onClick={addItem}>
          Agregar al carrito
        </button>
      )}
      <CartViewModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default ItemCount;
