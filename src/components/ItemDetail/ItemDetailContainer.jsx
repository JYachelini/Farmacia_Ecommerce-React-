import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [itemDetail, setItemDetail] = useState(null);
  useEffect(() => {
    // Esto es para traer un solo elemento de la coleccion
    const db = getFirestore();

    const itemsCollection = doc(db, "items", itemId);
    getDoc(itemsCollection).then((snapshot) => {
      if (snapshot.exists()) {
        setItemDetail(snapshot.data());
      }
    });
  }, [itemId]);
  return <div className="container-articles">{itemDetail ? <ItemDetail item={itemDetail} /> : <Loader />}</div>;
};

export default ItemDetailContainer;
