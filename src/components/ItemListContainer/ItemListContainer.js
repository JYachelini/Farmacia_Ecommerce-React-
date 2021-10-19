import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="conteiner-articles">
            <h1>{greeting}</h1>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer;