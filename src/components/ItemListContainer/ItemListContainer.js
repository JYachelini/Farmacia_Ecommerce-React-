import { useState } from "react";
const ItemListContainer = (props) => {
    const [count, setCount] = useState(0);

    const add = () =>{
        setCount(count+1);
    }

    const remove = () =>{
        if(count > 0){
            setCount(count-1);
        }else{

        }
    }

    return (
        <div style={{textAlign:'center'}}>
            <div style={{marginTop:'8rem'}}>
                <button onClick={remove}>-</button>
                <span>Items: {count}</span>
                <button onClick={add}>+</button>
            </div>
            <img src="6fJ6LY.jpg" alt="" />
        </div>
    )
}

export default ItemListContainer;