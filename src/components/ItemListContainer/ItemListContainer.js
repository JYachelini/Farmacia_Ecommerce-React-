import ItemList from "../ItemList/ItemList";
import Productos from "../Item/Productos.json";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="conteiner-articles">
      {Productos ? Productos.map(producto => <ItemList items={producto} key={producto.id}/>) : "Loading..."}
    </div>
  );
};

export default ItemListContainer;
