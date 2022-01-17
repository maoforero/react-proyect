import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CarItem.css';

const CarItem = () => {

    const { location } = useLocation();

const [cartItem, setCartItem] = useState([]);


    return (
        <div className='container__mainCart'>
            <div className='container__cartItem'>
                <h1 className='cartItem__mainTitle'>Carrito de compras</h1>
                { <div className='container__cartItem--products'>
                    {cartItem.length === 0 && 
                    <div className='products--title'>No existen productos seleccionados</div>}
                </div>}
                {
                    cartItem.map((item) => {
                        <div key={item.id} className='container__cartItem--products'>
                            <div className='products--title'>
                                {item.name}
                            </div>
                            <div className='product--buttons'>
                                <button onClick={() => setCartItem(item)} className='carItem--addButton'>+</button>
                                <button onClick={() => setCartItem(item)} className='carItem--remButton'>-</button>
                            </div>
                            <div className='products--cuantity'>
                                {item.qty} x ${item.price.toFixed(2)}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CarItem
