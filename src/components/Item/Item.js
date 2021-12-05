import React, { useState } from 'react'
import './Item.css'
import carritoIcon from './assets/carrito.png';


const Item = ({data}) => {

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

    return (
        <div className="container__item">
            <img src={data.avatar_url} alt="" className="item_img"/>
            <div className="container__item--Title">
                <span className="item--title">{data.login}</span>
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
            <div className="container__button--comprar">
                <button className="button--comprar">
                    <img className="iconComprar" src={carritoIcon} alt="" />
                </button>
            </div>

        </div>
    )
}

export default Item
