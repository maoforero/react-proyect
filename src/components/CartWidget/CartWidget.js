import React, { useContext } from 'react'
import "./CartWidget.css"
import car_icon from '../../assets/car_icon.png';
import { DataContext } from '../../context/context';



const CartWidget = () => {
    const value =  useContext(DataContext)
    const [menu, setMenu] = value.menu;


    const toogleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <img className="icon__carrito" src={car_icon}  alt="icono"></img>
        </>
    )
}

export default CartWidget
