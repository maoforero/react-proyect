import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import Data from './productos.json'

const ItemList = () => {
    const[movie, setMovies] = useState([]);

    useEffect(() => {
        setTimeout(() => {

                setMovies(Data)
                // fetch("https://api.github.com/users")
                // .then(response => response.json())
                // .then(json => setMovies(json))
                // .catch(error => console.log('ERROR:', error))
        }, 3000)

    }, []);

    console.log(movie)

    return (
        <div className="container__ItemList">
            {
                Data.map( (movie) => {
                    return(
                        <>
                            <Item info={movie} key={movie.id}/>
                        </>  
                    )
                })
            }
        </div>
    )
}

export default ItemList
