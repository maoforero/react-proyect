import React from 'react'
import CarItem from '../../components/CarItem/CarItem'

const ShoppingCar = ({show, click}) => {
    return (
        <div>
            <CarItem className='carItem--Link' product={show} count={click}/>
        </div>
    )
}

export default ShoppingCar
