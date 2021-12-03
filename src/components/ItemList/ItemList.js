import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Item from '../Item/Item';

const ItemList = () => {
    const[movie, setMovies] = useState([]);

    console.log(movie);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users#')
            .then((response) => response.json())
            .then((json) => (setMovies(json)));
    }, []);

    return (
        <div>
            {movie.map((movie) =>{
                return <Item />;
            })}
        </div>
    )
}

export default ItemList
