import React from 'react'
import './Item.css'

const Item = ({data}) => {
    return (
        <div className="container__item">
            {/* <img src={} alt="" className="item_img"/> */}
            <div className="container__item--Title">
                <span className="item--title">{data.Title}</span>
            </div>
            <div className="container__item--info">
                <span className="item--info--year">{data.Year}</span>
                <span className="item--info--rated">{data.Rated}</span>
                <span className="item--info--genre">{data.Genre}</span>
            </div>
        </div>
    )
}

export default Item
