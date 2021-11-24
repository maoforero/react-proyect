import React, { useState } from 'react'

const ItemCount = ({title}) => {

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
        }
    }

    return (

        <>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <button className="count_button">+</button>
                <button className="count_button">-</button>
            </div>
            

        </>
    )
}

export default ItemCount
