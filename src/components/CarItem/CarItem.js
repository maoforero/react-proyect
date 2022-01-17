import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import spydi from '../../assets/spydi.jpg';
import trash from '../../assets/delete.png';
import upArrow from '../../assets/up-arrow.png';
import downArrow from '../../assets/arrow-down.png';
import './CarItem.css';
import { icons } from 'react-icons';

const CarItem = () => {

    const { location } = useLocation();

const [cartItem, setCartItem] = useState([]);


    return (
        <div className='mainCart'>
            <div className='container__mainCart'>
                    <div className='cartItem__close'>
                        <box-icon name="x"></box-icon>
                    </div>
                <div className='container__cartItem'>
                    <h1 className='cartItem__mainTitle'>Carrito de compras</h1>
                    
                    <div className='container__cartItem--products'>
                        <div className='cartItem--products--part1'>
                            <div className='products--title'>
                                    <h3>XBOX</h3>
                            </div>
                            <div className='container__insidePart1'>
                                <img src={spydi} className='carItem--mainImg' alt='Imagen principal'/>
                                <div className='cartItem--products--price'>
                                    <p>123$</p>
                                </div>
                            </div>

                        </div>
                        <div className='cartItem--products--part2'>
                            <div className='cartItem--products--part3'>
                                <div className='products--cuantity'>
                                    <p>#6</p>
                                </div>
                                <div className='product--buttons'>
                                    <img className='carItem--addButton' src={upArrow} alt='agregar icono'/>
                                    <img className='carItem--remButton' src={downArrow} alt='restar icono'/>
                                    <img className='carItem--delButton' src={trash} alt='borrar icono'/>
                                </div>
                            </div>

                            <div className='cartItem__buy'>
                                <button>Comprar</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CarItem

// <div className='product--buttons'>
// <button onClick={() => setCartItem(item)} className='carItem--addButton'>+</button>
// <button onClick={() => setCartItem(item)} className='carItem--remButton'>-</button>
// </div>

// { <div className='container__cartItem--products'>
// {cartItem.length === 0 && 
// <div className='products--title'>No existen productos seleccionados</div>}
// </div>}
// {
// cartItem.map((item) => {
//     <div key={item.id} className='container__cartItem--products'>
//         <div className='products--title'>
//             {item.name}
//         </div>
//         <div className='product--buttons'>
//             <button onClick={() => setCartItem(item)} className='carItem--addButton'>+</button>
//             <button onClick={() => setCartItem(item)} className='carItem--remButton'>-</button>
//         </div>
//         <div className='products--cuantity'>
//             {item.qty} x ${item.price.toFixed(2)}
//         </div>
//     </div>
// })
// }