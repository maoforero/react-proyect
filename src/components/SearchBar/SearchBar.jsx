import React from 'react';
import List from '../../services/list.json';

const SearchBar = () => {
    return (
        <div className='selectCategory'>
            <select name="select" id="">
                <option value=" " selected>-Opciones-</option>
                <option value="Action" >Action </option>
                <option value="Adventure" >Adventure </option>
                <option value="Drama" >Drama </option>
                <option value="Family" >Family </option>
                <option value="Horror" >Horror </option>
                <option value="Musical" >Musical </option>
                <option value="Suspense" >Suspense </option>
            </select>
        </div>
    )
}

export default SearchBar;
