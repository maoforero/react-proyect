import React, { useEffect, useState } from 'react'
import listaElementos from '../list.json'

const ItemDetails = () => {
    const [element, setElement] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setElement(listaElementos)
        }, 1500);

    }, [])

    return (
        <div className='container__mainItemDetails'>
            <h1>Detalles del producto</h1>
        </div>
    )
}

export default ItemDetails
