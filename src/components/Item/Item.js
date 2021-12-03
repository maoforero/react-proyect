import React from 'react'
import './Item.css'

const Item = () => {
    return (
        <div className="container__item">
            <img src="" alt="" className="item_img"/>
            <div className="container__item--Title">
                <span className="item--title">Titulo</span>
            </div>
            <div className="container__item--info">
                <span className="item--info--price">Info</span>
                <span className="item--info--description">Info</span>
            </div>
        </div>
    )
}

export default Item
