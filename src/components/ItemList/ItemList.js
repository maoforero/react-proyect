import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import Data from '../../list.json'

const ItemList = () => {
    const[element, setElement] = useState([]);

    useEffect(() => {
        setTimeout(() => {
                setElement(element)
        }, 1500)
    }, []);

    return (
        <div className="container__ItemList">
            {
                Data.map( (movie) => { 
                    return(
                        <div key={movie.id}>
                            {/* <Link to={`/element/${movie.id}`} className='linkElement'> */}
                                <Item info={movie}/>
                            {/* </Link> */}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ItemList
