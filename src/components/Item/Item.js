import { Link } from 'react-router-dom';
import './Item.css'


const Item = ({ info }) => {

    
    return (
        <div className="container__item">
            <img src={info.picture} alt="" className="item_img"/>
            <div className="container__item--Title">
                <span className="item--title">{info.name}</span>
            </div>
            <div className="container__item--button">
                <button className='item--buttonDetails'>
                    <Link to={`/itemdetail/${info.id}`} >Detalles</Link>
                </button>
            </div>
        </div>
    )
}

export default Item
