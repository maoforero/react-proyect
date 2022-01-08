import React from 'react';
import Footer from '../../components/Footer/Footer';
import '../../components/SearchBar/SearchBar.css';
import '../../components/Item/Item.css';
import { Link } from 'react-router-dom'
import Data from '../../list.json';

const Movies = (props) => {

    return (
        <div className='container__category'>
            <div className='container--categoryTitle'>
                <h1 className='moviesTitle'>Peliculas</h1>
            </div>
            <div className='selectCategory'>
                {Data.filter((movie) => {
                        if(props.info === movie.type){
                            console.log(movie.name);
                            return movie
                        }else{
                            return 0;
                        }
                    }).map((movie, key) =>{
                        return(
                                <div className='container__search' key={key}>
                                    <div className="container__item">
                                        <img src={movie.picture} alt="" className="item_img"/>
                                        <div className="container__item--Title">
                                            <span className="item--title">{movie.name}</span>
                                        </div>
                                        <div className="container__item--button">
                                            <button className='item--buttonDetails'>
                                                <Link to={`/itemdetail/${movie.id}`} className='link__ItemDetails'>Detalles</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}

export default Movies
