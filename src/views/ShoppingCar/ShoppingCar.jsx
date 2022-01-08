import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import CarItem from '../../components/CarItem/CarItem'

const ShoppingCar = () => {

    const [cartItem, setCartItem] = useState([]);

    const addItem = (item) => {
        const exist = cartItem.find(show => show.id === item.id);
        if(exist){
            setCartItem(cartItem.map(show => show.id === item.id ?
                {
                    ...exist, qty: exist.qty + 1 } : show
                )
            );
        } else {
            setCartItem([...cartItem, {...item, qty: 1}])
        }
    }

    return (
        <div>
            <CarItem className='carItem--Link' cartItem={cartItem} addItem={addItem}/>
        </div> 
    )
}



export default ShoppingCar
