import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="conteiner-articles">
            <h1>{greeting}</h1>
            <div className="card">
                <ItemCount stock="5" initial="1" name="Item 1"/>
                {/* <ItemCount stock="0" initial="1" name="Item 2"/> */}
            </div>
        </div>
    )
}

export default ItemListContainer;