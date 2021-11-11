import { useEffect, useState } from "react";
import Productos from "../../data/Productos.json";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

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
      }, 1500);
    });

  useEffect(() => {
    getData(Productos)
      .then((res) => (category ? setProducts(res.filter((product) => product.category === category)) : setProducts(Productos)))
      .catch((err) => console.log(err));
  }, [category]);
  return (
    <>
      <section className="conteiner-articles">
        <h1>{titulo ? titulo : category.replace(/-+/g, " ")}</h1>
        {products.length ? products.map((producto) => <Item item={producto} />) : <Loader />}
      </section>
    </>
  );
};

export default ItemList;
