import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({items, key}) =>{
    return(
        <>
            <Item/>
            <div className="card">
                <img src={items.img} alt="" />
                <div className="sub-card">
                    <a href="#" className="card-titulo">{items.nombreComercial}</a>
                    <p className="card-description">{items.description}</p>
                    <div className="card-price">
                        <span className="card-price-monto">{items.price}</span>
                    </div>
                    <ItemCount stock="5" initial="1"/>
                </div>
            </div>
        </>
    )
}

export default ItemList;