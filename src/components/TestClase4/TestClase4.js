import { createElement, useState } from "react";
import { Title } from './title'

export default function TestClase4(){
    const [counter, setCounter] = useState(0)
    const add = () => setCounter(counter+1)
    const remove = () => {
        if(counter > 0){
            setCounter(counter-1);
        }else{
            const errorCounter = document.createElement('span');
            errorCounter.textContent = 'Error'
            const carrito = document.getElementById('carrito');
            carrito.append(errorCounter)
        }
        
    }

    return (
        <div id="carrito">
            <button onClick={remove}>-</button>
            <Title text={counter}/>
            <button id="error" onClick={add}>+</button>
        </div>
    )
}