import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../../contexts/cart/CartContext";
import ItemCount from "../../ItemCount/ItemCount";

export default function ItemModal({ item, isOpen, page = false, remove = true, description = true}) {
  const { removeItem } = useContext(CartContext);

  const url = "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/";
  return (
    <li className="itemCarrito" data-id={item.id}>
      <Link to={`/item/${item.id}`} className="counter-container">
        <span id="counter">{item.quantity}</span>
        <img src={url + item.img} alt={item.name} />
      </Link>
      <div className="carrito-details">
        <p>{item.commercialName}</p>
        <p>{description && item.description}</p>
        <p className="item-total-price">{item.price}$</p>
      </div>
      <div className="flex-column">
        {(isOpen || page) && <ItemCount initial={item.quantity} item={item} btn={false} />}
        {/* Imrpime el ItemCount cuando el modal esta abierto y el page detecta si es para la página /cart o para el modal */}
        {remove && (
          <button className="borrar-itemCarrito" onClick={() => removeItem(item)}>
            Borrar
          </button>
        )}
        {/* Imprime el botón de borrar si remove es verdadero, remove es false cuando esta en la página /cart */}
      </div>
    </li>
  );
}
