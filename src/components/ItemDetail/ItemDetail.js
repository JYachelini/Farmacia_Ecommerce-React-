import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ item }) => {
  const [countCart, setCountCart] = useState(0);

  const url = "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/";

  const onAdd = (quantityToAdd) => {
    setCountCart(quantityToAdd);
    console.log(countCart);
  };

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
            <ItemCount stock={item.stock} initial="1" onAdd={onAdd} id={item.id} />
          </div>
        </>
      ) : (
        "Cargando datos..."
      )}
    </section>
  );
};

export default ItemDetail;
