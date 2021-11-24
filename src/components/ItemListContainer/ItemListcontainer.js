import React from 'react'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';



const ItemListContainer = () => {

    const [click, setClick] = useState(0);

    //Funcion incremento de clicks
    const addClick = () =>{
        if(click > 9){
            alert(`cantidad Limitada`);
        }else{
            setClick(click + 1);
        };
    };

    //Funcion decremento de clicks
    const removeClick = () => {
        if(click > 0){
            setClick (click - 1);
        }else{
            alert(`Seleccione un producto`)
        };
    };



    return (
        <div>
            <ItemCount sumarClick={addClick} restarClick={removeClick} contador={click}/>
        </div>
    )
}

export default ItemListContainer;
