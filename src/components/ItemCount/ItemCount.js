import { useState } from "react";
const ItemCount = ({ stock, initial, onAdd, key}) => {
  const [count, setCount] = useState(parseInt(initial));

  const add = () => {
    if (stock <= 0) {
      console.log(
        "No hay stock, proximamente el error será mostrado en la página"
      );
    } else if (count < stock) {
      setCount(count + 1);
    } else if (count >= stock) {
      console.log("Llegaste al limite del stock disponible.");
    }
  };

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      console.log("No se pueden poner numeros negativos ni 0");
    }
  };
  return (
    <>
        <div className="counterTEST">
          <button onClick={remove}>-</button>
          <span>{count}</span>
          <button onClick={add}>+</button>
        </div>
        <button className="addTest" data-id={key}>Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
