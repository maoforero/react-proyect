import React from 'react'
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import Data from '../../list.json';
import '../../components/SearchBar/SearchBar';

const Theater = ({info}) => {
    
    return (
        <div className='container__movies'>
            <div className='container--titleTheater'>
                <h1 className='moviesTitle'>Teatro</h1>
            </div>
            <div className='selectCategory'>
                {Data.filter((show) => {
                    if(info === show.type){
                        return show;
                    }else {
                        return 0;
                    }
                }).map((show, key) =>{
                    return(
                        <div className='container__search' key={key}>
                            <div className="container__item">
                                <img src={show.picture} alt="" className="item_img"/>
                                <div className="container__item--Title">
                                    <span className="item--title">{show.name}</span>
                                </div>
                                <div className="container__item--button">
                                    <button className='item--buttonDetails'>
                                        <Link to={`/itemdetail/${show.id}`} className='link__ItemDetails'>Detalles</Link>
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

export default Theater
