import React from 'react'
import "../CardWidget/CardWidget.css"
import car_icon from './assets/car_icon.png';



const CardWidget = () => {
    return (
        <>
            <img className="icon__carrito" src={car_icon} alt="icono"></img>
        </>
    )
}

export default CardWidget
