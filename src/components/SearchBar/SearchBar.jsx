import React from 'react';
import { useState } from 'react/cjs/react.development';
import Data  from '../../services/list.json';
import './SearchBar.css';
const SearchBar = () => {
    const [search, setSearch] = useState('');

    return (
        <div className='selectCategory'>
            <input type="text" placeholder='Opciones' className='inputCategory' 
                onChange={e => {setSearch(e.target.value)}}/>
                {
                    Data.filter((val) => {
                        if(search == ""){
                            return val
                        }else if(val.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                            return val;
                        }
                    }).map((val, key) => {
                        return ( 
                        
                        <div className='container__category' key={key}>
                                    <p className='nameInfo'>{val.name}</p>
                                </div>
                        )
                    })
                }
        </div>
    )
}

export default SearchBar;
