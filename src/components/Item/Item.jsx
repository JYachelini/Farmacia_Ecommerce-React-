import { Link } from "react-router-dom";
import React from "react";

function Item({ item }) {
  const url = "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/";
  return (
    <article className="card" data-key={item.id}>
      <Link to={`/item/${item.id}`}>
        <img src={url + item.img} alt="" />
        <div className="sub-card">
          <h1 className="card-titulo">{item.commercialName}</h1>
          <div className="card-price">
            <span className="card-price-monto">{item.price}$</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Item;
