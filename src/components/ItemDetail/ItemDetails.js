import React, { useEffect, useStates } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import carritoIcon from '../../assets/carrito.png'
import Data from '../../list.json';

const ItemDetails = () => {
    let id = useParams();
    let idItem = id.id;
    let count = 0;

    const[item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setItem(Data)
        }, 1500)
    }, []);

    const [click, setClick] = useState(count);
    const [producto, setProductos] = useState([]);

    useEffect( ( match ) => {
        console.log(match);
    }, [])

    const addPro = () => {
        if(click > 5){
            alert(`Cantidad limitada ${click}`);
        }else{
            setClick(click + 1 );
        };
    };

    const rmPro = () => {
        if(click < 0){
            alert(`Valor no permitido`);
        }else{
            setClick(click - 1);
        };
    };

    const buyPro = () => {
        let pro;
        click > 1 ? pro = 'boletos' : pro = 'boleto';
        alert(`## ${click} ${pro} en el carrito de`)
    }

    return(
        <>
            <h1>ID</h1>
            <h2>{JSON.stringify(params)}</h2>
        </>
    )
}


    // return (
    //     <div className='container__mainItemDetails'>
    //         <h1>Elementos</h1>
    //         <div className='container__mainItemDetails--img'>
    //             <img src="#" alt="Poster oficial" />
    //         </div>
    //         <div className='container__mainItemDetails-info'>
    //             <div className='mainItemDetails--description'>
    //                 <h4 className='description'>Lorem</h4>
    //                 <p className='description'>Lorem</p>
    //                 <p className='description'>Lorem</p>
    //             </div>
    //             <div className='mainItemDetails--selection'>
    //                 <div className='mainItemDetails--AddAndRm'>
    //                     <button className='addTicket' onClick={addPro} >+</button>
    //                     <button className='removeTicket' onClick={rmPro} >-</button>
    //                 </div>
    //                 <div className="container__info--count">
    //                         <span className="info--count">{click}</span>
    //                 </div>
    //             </div>
    //             {
    //                 click > 0 ?
    //             <div className='mainItemDetails--buy'>
    //                 <button className='buyTicket'>
    //                     <img src={carritoIcon} alt="Boton de comprar" />
    //                 </button>
    //             </div>
    //             :
    //             <div className='mainItemDetails--buy'>
    //                 <button className='buyTicket' disabled>
    //                     <img src={carritoIcon} alt="Boton de comprar" onClick={buyPro}/>
    //                 </button>
    //             </div>
    //             }
    //         </div>
    //     </div>
    // )


export default ItemDetails;
