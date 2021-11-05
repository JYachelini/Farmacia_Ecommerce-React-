import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Productos from "../../data/Productos.json";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [itemDetail, setItemDetail] = useState(null);

  const getItem = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se encontró nada");
        }
      }, 2000);
    });

  useEffect(() => {
    getItem(Productos)
      .then((res) => {
        setItemDetail(res.find((details) => details.id === itemId));
      })
      .catch((err) => console.log(err));
  }, [itemId]);
  return (
    <div className="conteiner-articles">
      {itemDetail ? <ItemDetail item={itemDetail} /> : "Cargando..."}
    </div>
  );
};

export default ItemDetailContainer;
