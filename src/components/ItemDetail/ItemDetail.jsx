import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const url = "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/";
  return (
    <section className="card item-detail" data-key={item.id}>
      {item ? (
        <>
          <div className="sub-card">
            <h1 className="card-titulo">
              {item.commercialName}, <span>{item.name}</span>
            </h1>
            <p className="card-description">{item.description}</p>
            <div className="card-price">
              <span className="card-price-monto">{item.price}$</span>
            </div>
            <ItemCount initial="0" item={item} />
          </div>
          <div className="card-image">
            <img src={url + item.img} alt="" />
          </div>
        </>
      ) : null}
    </section>
  );
};

export default ItemDetail;
