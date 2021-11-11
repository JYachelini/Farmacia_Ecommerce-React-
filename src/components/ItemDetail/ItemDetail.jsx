import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const url = "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/";

  return (
    <section className="card" data-key={item.id}>
      {item ? (
        <>
          <img src={url + item.img} alt="" />
          <div className="sub-card">
            <Link to={`/item/${item.id}`} className="card-titulo">
              {item.commercialName}
            </Link>
            <p className="card-description">{item.description}</p>
            <p>{item.name}</p>
            <div className="card-price">
              <span className="card-price-monto">{item.price}$</span>
            </div>
            <ItemCount stock={item.stock} initial="1" onAdd={addToCart} item={item} />
            {/* <button className="addTest" onClick={addToCart}>
              Agregar al carrito
            </button> */}
          </div>
        </>
      ) : (
        "Cargando datos..."
      )}
    </section>
  );
};

export default ItemDetail;
