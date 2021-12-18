import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import Data from '../../list.json'

const ItemList = () => {
    const[element, setElement] = useState([]);

    useEffect(() => {
        setTimeout(() => {
                setElement(Data)
                // fetch("https://api.github.com/users")
                // .then(response => response.json())
                // .then(json => setMovies(json))
                // .catch(error => console.log('ERROR:', error))
        }, 3000)
    }, []);

    console.log(element)

    return (
        <div className="container__ItemList">
            {
                Data.map( (movie) => { return(
                        <><Item info={movie} key={movie.id}/></>  
                    )
                })
            }
        </div>
    )
}

export default ItemList
