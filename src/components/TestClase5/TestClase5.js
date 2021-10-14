import { useState } from "react";

const Hello = ({ name }) => {
    return <h1>Hello {name}</h1>
}

export default function TestClase5() {
    const [name, setName] = useState('Julián');
    const [count, setCount] = useState(0);
    const [lastClickDate, setLastClickDate] = useState(new Date());

    const handleClick = () =>{
        setCount(count + 1);
        setLastClickDate(new Date())
    }

    return (
        <div style={{marginTop:'8rem'}}>
            <Hello name={name}/>
            <h2>Cantidad de clicks: {count}</h2>
            <h3>Fecha ultimo click: {lastClickDate.toString()}</h3>
            <button onClick={handleClick}>Clickeame</button>
        </div>
    );
}