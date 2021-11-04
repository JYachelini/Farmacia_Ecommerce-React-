const ItemDetail = ({ item }) => {
  return (
    <>
      <div className="card" data-key={item.id}>
        {item ? (
          <>
            <img src={item.img} alt="" />
            <div className="sub-card">
              <a href="#">{item.nombreComercial}</a>
              <p className="card-description">{item.description}</p>
              <p>{item.name}</p>
              <div className="card-price">
                <span className="card-price-monto">{item.price}$</span>
              </div>
            </div>
          </>
        ) : (
          "Cargando datos..."
        )}
      </div>
    </>
  );
};

export default ItemDetail;
