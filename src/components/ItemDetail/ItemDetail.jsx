import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart/CartContext";
import { useEffect } from "react/cjs/react.development";
import { getFirestore } from "../../firebase";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

const ItemDetail = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const url = "https://raw.githubusercontent.com/JYachelini/Proyecto_React/main/src/assets/img/";

  // // Pasar todo a donde llama los productos
  // const [product, setProduct] = useState(null);
  // useEffect(() => {
  //   // Esto es para traer un solo elemento de la coleccion
  //   const db = getFirestore();

  //   const itemsCollection = doc(db, "items", "rDw9CgCj2h0aR2hDVZZQ");
  //   getDoc(itemsCollection).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setProduct(snapshot.data());
  //     }
  //   });
  // }, []);

  // const [product, setProduct] = useState(null);
  // useEffect(() => {
  //   // Esto es para traer todos los elementos de la coleccion
  //   const db = getFirestore();

  //   const q = query(collection(db, "items"), where("price", ">", 100), where("category", "==", "medicamento"));
  //   getDocs(collection(db, "items")).then((snapshot) => {
  //     setProduct(snapshot.docs.map((doc) => doc.data()));
  //     console.log(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);

  return (
    <section className="card" data-key={item.id}>
      {item ? (
        <>
          <img src={url + item.img} alt="" />
          <div className="sub-card">
            <Link to={`/item/${item.id}`} className="card-titulo">
              {item.commercialName}
            </Link>
            <p className="card-description">{item.description}</p>
            <p>{item.name}</p>
            <div className="card-price">
              <span className="card-price-monto">{item.price}$</span>
            </div>
            <ItemCount stock={item.stock} initial="1" item={item} />
          </div>
        </>
      ) : (
        "Cargando datos..."
      )}
    </section>
  );
};

export default ItemDetail;
