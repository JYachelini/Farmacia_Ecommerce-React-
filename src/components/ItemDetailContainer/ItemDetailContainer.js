import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Productos from "../../data/Productos.json";

const ItemDetailContainer = () => {
  const { pokemonId } = useParams();
  console.log(pokemonId);

  const [item, setItems] = useState({});

  const getData = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("ERROR: Reject");
        }
      }, 2000);
    });

  useEffect(() => {
    getData(Productos)
      .then((res) => setItems(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="conteiner-articles">
      <h3>Product Detail Example</h3>
      {/* {item
        ? item.map((producto) => (
            <ItemDetail item={producto} key={producto.id} />
          ))
        : "Cargando..."} */}
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
