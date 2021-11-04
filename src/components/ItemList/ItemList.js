import { useEffect, useState } from "react";
import Productos from "../../data/Productos.json";

const ItemList = ({ titulo, category }) => {
  const [products, setProducts] = useState([]);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontró nada");
        }
      }, 1000);
    });

  useEffect(() => {
    getData(Productos)
      .then((res) =>
        category
          ? setProducts(res.filter((product) => product.category === category))
          : setProducts(products)
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="conteiner-articles">
      {/* {products
        ? products.map((producto) => <ItemList items={producto} />)
        : "Cargando..."} */}
    </div>
  );
};

export default ItemList;
