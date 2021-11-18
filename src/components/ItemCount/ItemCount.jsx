import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
const ItemCount = ({ stock, initial, producto, showBtn = true }) => {
  const [count, setCount] = useState(parseInt(initial));
  const { addToCart } = useContext(CartContext);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
      if (!showBtn) {
        addToCart(producto, 1);
      }
    } else {
      console.log("Stock limite");
    }
  };

  const remove = () => {
    if (count > 0) {
      setCount(count - 1);
      if (!showBtn) {
        addToCart(producto, -1);
      }
    }
  };

  const handleClick = () => {
    addToCart(producto, count);
  };

  return (
    <>
      <div className="counter-to-cart">
        <button onClick={remove}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
      </div>
      {showBtn && (
        <button className="add-to-cart" onClick={handleClick}>
          Agregar al carrito
        </button>
      )}
    </>
  );
};

export default ItemCount;
