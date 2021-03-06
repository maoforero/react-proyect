import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import carritoIcon from '../../assets/carrito.png'
import Footer from '../Footer/Footer'
import List from '../../list.json';

import './ItemDetails.css'

const ItemDetails = () => {
    let { id } = useParams();
    let idInt = parseInt(id)
    let newItem = [];


    const filerList = List.map(function(show){
        if(idInt === show.id){
            newItem.push(show);
        };
    })

    let count = 0;
    const [click, setClick] = useState(count);

    const addPro = () => {
        if(click > 5){
            alert(`Cantidad limitada ${click}`);
        }else{
            setClick(click + 1 );
        };
    };

    const rmPro = () => {
        if(click < 1){
            return 0
        }else{
            setClick(click - 1);
        };
    };


    // const addProductCart = (item) => {
    //     const existingProduct = 
    // }

    return(
        <>
        <div className='container__itemDetails'>
            {newItem.map((show) => {
                return (
                <div className='container__mainItemDetails' key={show.id}>
                    <div className='container__mainItemDetails--img'>
                        <img src={show.picture} alt="Poster oficial" className='mainItemDetails--img'/>
                    </div>
                    <div className='container__mainItem--title'>
                        <h3 className='mainItem--title'>{show.name}</h3>
                    </div>
                    
                    <div className='container__mainItemDetails-info'>
                        <div className='mainItemDetails--description'>
                            <p className='description'><strong>Idioma:</strong> <span>{show.language}</span></p>
                            <p className='description'><strong>Genero:</strong> <span>{show.gender}</span></p>
                            <p className='description'><strong>Puntuación:</strong> <span> {show.score}</span></p>
                            <p className='description'><strong>Duración:</strong> <span> {show.time} minutos</span></p>
                        </div>
                        <div className='mainItemDetails--selection'>
                            <div className='mainItemDetails--AddAndRm'>
                                <button className='removeTicket' onClick={rmPro} >Eliminar Boleto</button>
                                <button className='addTicket' onClick={addPro} >Agregar Boleto</button>
                            </div>
                            <div className='itemDetails--ticketsTitle'>
                                <h6>Boletos:</h6>
                                <div className="container__info--count">
                                    <span className="info--count">{click}</span>
                                </div>
                            </div> 

                        </div>

                        {click > 0 ?
                            <div className='mainItemDetails--buy'>
                                <Link  className='carItem--Link' 
                                    to={{pathname:'/cart',
                                    state:{
                                        prueba:true}
                            }}>
                                    <button className='buyTicket' >
                                        <img src={carritoIcon} alt="Boton de comprar" className='itemDetails--buyButton'/>
                                    </button>
                                </Link>

                            </div>
                            :
                            <div className='mainItemDetails--buy'>
                                <button className='buyTicket--disable' disabled>
                                    <img src={carritoIcon} alt="Boton de comprar"  className='itemDetails--buyButton'/>
                                </button>
                            </div>
                        }
                    </div>
                </div>
                )
            })}
            
        </div>
        <Footer/>
        </>
    )
}


export default ItemDetails;
