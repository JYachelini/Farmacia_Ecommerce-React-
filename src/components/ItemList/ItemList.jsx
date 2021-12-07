import { useState, useEffect } from "react";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import { getFirestore } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

const ItemList = ({ titulo, category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
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
      <div className="category-title">
        <h1>{titulo ? titulo : category.replace(/-+/g, " ")}</h1>
      </div>
      <section className="container-articles">
        {products.length ? products.map((producto) => <Item item={producto} key={producto.id} />) : <Loader />}
      </section>
    </>
  );
};

export default ItemList;
