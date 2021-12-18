export default ItemDetails

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
            <div className='container__mainItemDetails--img'></div>
            <div className='container__mainItemDetails-info'>
                <div className='mainItemDetails--description'>
                    <p className='description'></p>
                    <p className='description'></p>
                    <p className='description'></p>
                </div>
                <div className='mainItemDetails--actions'>
                    <button className='addTicket'>+</button>
                    <button className='removeTicket'>-</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails
