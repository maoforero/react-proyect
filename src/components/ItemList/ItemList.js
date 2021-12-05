import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const ItemList = () => {
    const[movie, setMovies] = useState([]);

    console.log(movie);

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((resp) => resp.json())
            .then((json) => (setMovies(json)));
    }, []);

    return (
        <div>
            {movie.map((movie) =>{
                return <Item data={movie} key={movie.id}/>;
            })}
        </div>
    )
}

export default ItemList
