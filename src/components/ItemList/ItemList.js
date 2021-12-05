import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './ItemList.css';


const ItemList = () => {
    const[movie, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((resp) => resp.json())
            .then((json) => (setMovies(json)));
    }, []);

    return (
        <div className="container__ItemList">
            {movie.map((movie) =>{
                return <Item data={movie} key={movie.id}/>;
            })}
        </div>
    )
}

export default ItemList
