import { useState, useEffect } from "react";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import { getFirestore } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

const ItemList = ({ titulo, category }) => {
  const [products, setProducts] = useState([]);

  // Pasar todo a donde llama los productos
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

  useEffect(() => {
    // Esto es para traer todos los elementos de la coleccion
    const db = getFirestore();
    // where("price", ">", 100)
    getDocs(collection(db, "items")).then((snapshot) => {
      let items = snapshot.docs.map((doc) => doc.data());
      if (category) {
        items = items.filter((product) => product.category === category);
        setProducts(items);
      } else {
        setProducts(items);
      }
    });
  }, [category]);
  return (
    <>
      <section className="conteiner-articles">
        <h1>{titulo ? titulo : category.replace(/-+/g, " ")}</h1>
        {products.length ? products.map((producto) => <Item item={producto} key={producto.id} />) : <Loader />}
      </section>
    </>
  );
};

export default ItemList;
