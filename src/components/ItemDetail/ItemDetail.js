import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const url =
    "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/";
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
            <ItemCount stock="5" initial="1" />
          </div>
        </>
      ) : (
        "Cargando datos..."
      )}
    </section>
  );
};

export default ItemDetail;
