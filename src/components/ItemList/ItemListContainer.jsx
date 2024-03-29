import ItemList from "./ItemList";
import { useParams } from "react-router";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();

  return <ItemList titulo={greeting} category={categoryId} />;
};

export default ItemListContainer;
