import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Item from '../Item/Item';

const ItemList = () => {
    const[movie, setMovies] = useState([]);

    console.log(movie);

    useEffect(() => {
        fetch("https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4")
            .then((resp) => resp.json())
            .then((json) => (setMovies(json)));
    }, []);

    return (
        <div>
            {movie.map((movie) =>{
                return <Item data={movie}/>;
            })}
        </div>
    )
}

export default ItemList
