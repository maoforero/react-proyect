import React, { useContext } from 'react';
import spydi from '../../assets/spydi.jpg';
import trash from '../../assets/delete.png';
import upArrow from '../../assets/up-arrow.png';
import downArrow from '../../assets/arrow-down.png';
import './CarItem.css';
import { DataContext } from '../../context/context';

const CarItem = () => {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu
    
    const toogleFalse = () => {
        setMenu()
    }

    const show1 = menu ? "mainCart show" :"mainCart";
    const show2 = menu ? "container__mainCartt show" : "container__mainCart";

    return (
        <div className='mainCart show'>
            <div className='container__mainCart show'>
                <div className='container__cartItem'>
                    <div className='cartItem__close'>
                        <button className='close_cartItem' onClick={toogleFalse}>x</button>
                    </div>
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
                        </div>
                    </div>
                        <div className='finalInfo'>
                            <p className='finalInfo--total'>Total:</p>
                            <p className='finalInfo--total'>1234</p>
                        </div>
                        <div className='cartItem__buy'>
                            <button>Comprar</button>
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