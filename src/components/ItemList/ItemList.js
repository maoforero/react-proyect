import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import Data from './productos.json'

const ItemList = () => {
    const[movie, setMovies] = useState([]);

    useEffect(() => {
        setTimeout(() => {
                // fetch("https://api.github.com/users")
                // .then(response => response.json())
                // .then(json => setMovies(json))
                // .catch(error => console.log('ERROR:', error))
        }, 2000)

    }, []);

    return (
        <div className="container__ItemList">
            {
                Data.map( (item) => {
                    return(
                        <>
                            <Item info={item} key={item.id}/>
                        </>  
                    )
                })
            }
            {/* {movie.map((movie) =>{
                return <Item data={movie} key={movie.id}/>;
            })} */}
        </div>
    )
}

export default ItemList
