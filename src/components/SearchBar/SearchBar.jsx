import React from 'react';
import { useState } from 'react/cjs/react.development';
import Data  from '../../services/list.json';
import ScoreProduct from '../ScoreProduct/ScoreProduct';
import './SearchBar.css';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    return (
        <div className='selectCategory'>
            <input type="text" placeholder='Buscar' className='inputCategory' 
                onChange={e => {setSearch(e.target.value)}}/>
                {
                    Data.filter((val) => {
                        if(search === ""){
                            return val
                        }else if(val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                            return val;
                        }
                    }).map((val, key) => {
                        return ( 
                            <div className='container__search' key={key}>
                                <div className="container__item">
                                    <img src={val.picture} alt="" className="item_img"/>
                                    <div className="container__item--Title">
                                        <span className="item--title">{val.name}</span>
                                    </div>
                                    <div className='container__scoreProduct'>
                                        <ScoreProduct value={val.score}/>
                                    </div>
                                    <div className="container__item--button">
                                        <button className='item--buttonDetails'>
                                        <Link to={`/itemdetail/${val.id}`}>Detalles</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                        )
                    })
                }
        </div>
    )
}

export default SearchBar;
