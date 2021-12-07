// Contenedor de ItemDetail
import React, {useState, useEffect} from 'react'
import data from "../../series.json"
const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() =>{
        setTimeout(() =>{
            setItem(data)
        }, 2000)
    });

    return (
        <div>
            <img src="#" alt="" />
            <h1>{item.name}</h1>
        </div>
    )
};

export default ItemDetailContainer;
