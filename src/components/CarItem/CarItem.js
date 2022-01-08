import React from 'react';
import './CarItem.css';

const CarItem = (props) => {

const {cartItem, addItem} = props;

    return (
        <div className='container__mainCart'>
            <div className='container__cartItem'>
                <h1 className='cartItem__mainTitle'>Carrito de compras</h1>
                { <div className='container__cartItem--products'>
                    {cartItem.length === 0 && 
                    <div className='products--title'>El carrito esta vacio </div>}
                </div>}
                {
                    cartItem.map((item) => {
                        <div key={item.id} className='container__cartItem--products'>
                            <div className='products--title'>
                                {item.name}
                            </div>
                            <div className='product--buttons'>
                                <button onClick={() => addItem(item)} className='carItem--addButton'>+</button>
                                <button onClick={() => addItem(item)} className='carItem--remButton'>-</button>
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
