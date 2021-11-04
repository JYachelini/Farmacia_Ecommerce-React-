import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function Item({ item }) {
  const url = "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/"
  return (
    <article className="card" data-key={item.id}>
      <img src={url + item.img} alt="" />
      <div className="sub-card">
        <Link to={`/item/${item.id}`} className="card-titulo">
          {item.nombreComercial}
        </Link>
        <div className="card-price">
          <span className="card-price-monto">{item.price}$</span>
        </div>
        <ItemCount stock="5" initial="1" />
      </div>
    </article>
  );
}

export default Item;