import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Productos from "./Productos";


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState(null);

  // const getData = () => {
  //   fetch(Productos)
  //     .then((res) =>res.json())
  //     .then((data) =>setProducts(data));
  // };

  // useEffect(() => {
    // getData();
    // console.log(Productos)
  //   setTimeout(() => {
  //     setProducts(Productos);
  //   }, 1000);
  // }, []);

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("ERROR: Reject");
        }
      }, 1000);
    });

  useEffect(() => {
    getData(Productos)
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="conteiner-articles">
      {products
        ? products.map((producto) => (
            <ItemList items={producto} key={producto.id} />
          ))
        : "Cargando..."}
    </div>
  );
};

export default ItemListContainer;
