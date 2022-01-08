import React from 'react'

const CarItem = (props) => {

const {cartItem} = props;

    return (
        <div>
            <h1>Carrito de compras</h1>
            { <div>
                {cartItem.length === 0 && 
                <div>Cart is empty </div>}
            </div>}
            
        </div>
    )
}

export default CarItem
