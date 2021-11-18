import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const url = "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/";
  return (
    <section className="card" data-key={product.id}>
      {product ? (
        <>
          <img src={url + product.img} alt="" />
          <div className="sub-card">
            <Link to={`/item/${product.id}`} className="card-titulo">
              {product.commercialName}
            </Link>
            <p className="card-description">{product.description}</p>
            <p>{product.name}</p>
            <div className="card-price">
              <span className="card-price-monto">{product.price}$</span>
            </div>
            <ItemCount stock={product.stock} initial="0" item={product} />
          </div>
        </>
      ) : (
        "Cargando datos..."
      )}
    </section>
  );
};

export default ItemDetail;
