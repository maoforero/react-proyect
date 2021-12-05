import React, { useState } from 'react'
import './Item.css'
import carritoIcon from './assets/carrito.png';


const Item = ({ info }) => {

    let count = 0;

    const [click, setClick] = useState(count);

    const addClick = () =>{
        if(click > 9){
            alert(`cantidad limitada ${click}`);
        }else{
            setClick(click + 1);
        }
    }

    const removeClick = () => {
        if(click < 1){
            alert(`Valor no permitido`);
        }else{
            setClick(click - 1);
        }
    }

    const clickCarrito = () =>{
        let boleto;
        click > 1 ? boleto = 'Boletos' : boleto = 'boleto';
            alert(`## ${click} ${boleto} en el carrito de: ${info.name}`);
    };
    
    console.log(`Informacion Productos:`,info);

    return (
        <div className="container__item">
            <img src={info.picture} alt="" className="item_img"/>
            <div className="container__item--Title">
                <span className="item--title">{info.name}</span>
            </div>
            <div className="container__item--button">
                <button className="item--buttonComprar" onClick={addClick}>
                    +
                </button>
                <div className="container__info--count">
                    <span className="info--count">{click}</span>
                </div>
                
                <button className="item--buttonFav" onClick={removeClick}>
                    -
                </button>
            </div>

            {
                click > 0 ? 
                <div className="container__button--comprar">
                    <button className="button--comprar" onClick={() => clickCarrito(click)}>
                        <img className="iconComprar" src={carritoIcon} alt="" />
                    </button>
                </div>
                :
                <div className="container__button--comprarNoValid">
                    <button className="button--comprarNoValid" disabled>
                        <img className="iconComprarNoValid" src={carritoIcon}  alt=""/>
                    </button>

                </div>
            }
        </div>
    )
}

export default Item
