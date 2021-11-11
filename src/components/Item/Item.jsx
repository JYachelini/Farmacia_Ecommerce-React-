import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";

function Item({ item }) {
  // const [cart, setCart] = useContext(CartContext);

  const url = "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/";
  return (
    <article className="card" data-key={item.id}>
      <img src={url + item.img} alt="" />
      <div className="sub-card">
        <Link to={`/item/${item.id}`} className="card-titulo">
          {item.commercialName}
        </Link>
        <div className="card-price">
          <span className="card-price-monto">{item.price}$</span>
        </div>
        {/* <button onClick={() => addToCart(item.length)}>Agregar al carrito</button> */}
      </div>
    </article>
  );
}

export default Item;
