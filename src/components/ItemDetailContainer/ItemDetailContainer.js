// Contenedor de ItemDetail

import React, { useEffect, useState } from 'react';
import ItemDetails from '../ItemDetail/ItemDetails';
import product from '../../list.json';

const ItemDetailContainer = () => {
    const [element, setElement] = useState([]);

    console.log('Estado:', element);

    useEffect(() => {
        setTimeout( () => {
            setElement(product)
        }, 2000)
    }, [])

    return (
        <div>
            <h1>Productos</h1>
            {
                element.map( (prod) => {
                    return(
                        <div key={prod.id}>
                            <ItemDetails/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemDetailContainer
