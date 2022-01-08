import React from 'react';
import Footer from '../../components/Footer/Footer';
import ItemListcontainer from '../../components/ItemListContainer/ItemListcontainer';
import '../../components/SearchBar/SearchBar.css'
import { Link } from 'react-router-dom'
import Data from '../../list.json';

const Movies = (props) => {

    return (
        <div className='container__movies'>
            <div className='container--moviesTitle'>
            <h1 className='moviesTitle'>Movies</h1>
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
