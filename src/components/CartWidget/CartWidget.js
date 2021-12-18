import React from 'react'
import "./CartWidget.css"
import car_icon from '../../assets/car_icon.png';



const CartWidget = () => {
    return (
        <>
            <img className="icon__carrito" src={car_icon} alt="icono"></img>
        </>
    )
}

export default CartWidget
