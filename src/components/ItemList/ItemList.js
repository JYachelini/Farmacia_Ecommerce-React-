import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="card" data-key={items.id}>
        <img src={items.img} alt="" />
        <div className="sub-card">
          <a href="#" className="card-titulo">
            {items.nombreComercial}
          </a>
          <div className="card-price">
            <span className="card-price-monto">{items.price}$</span>
          </div>
          <ItemCount stock="5" initial="1" />
        </div>
      </div>
    </>
  );
};

export default ItemList;
