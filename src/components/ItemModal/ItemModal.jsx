import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemModal({ items }) {
  const { removeItem } = useContext(CartContext);

  const url = "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/";
  return (
    <li className="itemCarrito" data-id={items.id}>
      <Link to={`/item/${items.id}`}>
        {" "}
        <img src={url + items.img} alt={items.name} />
      </Link>
      <div className="carrito-details">
        <p>{items.commercialName}</p>
        <p>{items.description}</p>
        <p className="item-total-price">{items.price}$</p>
      </div>
      <div className="flex-column">
        <ItemCount stock={items.stock} item={items} initial={items.quantity} showBtn={false} />
        <button className="borrar-itemCarrito" onClick={() => removeItem(items)}>
          Borrar
        </button>
      </div>
    </li>
  );
}
