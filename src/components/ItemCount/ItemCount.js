import './ItemCount.css';
import { useState } from 'react';

const ItemCount = () => {

    const [click, setClick] = useState(0);

    // funcion incremento

    const addClick = () =>{
        if(click > 9){
            alert(`Cantidad limitada`);
        }else{
            setClick(click + 1);
        };
    };

    // funcion decremento

    const removeClick = () => {
        if(click > 0 ){
            setClick(click - 1);
        }else {
            alert(`No se permiten cantidades negativas`);
        };
    };

    return (

        <>
            <div className="container__ItemCount">
                <div className="container__ItemCount--Tittle">
                    <h4 className="ItemCount--Title">Elemento #1</h4>
                </div>
                <div className="container__ItemCount--Contador">
                    <p className="ItemCount--Contador">{click}</p>
                </div>
                <div className="container__ItemCount--Buttons">
                    <button id="addButton" className="count_button" onClick={addClick}>+</button>
                    <button id="removeButton" className="count_button" onClick={removeClick}>-</button>
                </div>
            </div>

            

        </>
    )
}

export default ItemCount
