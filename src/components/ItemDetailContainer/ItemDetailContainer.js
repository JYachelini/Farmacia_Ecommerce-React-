import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Productos from "../ItemListContainer/Productos"


const ItemDetailContainer = () => {
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
      .then((res) => setItems(res[0]))
      .catch((err) => console.log(err));
  }, []);

  return(
      <>
        <h3>Product Detail Example</h3>
        {/* {item
        ? item.map((producto) => (
            <ItemDetail item={producto} key={producto.id} />
          ))
        : "Cargando..."} */}
        <ItemDetail item={item} key={item.id} />
      </>
  )
}

export default ItemDetailContainer;