import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function Item({ item }) {
  return (
    <div className="card" data-key={item.id}>
      <img src={item.img} alt="" />
      <div className="sub-card">
        <Link to={`/item/${id}`} className="card-titulo">
          {item.nombreComercial}
        </Link>
        <div className="card-price">
          <span className="card-price-monto">{item.price}$</span>
        </div>
        <ItemCount stock="5" initial="1" />
      </div>
    </div>
  );
}
