import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import Data from '../../list.json'

const ItemList = () => {
    const[element, setElement] = useState([]);

    useEffect(() => {
        setTimeout(() => {
                setElement(Data)
        }, 3000)
    }, []);

    console.log(element)

    return (
        <div className="container__ItemList">
            {
                Data.map( (movie) => { 
                    return(
                        <div key={movie.id}>
                            <Item info={movie}/>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ItemList
